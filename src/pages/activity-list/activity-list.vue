<template lang="pug">
  div.list
    div.theme-photo-container(v-for="item in activities" :@click="toDetail({id:item.AID})")
      p 活动名：{{item.ANAME}}
      p 举办组织：
      p 起始时间：{{item.AST}}
      p 结束时间：{{item.AET}}
      p 人数上限：{{item.ANUMRESTRI}}
</template>

<script>
  export default {
    name: 'activity-list'
  }
</script>

<style scoped>

</style>
