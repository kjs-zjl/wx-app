<template lang="pug">
  ._full_router.component-child
    ._full_inner
      .title {{msg && msg.content}}
</template>

<script>
import { apiMovieDetial } from '../api/api'

export default {
  data () {
    return {
      loading: true,
      msg: null
    }
  },
  methods: {
    apiMovieDetial () {
      const loading = this.$loading()
      let param = { movieId: this.$route.params.movie_id, locationId: 290, ts: 201851015581118117 }
      apiMovieDetial(param).then(res => {
        loading.close()
        this.msg = res
      })
    }
  },
  created () {
    this.apiMovieDetial()
  }
}
</script>

<style lang="less" scoped>

</style>
