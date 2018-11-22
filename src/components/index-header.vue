<template lang="pug">
  ._cover-top
    .other
      //- span.iconfont.icon-tips-jia
      //- span.iconfont.icon-tips-add-friend
      span(style="display:none;", v-show="menu_active.index != 3 && menu_active.index != 4", @click="go_download") 下载
      //- ul.tips-menu(:class="tips_isOpen?'tips-open':'tips-close'")
        li(v-for="item in menuArr")
          span.iconfont(:class="item.iconClass")
          div(v-text="item.text")
    .center
      //- 推荐
      mt-navbar(v-if='menu_active.index == 0', v-model="selected")
        mt-tab-item(v-for="item in recTabs", :key="item.id", :id="item.id") {{item.text}}
      //- 种子
      .seed-search(v-else-if='menu_active.index == 2')
        span 种子
        input(placeholder="勇闯天涯")

      span(v-else) {{menu_active.text}}
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, TabItem, Search } from 'mint-ui'

let components = {}
components[Search.name] = Search
components[Navbar.name] = Navbar
components[TabItem.name] = TabItem

export default {
  components,
  data () {
    return {
      // tips_isOpen: false,
      menuArr: [
        {
          _link: {
            path: 'group-chat',
            append: true
          },
          text: '发起群聊',
          iconClass: 'icon-tips-xiaoxi'
        },
        {
          _link: {
            path: 'add-friends',
            append: true
          },
          text: '添加朋友',
          iconClass: 'icon-tips-add-friend'
        },
        {
          _link: {
            path: 'sao-yi-sao',
            append: true
          },
          text: '扫一扫',
          iconClass: 'icon-tips-saoyisao'
        },
        {
          _link: {
            path: 'receipt-payment-money',
            append: true
          },
          text: '收付款',
          iconClass: 'icon-tips-fukuan'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['menu_active', 'recSelect', 'recTabs']),
    selected: {
      get () {
        return this.recSelect
      },
      set (val) {
        this.$store.commit('NAV_SELECTED', val)
      }
    }
  },
  methods: {
    go_download () {
      event.stopPropagation()
      this.$router.push({ path: 'download', append: true })
    }
  }
}
</script>

<style lang="less" scoped>
.center {
  margin: 0 auto;
  text-align: center;
  .mint-navbar {
    width: 80%;
    background-color: inherit;
    .mint-tab-item {
      &.is-selected{
        border-bottom: none;
        margin-bottom: 0;
      }
      // margin-right: 10px;
    }
  }
  .seed-search {
    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
      margin-right: 42px;
      height: 30px;
      padding: 0 10px;
      border-radius: 4px;
      flex: 1;
    }
  }
}

.other {
  position: absolute;
  right: 15px;
}

.other .iconfont {
  font-size: 22px;
}

.other .tips-masker {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  top: 45px;
  bottom: 50px;
}

.other .tips-menu {
  position: absolute;
  z-index: 2;
  width: 133px;
  font-size: 16px;
  right: -10px;
  top: 54px;
  text-align: left;
  border-radius: 2px;
  background-color: #49484b;
  padding: 0 15px;
  transform-origin: 90% 0%;
}

.tips-open {
  transition: initial;
  opacity: 1;
}

.tips-close {
  opacity: 0;
  transition: 0.2s opacity ease, 0.6s transform ease;
  transform: scale(0);
}

.other .tips-menu li {
  position: relative;
  height: 40px;
  line-height: 40px;
}

.other .tips-menu li:not(:last-child)::after {
  content: "";
  width: 200%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  background-color: #5b5b5d;
  transform: scale(0.5);
  transform-origin: 0 100%;
}

.other .tips-menu::before {
  width: 0;
  height: 0;
  position: absolute;
  top: -8px;
  right: 15px;
  content: "";
  border-width: 0 6px 8px;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0);
  border-style: solid;
}

.other .tips-menu .iconfont {
  float: left;
  font-size: 16px;
}

.other .tips-menu .iconfont {
  margin-right: 15px;
}
</style>
