<template lang="pug">
  div.container.edit-container
    title-panel(:title="title", image="__IMAGE__/icon/edit.png")
    div.form-container
      form(@submit="formSubmit")
        div.section
          p 组织名字：
          input(name="ONAME")
        div.section
          p 简介：
          input(name="OSIMPINTRO")
        div.section
          p 手机：
          input(type="number" name="OPHONE")
        div.section
          p 邮箱：
          input(name="OEMAIL")
        div.section
          p 详情：
          textarea(name="OINTRO")
        button.submit-btn(formType="submit")
          p {{flag}}
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
        title: ' ',
        info: {}
      }
    },
    computed: {
      flag () {
        console.log(wx.getStorageSync('hasOrg') ? '修改' : '申请')
        return wx.getStorageSync('hasOrg') ? '修改' : '申请'
      }
    },
    methods: {
      formSubmit (event) {
        let data = event.mp.detail.value
        if (wx.getStorageSync('hasOrg')) {
          User.setupOrg(data, 'PUT').then(result => {
            console.log(result)
          })
        } else {
          User.setupOrg(data, 'POST').then(res => {
            console.log(res)
            wx.showToast({
              title: '申请成功',
              image: this.$config.iconType.SUCCESS,
              success (res) {
                setTimeout(() => {
                  wx.navigateBack()
                }, 3000)
              }
            })
          }).catch(() => {
            wx.showToast({
              title: '请勿重复创建',
              image: this.$config.iconType.FAIL,
              success (res) {
                setTimeout(() => {
                  wx.navigateBack()
                }, 3000)
              }
            })
          })
        }
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
