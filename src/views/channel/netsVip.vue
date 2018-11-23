<template lang="pug">
  ._full_router.component-netsVip
    ._full_inner
      top-handle(curText="全网VIP", download)
      ._cover-content
        cardChannel(:medias="netsVipList")
    //- router
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import topHandle from '@/components/top-handle'
import cardChannel from '@/components/card-channel'

export default {
  components: {
    topHandle,
    cardChannel
  },
  data () {
    return {
      netsVipList: [
        {
          id: 'aiqiyi',
          image: 'http://img5.mtime.cn/mt/2018/11/23/093305.73817166_1280X720X2.jpg',
          title: '爱奇艺',
          link: ''
        },
        {
          id: 'mengo',
          image: 'http://img5.mtime.cn/mt/2018/10/10/112514.30587089_1280X720X2.jpg',
          title: '芒果',
          link: ''
        },
        {
          id: 'youku',
          image: 'http://img5.mtime.cn/mt/2018/11/19/165350.52237320_1280X720X2.jpg',
          title: '优酷',
          link: ''
        },
        {
          id: 'tencent',
          image: 'http://img5.mtime.cn/mt/2018/11/06/114714.43360169_1280X720X2.jpg',
          title: '腾讯视频',
          link: ''
        },
        {
          id: 'pptv',
          image: 'http://img5.mtime.cn/mt/2018/10/22/102351.66829595_1280X720X2.jpg',
          title: 'pptv',
          link: ''
        },
        {
          id: 'letv',
          image: 'http://img5.mtime.cn/mt/2018/10/19/141458.50154485_1280X720X2.jpg',
          title: '乐视',
          link: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.component-netsVip {

}
</style>
