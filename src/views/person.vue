<template lang="pug">
  ._full_inner._scroll._effect.component-find(:class="{'_effect--30':decline}")
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
    this.set_menu_active(4)
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>

</style>
