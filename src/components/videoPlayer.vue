<template lang="pug">
  mu-dialog(:open.sync="myShowVideo", :title="video.title", @close="closeVideo")
    .video_box(ref="DplayerDom", style="width:100%;height:100%;")
    mu-button(slot="actions", flat, color="primary", @click="closeVideo") 关闭
</template>

<script>
import topHandle from '@/components/top-handle'

export default {
  components: {
    topHandle
  },
  props: {
    showVideo: false,
    video: null
  },
  data () {
    return {
      Dplayer: null
    }
  },
  computed: {
    myShowVideo: {
      get () {
        return this.showVideo
      },
      set (val) {
        this.$emit('on-result-change', val)
      }
    }
  },
  watch: {
    showVideo (val) {
      if (val) {
        this.$nextTick(() => {
          this.initDplayer()
        })
      }
    }
  },
  methods: {
    closeVideo () {
      this.myShowVideo = false
    },
    initDplayer () {
      let _self = this
      let DplayerDom = this.$refs.DplayerDom
      this.Dplayer = new window.DPlayer({
        element: DplayerDom,
        video: {
          url: _self.video.url,
          // pic: _self.movie.cover,
          autoplay: true,
          lang: 'zh',
          screenshot: true,
          hotkey: true,
          preload: 'auto'
        },
        // 加载弹幕
        // danmaku: {
        //   id: '1',
        //   api: 'https://api.prprpr.me/dplayer/'
        // },
        contextmenu: [{
          text: '版本: v1.5.0',
          link: 'https://github.com/MoePlayer/DPlayer/releases'
        }, {
          text: 'HTML5视频播放器',
          link: 'https://github.com/DIYgod/DPlayer'
        }]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.component-videoPlayer {
}
</style>
