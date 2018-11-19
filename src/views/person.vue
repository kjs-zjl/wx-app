<template lang="pug">
  ._full_inner._scroll._effect.component-find(:class="{'_effect--30':decline}")
    //- h1 个人
    //- p(v-for="item in list" :key="item.issueNo",:id="item.issueNo",:class="item.size") {{item.prizeNumber}}&nbsp;&nbsp;&nbsp;&nbsp;
    //-   span {{ item.size === "big" ? '大' : '小'}}
</template>

<script>
import { mapActions } from 'vuex'
import data from './data.json'
import $ from 'jquery'

export default {
  data () {
    return {
      list: data.data,
      decline: false,
      newarr: []
    }
  },
  methods: {
    ...mapActions(['set_menu_active'])
  },
  created () {
    var count = 0
    for (let i = 0; i < (this.list.length - 1); i++) {
      console.log(this.list[i].size)
      let item1 = this.list[i]
      let item2 = this.list[i + 1]
      if (item1.size === item2.size) {
        count++
      }
    }
    console.log(count)
    this.set_menu_active(4)
    // let arr = []
    // for (let o of this.list) {
    //   console.log(o.size)
    //   arr.push(o.size)
    // }
    // let str = arr.join('')
    // console.log(str, str.split('small').length - 1)
  },
  mounted () {
    var count = 0
    var arr = []
    for (let i = 0; i < this.list.length - 1; i++) {
      let item1 = this.list[i]
      let item2 = this.list[i + 1]
      if (item1.size === item2.size) {
        arr.push(item1)
        count++
      } else {
        if (count >= 3) {
          arr.push(item1)
          for (let o of arr) {
            this.newarr.push(o)
          }
          count = 0
          arr = []
          // console.log(arr)
          // for (let i in arr) {
          //   $('p').map(function (e, j) {
          //     if ($(this).attr('id') === arr[i].issueNo) {
          //       $(this).addClass(arr[i].size)
          //       console.log($(this), arr[i])
          //     }
          //   })
          //   console.log(i, arr[i].prizeNumber)
          // }
        } else {
          count = 0
          arr = []
        }
      }
    }
    // console.log(this.newarr)
    $.each(this.newarr, function (i, o) {
      $('p').map(function (e, j) {
        if ($(this).attr('id') === o.issueNo) {
          $(this).addClass(o.size)
          // console.log($(this), o)
        }
      })
    })
    for (let i = 0; i < this.newarr.length - 1; i++) {
      let item1 = this.newarr[i]
      let item2 = this.newarr[i + 1]
      if (item1.size !== item2.size) {
        if (Number(item1.issueNo - item2.issueNo) === 1) {
          console.log(item1.prizeNumber, '  ', item2.prizeNumber)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
p {
  text-align: center;
  font-size: 30px;
  padding: 10px;
  span {
    color: transparent;
  }
}
p.big {
  color: red;
  span {
    color: red;
  }
}
p.small {
  color: green;
  span {
    color: green;
  }
}
</style>
