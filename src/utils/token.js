import {restUrl} from './config.js'

class Token {
  constructor () {
    this.verifyUrl = restUrl + 'token/check'
    this.tokenUrl = restUrl + 'token/user'
  }

  verify () {
    let token = wx.getStorageSync('token')
    if (!token) {
      this.getTokenFromServer()
    } else {
      this._verifyFromServer(token)
    }
  }

  // 从服务器获取Token
  getTokenFromServer (cb) {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          wx.request({
            url: this.tokenUrl,
            method: 'GET',
            data: {
              code: res.code
            },
            success (res) {
              wx.setStorageSync('token', res.data.data)
              resolve(res)
            }
          })
        }
      })
    })
  }

  // 验证Token是否有效
  _verifyFromServer (token) {
    wx.request({
      url: this.verifyUrl,
      method: 'GET',
      data: {
        token: token
      },
      success: (res) => {
        let valid = res.data.data
        if (!valid) {
          this.getTokenFromServer()
        }
      }
    })
  }
}

export {Token}
