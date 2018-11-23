<template lang="pug">
  ._full_router.component-openVip
    ._full_inner
      top-handle(curText="开通会员")
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
.component-openVip {

}
</style>
