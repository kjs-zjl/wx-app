<template lang="pug">
  ._full
    ._full_inner._scroll._effect.component-channel(:class="{'_effect--30':decline}")
      .component-channel-content
        swiper(:options="swiperOption" ref="mySwiper")
          swiper-slide
            img(src="https://sit.ferragamo.com/blueprint/servlet/resource/blob/127978/5f4e0fc4d553e16512541729a0ef4a39/print-2-data.jpg")
          swiper-slide
            img(src="https://sit.ferragamo.com/blueprint/servlet/resource/blob/127982/b9b29819a72fee9f426e5141aad5ebff/print-4-data.jpg")
          swiper-slide
            img(src="https://sit.ferragamo.com/blueprint/servlet/resource/blob/127984/2c6b1d80883d2c6a3482f7c6b13a7088/print-6-data.jpg")
    transition(name="hor")
      keep-alive
        router-view
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapActions } from 'vuex'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      decline: false,
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    ...mapActions(['set_menu_active'])
  },
  created () {
    this.set_menu_active(1)
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less" scoped>

</style>
