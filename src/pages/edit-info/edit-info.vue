<template lang="pug">
  div.container.edit-container
    title-panel(:title="title", image="__IMAGE__/icon/edit.png")
    div.form-container
      form(@submit="formSubmit")
        div.section
          p 姓名：
          input(name="UNAME" auto-focus :value="userInfo.UNAME")
        div.section
          p 性别：
          input(name="USEX" :value="userInfo.USEX")
        div.section
          p 职业：
          input(name="UOCCU" :value="userInfo.UOCCU")
        div.section
          p 简介：
          input(name="USIMPINTRO" :value="userInfo.USIMPINTRO")
        div.section
          p 详情：
          textarea(name="UINTRO" :value="userInfo.UINTRO")
        div.section
          p 手机：
          input(name="UPHONE" :value="userInfo.UPHONE")
        div.section
          p 邮箱：
          input(name="UEMAIL" :value="userInfo.UEMAIL")
        button.submit-btn(formType="submit")
          p 保存
</template>

<script>
import TitlePanel from '../../base/title-panel'
import {UserModel} from '../../model/UserModel'

let User = new UserModel()

export default {
  mounted () {
  },
  data () {
    return {
      title: '修 改 信 息',
      info: {},
      userInfo: ''
    }
  },
  onLoad () {
    this.userInfo = wx.getStorageSync('userInfo')
  },
  methods: {
    formSubmit (event) {
      let data = event.mp.detail.value
      // User.checkToken().then(res => {
      //   console.log(res)
      // })
      User.updateUserInfo(data).then(res => {
        User.getUerInfo().then(res => {
          wx.setStorageSync('userInfo', res)
        })
        wx.showToast({
          title: '修改信息成功',
          image: this.$config.iconType.SUCCESS
        })
      })
    }
  },
  components: {
    TitlePanel
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~css/base"

  .edit-container
    background-color: $background-color
    min-height: 100vh

  .form-container
    background-color: white
    width: $card-width
    margin-left: $card-margin-left
    margin-top: 20rpx
    border-radius: $card-border-radius
  form
    display: block
    margin-top: 20rpx

  .section
    border-bottom: 1rpx solid $lighter-font-color
    margin-left: 5%
    width: 90%
    display: flex
    align-items: center

  .section p
    font-size: $small-font-size
    color: $grey-font-color
    padding: 20rpx 0 15rpx 0

  .section input
    font-size: $small-font-size
    color: $grey-font-color
    padding: 20rpx 0 15rpx 0

  .submit-btn
    width: 89%
    margin: 50rpx 5.4%

  .submit-btn p
    font-size: $normal-font-size
    color: $grey-font-color
</style>
