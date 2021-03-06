import {iconType} from './config'

// 对“对象数组”进行深拷贝
function copyObjArr (arr) {
  return [].concat(JSON.parse(JSON.stringify(arr)))
}

function toast (title, icon = iconType.SUCCESS, isBack = true) {
  wx.showToast({
    title,
    image: icon,
    success: () => {
      if (isBack) {
        wx.navigateBack()
      }
    }
  })
}

function modal (title = '', content = '', cb, showCancel = true) {
  wx.showModal({
    title,
    content,
    showCancel,
    confirmColor: '#a9936e',
    success (res) {
      cb && cb(res)
    }
  })
}

function getSwitchTabHeight (index) {
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().select(`.switch-${index}`).boundingClientRect(res => {
      console.log(res.height, index)
      resolve(res.height)
    }).exec()
  })
}

function share (title, path) {
  return {
    title,
    path,
    success: (res) => {
      wx.showToast({
        title: '分享成功',
        image: iconType.SUCCESS
      })
    },
    fail: (res) => {
      wx.showToast({
        title: '分享失败',
        image: iconType.FAIL
      })
    }
  }
}

export {copyObjArr, toast, modal, getSwitchTabHeight, share}
