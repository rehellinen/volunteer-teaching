<template lang="pug">
  div.container
    div.listBlock(v-for="item in allActivities")
      p 名称：{{item.ANAME}}
      p 起始时间：{{item.AST}}
      p 结束时间：{{item.AET}}
      p 人数：{{item.ANUMBER}}/{{item.ANUMERSTRI}}
      P 详情：{{item.AINTRO}}
</template>

<script>
  import { AllActivitiesModel } from '../../model/AllActivitiesModel'

  let AllActivities = new AllActivitiesModel()
  export default {
    name: 'all-activities',
    data () {
      return {
        allActivities: {}
      }
    },
    onLoad () {
      AllActivities.loadData().then(res => {
        console.log(res)
        this.allActivities = res
      })
    }

  }
</script>

<style scoped lang="sass">
  @import '~css/base'
  .listBlock
    margin: 50rpx
    padding-bottom: 10rpx
</style>
