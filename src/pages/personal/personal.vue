<template lang="pug">
  div
    div.container.personal-container
      // 个人信息栏
      top-image(type="user")
      div.icon-container(@click="toEdit")
        img(src="__IMAGE__/icon/edit.png")
      // 个人信息栏

      // 发布活动
      div.button-container
        img(src="__IMAGE__/icon/personal@postAct.png")
        p 发布活动

      // 发布活动

      // 我参加的活动
      div.button-container
        img(src="__IMAGE__/icon/personal@myjoin.png")
        p 我参加的
      // 参加的活动

      // 发布视频
      div.button-container
        img(src="__IMAGE__/icon/personal@addVideo.png")
        p 发布视频
      // 发布视频

      // 我的视频
      div.button-container
        img(src="__IMAGE__/icon/personal@video.png")
        p 我的视频
      // 我的视

      // 创建组织
      div.button-container
        img(src="__IMAGE__/icon/personal@org.png")
        p {{flag}}
      // 创建组织
</template>

<script>
  import TopImage from '../../base/top-image'
  import {UserModel} from '../../model/UserModel'
  let User = new UserModel()

  export default {
    data () {
      return {
        orders: [],
        flag: '',
        pageEnum: this.$config.pageEnum
      }
    },
    onLoad () {
      User.getUerInfo().then(res => {
        wx.setStorageSync('userInfo', res)
      })
      User.loadOrg().then(res => {
        if (res.OID) {
          wx.setStorageSync('hasOrg', true)
        }
      }).catch(() => {
        wx.setStorageSync('hasOrg', false)
      })
    },
    onShow () {
      this.flag = wx.getStorageSync('hasOrg') ? '修改组织' : '创建组织'
      if (this.ordersChange) {
        this.reload()
        this.setOrderChange(false)
      }
    },
    methods: {
      toActivityList () {
        wx.navigateTo({
          url: '../activity-list/main'
        })
      },
      setupOrg () {
        wx.navigateTo({
          url: '../setup-org/main'
        })
      },
      reload () {
        this.orders = []
        this._loadData()
      },
      toOrderMore () {
        wx.navigateTo({
          url: '../order/main'
        })
      },
      postActivity () {
        wx.navigateTo({
          url: '../post-activity/main'
        })
      },
      postVideo () {
        wx.navigateTo({
          url: '../post-video/main'
        })
      },
      toEdit () {
        wx.navigateTo({
          url: '../edit-info/main'
        })
      }
    },
    components: {
      TopImage
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~css/base"
  .icon-container
    position: absolute
    width: 80rpx
    height: 80rpx
    top: 30rpx
    right: 20rpx
    background-color: white
    border-radius: 50px
    opacity: 0.8
    display: flex
    justify-content: center
    align-items: center
    z-index: 100
    img
      width: 40rpx
      height: 40rpx
  .personal-container
    background-color: $background-color
    padding-bottom: $card-margin-top
    min-height: 100vh
    width: 750rpx
    overflow: hidden

  .button-container
    display: flex
    justify-content: center
    align-items: center
    height: 90rpx
    background-color: white
    margin-top: 20rpx
    width: $card-width
    margin-left: $card-margin-left
    border-radius: $card-border-radius
    overflow: hidden
    img
      width: 40rpx
      height: 40rpx
      margin-right: 20rpx
    p
      font-size: $big-font-size
      letter-spacing: 3px
</style>
