<template lang="pug">
  .component-film
    mediaCard(:medias="list",title="正在热映")
    mediaCard(:medias="list",title="即将上映")
</template>

<script>
import axios from 'axios'
import mediaCard from '../../components/media-card'

let components = {}
components['mediaCard'] = mediaCard

export default {
  components,
  data () {
    return {
      list: []
    }
  },
  methods: {
    getMoviesList () {
      axios.post('/movice/index').then(res => {
        this.list = res.data.ms.slice(0, 10)
        console.log(this.list)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {

  },
  created () {
    this.getMoviesList()
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
