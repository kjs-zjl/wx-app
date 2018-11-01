import {
  NAV_SELECTED
} from '../mutation-types'

const recTabs = require('../../mock/recommend-tab')

let state = {
  recSelect: 'film',
  recTabs: recTabs
}

let getters = {
  recSelect: state => state.recSelect,
  recTabs: state => state.recTabs
}

const mutations = {
  [NAV_SELECTED] (state, id) {
    // 顶部部导航激活
    state.recSelect = id
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
