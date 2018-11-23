<template lang="pug">
  ul.card
    li.card-item(v-for="item in movieDetail.videos" :key="item.videoId")
      .card-item--title.border-1px
        p {{item.title}}
      .card-item--btns
        mu-button 迅雷
        mu-button 115
        mu-button 百度
        mu-button(@click="changeSource(item)") 播放
    videoPlayer(:showVideo="showVideo", @on-result-change="onResultChange",:video="currentVideo")
</template>

<script>
import videoPlayer from '@/components/videoPlayer'
import player from '@/mixins/player'

export default {
  components: {
    videoPlayer
  },
  props: {
    movieDetail: null
  },
  mixins: [player]
}
</script>

<style lang="less" scoped>
.card {
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
</style>
