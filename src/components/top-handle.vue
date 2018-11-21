<template lang="pug">
  ._cover-top
    //- left
    .top-back(@click="$router.back(-1)")
      ._ellipsis.iconfont.icon-return-arrow(v-text='backText')
    //- right
    .top-other
      slot(name='right')
        ._align-right
          //- span.iconfont(:class='nextIcon')
          span 下载
    //- center
    .top-title._effect(:class="{'_effect--50':decline}")
      slot(name='center')
        p
          span(v-text='curText')
</template>

<script>
export default {
  props: {
    // 返回路径
    // 'backPath': {
    //     type: Object
    // },
    // 返回文本
    'backText': {
      type: String,
      default: ''
    },
    // 衰退:cur是否变更为prev页
    'decline': {
      default: false
    },
    // 当前文本
    'curText': {
      // type:String
    },
    // 右侧按钮下一页
    'nextPath': {
      // type:Object
    },
    // 右侧按钮class
    'nextIcon': {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>

</style>
