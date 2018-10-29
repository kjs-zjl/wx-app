<template lang="pug">
  #app
    header.app-header(v-show="appload")
      ._effect(:class="{'_effect--50':decline}")
        indexHeader
    footer.app-footer._line-fine(v-show="appload")
      ._effect(:class="{'_effect--50':decline}")
        index-nav
</template>

<script>
import indexHeader from './components/index-header'
import indexNav from './components/index-nav'

require('./assets/css/common.less')
require('./assets/css/base.less')

export default {
  components: {
    indexHeader,
    indexNav
  },
  data () {
    return {
      appload: true, // 主结构
      welcome: false, // 欢迎页
      isnotMobile: false, // 是否为移动设备访问
      decline: false // router animation
    }
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style>
</style>
