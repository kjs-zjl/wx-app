import {
  BACK_PATH,
  SET_MENU,
  SET_MENU_ACTIVE
} from '../mutation-types'

let state = {
  backPath: '',
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
  }],
  menu_active: {
    text: '',
    index: 0
  }
}

let getters = {
  backPath: state => state.backPath,
  index_nav: state => state.index_nav,
  menu_active: state => state.menu_active
}

const mutations = {
  [BACK_PATH] (state, path) {
    // 设置返回按钮跳转路径,router.afterEach设置
    state.backPath = {
      path: path
    }
  },
  [SET_MENU] (state, data) {
    state.index_nav = data
  },
  [SET_MENU_ACTIVE] (state, index) {
    // 底部导航激活
    state.menu_active = state.index_nav[index]
  }
}

const actions = {
  back_path ({
    commit,
    state
  }, path) {
    commit(BACK_PATH, path)
  },
  set_menu ({
    commit
  }) {
    let menu = require('../../mock/index-nav')
    commit(SET_MENU, menu)
  },
  set_menu_active ({
    commit
  }, index) {
    commit(SET_MENU_ACTIVE, index)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
