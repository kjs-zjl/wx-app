import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'

// 基本通用
import base from './modules/base'
// 聊天
import chat from './modules/chat'
// 联系人
import contacts from './modules/contacts'
// 发现
import find from './modules/find'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    chat,
    contacts,
    find
  },
  getters,
  actions,
  strict: true
})
