<template lang="pug">
  ._full
    ._full_inner._scroll._effect.component-channel(:class="{'_effect--30':decline}")
      .component-channel-content
        cardChannel(:medias="channelList")
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import { mapActions } from 'vuex'
import cardChannel from '@/components/card-channel'

export default {
  components: {
    cardChannel
  },
  data () {
    return {
      decline: false,
      channelList: [
        // {
        //   id: 'old',
        //   image: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=bf9f4bf64b2309f7e36fad12420f0c39/9213b07eca806538fc02fa719adda144ac3482ec.jpg',
        //   title: '老版本全网电影',
        //   link: ''
        // },
        {
          id: 'all',
          image: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=bf9f4bf64b2309f7e36fad12420f0c39/9213b07eca806538fc02fa719adda144ac3482ec.jpg',
          title: '全网VIP',
          link: ''
        },
        {
          id: 'vip',
          image: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=bf9f4bf64b2309f7e36fad12420f0c39/9213b07eca806538fc02fa719adda144ac3482ec.jpg',
          title: 'VIP会员频道',
          link: ''
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['set_menu_active'])
  },
  created () {
    this.set_menu_active(1)
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>

</style>
