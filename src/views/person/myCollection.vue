<template lang="pug">
  ._full_router.component-myCollection
    ._full_inner
      top-handle(curText="我的收藏", clear)
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
.component-myCollection {

}
</style>
