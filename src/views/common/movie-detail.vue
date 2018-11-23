<template lang="pug">
  ._full_router.component-movie-detail
    ._full_inner(v-if="movieDetail")
      top-handle(:curText="movieDetail.titleCn",download)
      ._cover-content._effect
        .movie-info
          .movie-bg
            img(:src="movieDetail.image")
          .movie-msg
            p {{movieDetail.titleCn}}
            p 类型： {{movieDetail.type.join(' / ')}}
            p 年代： {{movieDetail.year}}
            p 上映日期： {{movieDetail.release.date}} {{movieDetail.release.location}}上映
            p 主演： {{movieDetail.actors[0]}}
            p.movie--content {{movieDetail.content ? movieDetail.content : '无'}}
        .baidu-netdist._line-fine
          span(class="color-pink") 推荐使用百度网盘离线&nbsp;&nbsp;只需安装破解版百度网盘就可以一键秒离线&nbsp;&nbsp;
          span(class="color-green") 点我可下载破解版百度网盘&nbsp;&nbsp;
          span(class="color-blue") 点我下载
        mt-navbar(v-model="selected")
          mt-tab-item(id="6v") 6v
          mt-tab-item(id="dy2018") dy2018
          mt-tab-item(id="zonghe") 综合
        mt-tab-container(v-model="selected",swipeable)
          mt-tab-container-item(id="6v")
            card(:movieDetail="movieDetail")
          mt-tab-container-item(id="dy2018")
            card(:movieDetail="movieDetail")
          mt-tab-container-item(id="zonghe")
            card(:movieDetail="movieDetail")
    //- router
    transition(name="hor")
      keep-alive
        router-view

</template>

<script>
import { Navbar, TabItem, tabContainer, tabContainerItem } from 'mint-ui'
import topHandle from '../../components/top-handle'
import card from '../../components/card'
import { apiMovieDetial } from '../../api/api'

let components = {}
components[Navbar.name] = Navbar
components[TabItem.name] = TabItem
components[tabContainer.name] = tabContainer
components[tabContainerItem.name] = tabContainerItem
components['topHandle'] = topHandle
components['card'] = card

export default {
  components,
  data () {
    return {
      loading: true,
      movieDetail: null,
      selected: '6v'
    }
  },
  methods: {
    getMovieDetial () {
      const loading = this.$loading()
      let param = { movieId: this.$route.params.movie_id, locationId: 290, ts: 201851015581118117 }
      apiMovieDetial(param).then(res => {
        loading.close()
        this.movieDetail = res
      })
    },
    downloadMovice () {
      console.log(window.Toast('弄啥广发华福'))
    }
  },
  created () {
    this.getMovieDetial()
  }
}
</script>

<style lang="less" scoped>
.component-movie-detail {
  .movie-info {
    background-color: #222;
    color: #fff;
    display: flex;
    padding: 5px 10px;
    .movie-bg {
      padding: 10px 10px 10px 0;
      img {
        width: 100px;
        display: block;
      }
    }
    .movie-msg {
      .movie--content {
        overflow: hidden;
        text-overflow: ellipsis; //文本溢出显示省略号
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        width: 100%;
      }
    }
  }
  .baidu-netdist {
    padding: 3px;
    position: relative;
  }
}
.color-green {
  color: green;
}
.color-pink {
  color: #ff4081;
}
.color-blue {
  color: blue;
}
</style>
