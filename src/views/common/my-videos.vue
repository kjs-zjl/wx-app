<template lang="pug">
  ._full_router.component-download
    ._full_inner
      top-handle(curText="我的视频", deletes)
      ._cover-content
        cardMyvideos
    //- router
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import topHandle from '@/components/top-handle'
import cardMyvideos from '@/components/card-myvideos'

export default {
  components: {
    topHandle,
    cardMyvideos
  }
}
</script>

<style lang="less" scoped>
.component-download {

}
</style>
