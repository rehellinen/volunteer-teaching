<template lang="pug">
  div.container.edit-container
    title-panel(:title="title", image="__IMAGE__/icon/edit.png")
    div.form-container
      form(@submit="formSubmit")
        div.section
          p 活动名：
          input(name="ANAME" auto-focus)
        div.section
          p 人数上限：
          input(name="ANUMERSTRI")
        div.section
          p 起始时间：
          input(name="ACT" placeholder="请以 年/月/日 的格式填写")
        div.section
          p 结束时间：
          input(name="AET" placeholder="请以 年/月/日 的格式填写")
        div.section
          p 简介：
          input(name="ASIMPINTRO")
        div.section
          p 详情：
          input(name="AINTRO")
        div.section
          p 是否需要帮助
          radio-group
            checkbox(name="isSupport" checkd="true") 是
            checkbox(name="noSupport" checkd="false") 否
        button.submit-btn(formType="submit")
          p 发布
</template>

<script>
  import TitlePanel from '../../base/title-panel'
  import {UserModel} from '../../model/UserModel'

  let User = new UserModel()

  export default {
    mounted () {
      User.getBuyerInfo().then((res) => {
        this.info = res
      })
    },
    data () {
      return {
        title: '发 布 活 动',
        info: {}
      }
    },
    methods: {
      // 提交按钮事件
      formSubmit (event) {
        let data = event.mp.detail.value
        User.updateBuyerInfo(data).then(res => {
          wx.showToast({
            title: '发布成功',
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
