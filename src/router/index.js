import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公用页面组件--注册
const register = {
  path: 'register',
  component: resolve => {
    require(['../views/common/register'], resolve)
  }
}
// 公用页面组件--登录
const login = {
  path: 'login',
  component: resolve => {
    require(['../views/common/login'], resolve)
  },
  children: [register]
}
// 公用页面组件--我的视频
const myVideos = {
  path: 'myVideos',
  component: resolve => {
    require(['../views/common/my-videos'], resolve)
  }
}
// 公用页面组件--下载
const download = {
  path: 'download',
  component: resolve => {
    require(['../views/common/download'], resolve)
  },
  children: [myVideos]
}
// 公用页面组件--影片详情
const movieDetail = {
  path: 'movieDetail/:movie_id',
  component: resolve => {
    require(['../views/common/movie-detail'], resolve)
  },
  children: [download]
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
    children: [
      download,
      {
        path: 'netsVip',
        component: resolve => {
          require(['../views/channel/netsVip'], resolve)
        },
        children: [download]
      }
    ]
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
    },
    children: [
      login,
      {
        path: 'onlinePlay',
        component: resolve => {
          require(['../views/person/onlinePlay'], resolve)
        },
        children: [download]
      },
      {
        path: 'myCollection',
        component: resolve => {
          require(['../views/person/myCollection'], resolve)
        }
      },
      {
        path: 'feedback',
        component: resolve => {
          require(['../views/person/feedback'], resolve)
        }
      },
      {
        path: 'appLock',
        component: resolve => {
          require(['../views/person/appLock'], resolve)
        }
      },
      {
        path: 'openVip',
        component: resolve => {
          require(['../views/person/openVip'], resolve)
        }
      },
      {
        path: 'activeVip',
        component: resolve => {
          require(['../views/person/activeVip'], resolve)
        }
      }
    ]
  }
  ]
})
