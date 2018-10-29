<template lang="pug">
  nav
    dl(v-for="item in index_nav" :key="item.index")
      dt.iconfont(:class="item.iconClass")
        i(v-if="item.hint.count",v-text="item.hint.count")
      dd {{item.text}}
</template>

<script>
import { mapGetters } from 'vuex'
let indexNav = require('../mock/index-nav')

export default {
  data () {
    return {
    }
  },
  filters: {
    get_prompt (hint) {
      return hint.count
    }
  },
  computed: {
    ...mapGetters(['index_nav'])
  },
  created () {
    setTimeout(() => {
      this.$store.commit('SET_MENU', indexNav)
    }, 2000)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
nav {
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 50px;
  padding-top: 8px;
  background: #f9f9f9;
  font-size: 12px;
}

nav dl {
  user-select: none;
  -webkit-user-select: none;
  flex-grow: 1;
  text-align: center;
  line-height: 1;
}

nav dl.v-link-active dl,
nav dl.v-link-active dt {
  color: #0bb908;
}

nav dt {
  position: relative;
  width: 28px;
  height: 28px;
  margin: 0 auto;
  font-size: 28px;
  color: #797979;
  margin-bottom: 2px;
}

nav dd {
  color: #929292;
  transform-origin: 50% 0;
  transform: scale(0.9);
}

nav ._news-dot {
  right: -2px;
  top: -3px;
  width: 11px;
  height: 11px;
}
</style>
