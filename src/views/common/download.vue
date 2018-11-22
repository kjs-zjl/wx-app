<template lang="pug">
  ._full_router.component-download
    ._full_inner
      top-handle(curText="正在下载", clear, videos)
      ._cover-content
        cardDownload
    //- router
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import topHandle from '@/components/top-handle'
import cardDownload from '@/components/card-download'

export default {
  components: {
    topHandle,
    cardDownload
  }
}
</script>

<style lang="less" scoped>
.component-download {

}
</style>
