<template lang="pug">
  ._full_router.component-child
    ._full_inner
      h1
        router-link(to="child-detail",append) butons

    //- router
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.component-child {
  background-color: saddlebrown;
  min-height: 500px;
}
</style>
