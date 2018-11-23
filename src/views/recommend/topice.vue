<template lang="pug">
  .component-topic
    mu-load-more(@refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load" :loaded-all="isLoadedAll")
      mu-carousel.carousel-wrap(v-if="isLoadedAll" hide-controls :cycle="false")
        mu-carousel-item
          img(src="https://muse-ui.org/img/carousel1.dc6ba9d4.jpg")
          .carousel_title._ellipsis 微信支付
        mu-carousel-item
          img(src="https://muse-ui.org/img/carousel2.35ee0e24.jpg")
          .carousel_title._ellipsis 挨个看行货
        mu-carousel-item
          img(src="https://muse-ui.org/img/carousel3.e10327f3.jpg")
          .carousel_title._ellipsis 支付宝领红包
      mediaCard(:medias="locationList",title="正在热映")
      mediaCard(:medias="commingList",title="即将上映")
</template>

<script>
import mediaCard from '../../components/media-card'
import { apiLocationList, apiCommingList } from '@/api/api'

let components = {}
components['mediaCard'] = mediaCard

export default {
  components,
  data () {
    return {
      locationList: [],
      commingList: [],
      refreshing: false,
      loading: false,
      isLoadedAll: false
    }
  },
  methods: {
    // 正在热映
    getLocationList () {
      return new Promise((resolve, reject) => {
        const param = { ts: 201851015581118117, locationId: 290 }
        apiLocationList(param).then(res => {
          resolve(res)
        })
      })
    },
    // 即将上映
    getCommingList () {
      return new Promise((resolve, reject) => {
        const param = { ts: 201851015581118117, locationId: 290 }
        apiCommingList(param).then(res => {
          resolve(res)
        })
      })
    },
    refresh () {
      this.refreshing = true
      Promise.all([this.getLocationList(), this.getCommingList()]).then((results) => {
        this.locationList = results[0].ms.slice(3, 12)
        this.commingList = results[1].moviecomings.slice(3, 12)
        this.refreshing = false
      })
    },
    load () {
      this.loading = true
      Promise.all([this.getLocationList(), this.getCommingList()]).then((results) => {
        this.locationList = results[0].ms.slice(0, 9)
        this.commingList = results[1].moviecomings.slice(0, 9)
        this.loading = false
        this.isLoadedAll = true
      })
    }
  },
  created () {
    this.load()
  }
}
</script>

<style lang="less" scoped>
.component-topic {
  .carousel-wrap {
    height: 150px;
    .carousel_title {
      position: absolute;
      bottom: 0;
      width: 100%;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 6px 10px;
    }
  }
}
</style>

<style lang="less">
.component-topic {
  .carousel-wrap {
    .mu-carousel-indicators {
      height: 33px;
      .mu-carousel-indicator-button__active {
        .mu-carousel-indicator-icon {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
