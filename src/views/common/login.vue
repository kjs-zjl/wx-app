<template lang="pug">
  ._full_router.component-login
    ._full_inner
      top-handle(curText="登录", regist)
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
.component-login {

}
</style>
