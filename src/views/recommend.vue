<template lang="pug">
  ._full
    ._full_inner._scroll._effect.component-recommend(:class="{'_effect--30':decline}")
      .component-recommend-content
        h1 推荐
        router-link(to="child",append)
          button 按鈕
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      decline: false
    }
  },
  methods: {
    ...mapActions(['set_menu_active'])
  },
  created () {
    this.set_menu_active(0)
  }
}
</script>

<style lang="less" scoped>

</style>
