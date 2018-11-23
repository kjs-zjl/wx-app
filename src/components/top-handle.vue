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
          span(v-if="download", @click="go_download") 下载
          span(v-if="clear", @click="clearList") 清空
          span(v-if="videos", @click="go_myVideos") 我的视频
          span(v-if="deletes", @click="deleteAll") 全删
          span(v-if="regist", @click="register") 注册
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
    },
    'download': {
      default: false
    },
    'clear': {
      default: false
    },
    'videos': {
      default: false
    },
    'deletes': {
      default: false
    },
    'regist': {
      default: false
    }
  },
  methods: {
    go_download () {
      event.stopPropagation()
      this.$router.push({ path: 'download', append: true })
    },
    clearList () {
      this.$confirm('你确定要清空下载记录吗?').then(({result}) => {
        console.log()
        if (result) {

        }
      })
    },
    go_myVideos () {
      event.stopPropagation()
      this.$router.push({ path: 'myVideos', append: true })
    },
    deleteAll () {
      this.$confirm('删除后无法恢复，你确定要删除吗?').then(({result}) => {
        console.log()
        if (result) {

        }
      })
    },
    register () {
      event.stopPropagation()
      this.$router.push({ path: 'register', append: true })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
