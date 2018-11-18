<template lang="pug">
  div
    div.container
      div.now
        div.title
          p 所有活动
        div.listBlock(v-for="item in allActivities")
          img(src="__IMAGE__/icon/no.png")
          div.content
            div.base-info
              div.prop
                p 名称：
                p 开始时间：
                p 结束时间：
                p 人数：
              div.value
                p {{item.ANAME}}
                p {{item.AST}}
                p {{item.AET}}
                p {{item.ANUMBER}}/{{item.ANUMRESTRI}}
            p.desc 详情：{{item.AINTRO}}

          <!--p 名称：{{item.ANAME}}-->
          <!--p 起始时间：{{item.AST}}-->
          <!--p 结束时间：{{item.AET}}-->
          <!--p 人数：{{item.ANUMBER}}/{{item.ANUMRESTRI}}-->
          <!--P 详情：{{item.AINTRO}}-->
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
  .container
    background-color: $background-color
    min-height: 100vh
  .now
    width: 100%
    display: flex
    flex-direction: column
    font-size: $normal-font-size
    .title
      display: flex
      justify-content: center
      font-size: $bigger-font-size
      letter-spacing: 5px
      margin: 20rpx 0 30rpx 0
    .listBlock
      display: flex
      width: 96%
      margin-left: 2%
      border-radius: 10px
      background-color: white
      margin-bottom: 20rpx
      padding: 20rpx 0
      align-items: center
      .content
        display: flex
        flex-direction: column
        margin-left: 35rpx
        width: 70%
        .base-info
          display: flex
          .prop
            display: flex
            flex-direction: column
            justify-content: center
            width: 220rpx
          .value
            display: flex
            flex-direction: column
            justify-content: center
        .desc
          margin-top: 20rpx
      img
        width: 200rpx
        height: 200rpx
        margin: 20rpx 10rpx
</style>
