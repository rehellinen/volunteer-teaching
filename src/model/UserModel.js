import {BaseModel} from './BaseModel.js'

export class UserModel extends BaseModel {
  // 检查token
  checkToken () {
    let params = {
      url: 'check'
    }
    return this.request(params)
  }
  // 获取当前用户的信息
  getUerInfo () {
    let params = {
      url: 'user'
    }
    return this.request(params)
  }
  // 申请创建组织
  setupOrg (data, type) {
    let params = {
      url: 'organization',
      type: type,
      data: data
    }
    return this.request(params)
  }

  // 更新当前用户的信息
  updateUserInfo (data) {
    let params = {
      url: 'user',
      type: 'PUT',
      data: data
    }
    return this.request(params)
  }
  // 获取用户组织
  loadOrg () {
    let params = {
      url: 'organization',
      type: 'GET'
    }
    return this.request(params)
  }
}
