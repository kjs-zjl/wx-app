import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = ''

// http request 拦截器
axios.interceptors.request.use(config => {
  // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  // if(token){
  //   config.params = {'token':token}
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(respones => {
  if (respones.data.code === -99999) {
    // router.push({
    //   path: '/login',
    //   query: {redirect: router.currentRoute.fullPath}
    // })
  }
  return respones
}, error => {
  return Promise.reject(error)
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
