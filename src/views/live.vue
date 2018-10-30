<template lang="pug">
  ._full_inner._scroll._effect.component-me(:class="{'_effect--30':decline}")
    h1 直播
</template>

<script>
import {mapActions} from 'vuex'

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
    this.set_menu_active(3)
  }
}
</script>

<style lang="less" scoped>

</style>
