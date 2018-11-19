<template lang="pug">
  ._full
    ._full_inner._scroll._effect.component-seed(:class="{'_effect--30':decline}")
      .component-seed-content
        h1 种子
          button(@click="getData") 按鈕
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      decline: false
    }
  },
  methods: {
    ...mapActions(['set_menu_active']),
    getData () {
      function ajax (options) {
        options = options || {}
        options.type = (options.type || 'GET').toUpperCase()
        // options.dataType = options.dataType || 'json'
        // var params = formatParams(options.data)
        var params = JSON.stringify(options.data)
        var xhr = ''
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest()
        } else {
          xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
        }
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            var status = xhr.status
            if (status >= 200 && status < 300) {
              options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
              options.fail && options.fail(status)
            }
          }
        }
        if (options.type === 'GET') {
          xhr.open('GET', options.url + '?' + params, true)
          xhr.send(null)
        } else if (options.type === 'POST') {
          xhr.open('POST', options.url, true)
          xhr.setRequestHeader('Content-Type', 'application/json')
          xhr.send(params)
        }
      }
      function addCart () {
        var data = arguments[0]
        var promise = typeof arguments[1] === 'string' ? arguments[1] : ''
        var callback = typeof arguments[1] === 'function' ? arguments[1] : arguments[2]
        ajax({
          url: '/api/rest/cart',
          type: 'post',
          data: data,
          dataType: 'json',
          promiseType: promise,
          success: function (res, xml) {
            // callback && callback(JSON.parse(res))
            console.log(11111111, res, xml.magento_api)
          },
          fail: function (status) {
            callback && callback(JSON.parse(status))
          }
        })
      }
      let data = {
        id: 24082,
        super_attribute: {}
      }
      addCart(data)
    }
  },
  created () {
    this.set_menu_active(2)
    let arr = ['大', '小', '大', '小', '小', '大', '大', '大', '大', '大', '大', '大', '大', '大', '大', '大', '大', '大', '大', '大', '小', '小', '小', '小', '大', '小', '小']
    let str = arr.join('')
    console.log(arr)
    console.log(str)
    let status = '大大大大大大大大'
    console.log(str.split(status).length - 1)
  }
}
</script>

<style lang="less" scoped>
</style>
