<template lang="pug">
  ._full
    ._full_inner._scroll._effect.component-recommend(:class="{'_effect--30':decline}")
      .component-recommend-content._full
        mt-tab-container._full._scroll(v-model="selected")
          mt-tab-container-item(v-for="item in recTabs", :key="item.id", :id="item.id")
            film(v-if="item.id == 'film'")
            tv(v-else-if="item.id == 'tv'")
            topice(v-else-if="item.id == 'topice'")
            classify(v-else-if="item.id == 'classify'")
            search(v-else)
    transition(name="hor")
      router-view
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { tabContainer, tabContainerItem } from 'mint-ui'
import film from './recommend/film'
import tv from './recommend/tv'
import topice from './recommend/topice'
import classify from './recommend/classify'
import search from './recommend/search'

let components = {}
components[tabContainer.name] = tabContainer
components[tabContainerItem.name] = tabContainerItem
components['film'] = film
components['tv'] = tv
components['topice'] = topice
components['classify'] = classify
components['search'] = search

export default {
  components,
  data () {
    return {
      decline: false
    }
  },
  computed: {
    ...mapGetters(['recSelect', 'recTabs']),
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
    ...mapActions(['set_menu_active'])
  },
  created () {
    this.set_menu_active(0)
  }
}
</script>

<style lang="less" scoped>
</style>
