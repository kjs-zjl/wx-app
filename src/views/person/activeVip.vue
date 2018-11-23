<template lang="pug">
  ._full_router.component-activeVip
    ._full_inner
      top-handle(curText="卡密激活会员")
      ._cover-content
    //- router
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import topHandle from '@/components/top-handle'

export default {
  components: {
    topHandle
  }
}
</script>

<style lang="less" scoped>
.component-activeVip {

}
</style>
