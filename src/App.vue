<template lang="pug">
  #app
    header.app-header(v-show="appload")
      ._effect(:class="{'_effect--50':decline}")
        indexHeader(style="overflow:visible;")
    section.app-content
      router-view(keep-alive)
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

<style scoped>
.welcome {
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    transition: .25s all linear;
    background: url(./assets/images/launchimage.png) no-repeat center center;
    background-size: cover;
}

.welcome-leave {
    opacity: 0;
}
.mobile-tips{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,.75);
    text-align: center;
    color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mobile-tips-inner{
    width: 330px;
    padding-bottom: 200px;
}
.mobile-model{
    flex-grow: 1;
}
</style>
