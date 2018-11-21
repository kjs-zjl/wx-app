import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公用页面组件
const download = {
  path: 'download',
  component: resolve => {
    require(['../views/seed/download'], resolve)
  }
}
// 公用页面组件
const movieDetail = {
  path: 'movieDetail/:movie_id',
  component: resolve => {
    require(['../views/common/movie-detail'], resolve)
  }
}

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '*',
    component: resolve => {
      require(['../views/404'], resolve)
    }
  },
  {
    path: '/recommend',
    component: resolve => {
      require(['../views/recommend'], resolve)
    },
    children: [download, movieDetail]
  },
  {
    path: '/channel',
    component: resolve => {
      require(['../views/channel'], resolve)
    },
    children: [download]
  },
  {
    path: '/seed',
    component: resolve => {
      require(['../views/seed'], resolve)
    },
    children: [download]
  },
  {
    path: '/live',
    component: resolve => {
      require(['../views/live'], resolve)
    }
  },
  {
    path: '/person',
    component: resolve => {
      require(['../views/person'], resolve)
    }
  }
  ]
})
