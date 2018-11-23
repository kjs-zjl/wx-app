export default {
  data () {
    return {
      showVideo: false,
      currentVideo: {}
    }
  },
  methods: {
    changeSource (video) {
      this.showVideo = true
      this.currentVideo = video
    },
    onResultChange (val) {
      this.showVideo = val
    }
  }
}
