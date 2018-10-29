
import {SET_MENU} from '../mutation-types'

let state = {
  backPatg: '',
  index_nav: [{
    index: 0,
    path: {
      path: '/chat'
    },
    hint: {
      type: 'count',
      count: 0
    }, // count,dot
    iconClass: 'icon-wechat',
    text: '微信'
  } ],
  menu_active: {text: '', index: 0}
}

const mutations = {
  [SET_MENU] (state, data) {
    state.index_nav = data
  }
}

export default {
  state,
  mutations
}
