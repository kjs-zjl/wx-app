<template lang="pug">
  .component-film
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          | slide1
        .swiper-slide
          | slide2
        .swiper-slide
          | slide3
</template>

<script>
import Swiper from 'swiper'

export default {
  data () {
    return {

    }
  },
  mounted () {
    var swiper1 = new Swiper('.swiper-container', {
      // direction: 'vertical'
    })
    console.log(swiper1)
  },
  created () {
    // let swiper1 = new Swiper('.swiper-container', {
    //   loop: true,
    //   autoplay: true,
    //   speed: 300
    //   // direction: 'horizontal'
    // })
    // console.log(Swiper, swiper1)
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
