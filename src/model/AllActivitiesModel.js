import {BaseModel} from './BaseModel'
export class AllActivitiesModel extends BaseModel {
  loadData () {
    let params = {
      url: 'activity/all',
      type: 'GET'
    }
    return this.request(params)
  }
}
