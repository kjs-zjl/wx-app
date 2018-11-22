// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclcik from 'fastclick'
import store from './store'
import MuseUI from 'muse-ui'
import Loading from 'muse-ui-loading'
import Message from 'muse-ui-message'
import { Toast } from 'mint-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import 'muse-ui-message/dist/muse-ui-message.css'

require('./mock/mock')

Vue.use(MuseUI)
Vue.use(Loading, {
  overlayColor: '#f1f0f6'
})
Vue.use(Message)

window.Toast = Toast

fastclcik.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
