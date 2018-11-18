<template lang="pug">
  div
    div.container.index-container(v-show="!showLoading")
      // 轮播图
      swiper.banner.header-image.header(interval='5000' :indicator-dots='true' :autoplay='true')
        swiper-item(v-for="item in banners" :key="item" )
          img(:src="item.url")

      // 精选主题
      div.theme
        p.title 主题
        div.theme-photo-container
          div(v-for="item in themes" :key="item")
            img(:src="item.url"  @click="toTheme(item.name)")
            p {{item.cn}}

      div.now
        div.title
          p(@click="toActivitiesMore") 最新活动
        div.listBlock
          img(src="__IMAGE__/icon/no.png")
          div.content
            div.base-info
              div.prop
                p 名称：
                p 开始时间：
              div.value
                p 云南支教
                p 2018-11-18
            p.desc 简介：前往山区进行支教
        div.listBlock
          img(src="__IMAGE__/icon/no.png")
          div.content
            div.base-info
              div.prop
                p 名称：
                p 开始时间：
              div.value
                p 云南支教
                p 2018-11-18
            p.desc 简介：前往山区进行支教
</template>

<script>
  export default {
    data () {
      return {
        banners: [
          {'url': '__IMAGE__/banners/banner1.jpg'
          },
          {'url': '__IMAGE__/banners/banner2.jpg'
          }
        ],
        themes: [
          {'url': '__IMAGE__/icon/index@video.png',
            'name': 'video',
            'cn': '视频'
          },
          {'url': '__IMAGE__/icon/index@activity.png',
            'name': 'activity',
            'cn': '活动'
          },
          {
            'url': '__IMAGE__/icon/index@org.png',
            'name': 'org',
            'cn': '组织'
          }
        ]
      }
    },
    methods: {
      toActivitiesMore () {
        wx.navigateTo({
          url: '../all-activities/main'
        })
      },
      touchmove (event) {
        console.log(event)
      },
      toTheme (name) {
        console.log(name)
        switch (name) {
          case 'org' :
            wx.navigateTo({
              url: '../all-org/main'
            })
            break
          case 'activity':
            wx.navigateTo({
              url: '../all-activities/main'
            })
            break
        }
      }
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~css/base'
  .index-container
    background-color: $background-color

  /* banner */
  .banner
    width: 750rpx
    height: 415rpx
    img
      width: 750rpx
      height: 415rpx
  /* banner */

  /* theme */
  .theme
    display: flex
    flex-direction: column
    color: $base-font-color
    align-items: center
    p
      margin: 13px 0
      letter-spacing: 7px
      font-size: $bigger-font-size
    .theme-photo-container
      width: 100%
      display: flex
      flex-direction: row
      flex-wrap: wrap
      div
        width: 47%
        margin-left: 2%
        height: 120rpx
        display: flex
        align-items: center
        justify-content: center
        background-color: white
        border-radius: 10px
        p
          font-size: $normal-font-size
        img
          width: 100rpx
          height: 100rpx
          margin-right: 35rpx
      div:last-child
        margin: 20rpx 0
        border-radius: 10px
        width: 96%
        margin-left: 2%
        height: 140rpx
        img
          width: 120rpx
          height: 120rpx
          margin-right: 50rpx
  /* theme */

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
      align-items: center
      .content
        display: flex
        flex-direction: column
        margin-left: 35rpx
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
