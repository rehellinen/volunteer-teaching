import {BaseModel} from './BaseModel'
export class AllOrgModel extends BaseModel {
  loadData () {
    let params = {
      url: 'organization/all',
      type: 'GET'
    }
    return this.request(params)
  }
}
