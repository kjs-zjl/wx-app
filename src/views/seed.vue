<template lang="pug">
  ._full
    ._full_inner._scroll._effect.component-seed(:class="{'_effect--30':decline}")
      .component-seed-content._full
        mt-navbar(v-model="selected")
          mt-tab-item(id="1") 公告
          mt-tab-item(id="2") 免费体验区
          mt-tab-item(id="3") 热门搜索
          mt-tab-item(id="4") 会员推荐区1
          mt-tab-item(id="5") 会员推荐区2

        mt-tab-container._full._scroll(v-model="selected", swipeable)
          mt-tab-container-item(id="1")
            cardSeed
          mt-tab-container-item(id="2")
            cardSeed
          mt-tab-container-item(id="3") 热门搜索
          mt-tab-container-item(id="4") 会员推荐区1
          mt-tab-container-item(id="5") 会员推荐区2

        //- cardSeed
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import { mapActions } from 'vuex'
import { Navbar, TabItem, tabContainer, tabContainerItem } from 'mint-ui'
import cardSeed from '@/components/card-seed'

let components = {}
components[Navbar.name] = Navbar
components[TabItem.name] = TabItem
components[tabContainer.name] = tabContainer
components[tabContainerItem.name] = tabContainerItem

components['cardSeed'] = cardSeed

export default {
  components,
  data () {
    return {
      decline: false,
      selected: '1'
    }
  },
  methods: {
    ...mapActions(['set_menu_active'])

  },
  created () {
    this.set_menu_active(2)
  }
}
</script>

<style lang="less" scoped>
</style>
