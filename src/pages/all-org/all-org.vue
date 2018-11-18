<template lang="pug">
  div.container
    div.listBlock(v-for="item in allOrg")
      p 名称：{{item.ONAME}}
      p 简介：{{item.OSIMPINTRO}}
      p 联系方式：{{item.OPHONE}}
      p 邮箱：{{item.OEMAIL}}
      P 详情：{{item.OINTRO}}
</template>

<script>
  import {AllOrgModel} from '../../model/AllOrgModel'
  let AllOrg = new AllOrgModel()

  export default {
    mounted () {
    },
    data () {
      return {
        allOrg: {}
      }
    },
    onLoad () {
      AllOrg.loadData().then(res => {
        console.log(res)
        this.allOrg = res
      })
    }}
</script>

<style scoped lang="sass">
  @import '~css/base'
  .listBlock
    margin: 50rpx
    padding-bottom: 10rpx
</style>
