<template lang="pug">
  ._full_router.component-movie-detail
    ._full_inner(v-if="msg")
      top-handle(:curText="msg.titleCn",download)
      ._cover-content._effect
        .movie-info
          .movie-bg
            img(:src="msg.image")
          .movie-msg
            p {{msg.titleCn}}
            p 类型： {{msg.type.join(' / ')}}
            p 年代： {{msg.year}}
            p 上映日期： {{msg.release.date}} {{msg.release.location}}上映
            p 主演： {{msg.actors[0]}}
            p.movie--content {{msg.content ? msg.content : '无'}}
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
            ul.resource
              li.resource-item(v-for="item in 3" :key="item")
                .resource-item--title.border-1px
                  p 1080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp4
                .resource-item--btns
                  mu-button 迅雷
                  mu-button(@click="downloadMovice") 115
                  mu-button 百度
                  mu-button 播放
          mt-tab-container-item(id="dy2018")
            ul.resource
              li.resource-item(v-for="item in 4" :key="item")
                .resource-item--title.border-1px
                  p 1080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp4
                .resource-item--btns
                  mu-button 迅雷
                  mu-button 115
                  mu-button 百度
                  mu-button 播放
          mt-tab-container-item(id="zonghe") asgsag
            ul.resource
              li.resource-item(v-for="item in 1" :key="item")
                .resource-item--title.border-1px
                  p 1080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp4
                .resource-item--btns
                  mu-button 迅雷
                  mu-button 115
                  mu-button 百度
                  mu-button 播放
    //- router
    transition(name="hor")
      keep-alive
        router-view

</template>

<script>
import { Navbar, TabItem, tabContainer, tabContainerItem } from 'mint-ui'
import topHandle from '../../components/top-handle'
import { apiMovieDetial } from '../../api/api'

let components = {}
components[Navbar.name] = Navbar
components[TabItem.name] = TabItem
components[tabContainer.name] = tabContainer
components[tabContainerItem.name] = tabContainerItem
components['topHandle'] = topHandle

export default {
  components,
  data () {
    return {
      loading: true,
      msg: null,
      selected: '6v'
    }
  },
  methods: {
    getMovieDetial () {
      const loading = this.$loading()
      let param = { movieId: this.$route.params.movie_id, locationId: 290, ts: 201851015581118117 }
      apiMovieDetial(param).then(res => {
        loading.close()
        this.msg = res
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
  .resource {
    padding: 10px 5px;
    &-item {
      background-color: #fff;
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2);
      &:last-child {
        margin-bottom: 0;
      }
      &--title {
        p {
          font-weight: bold;
          padding: 3px 5px;
        }
      }
      &--btns {
        display: flex;
        button {
          flex: 1;
          border-radius: 0;
        }
      }
    }
  }
}
.bg-blue {
  background-color: rgb(63, 81, 181);
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
