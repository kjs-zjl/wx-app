<template lang="pug">
  ._full_router.component-online
    ._full_inner
      top-handle(curText="在线播放", download)
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
.component-online {

}
</style>
