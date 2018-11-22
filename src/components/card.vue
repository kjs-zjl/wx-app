<template lang="pug">
  ul.card
    li.card-item(v-for="item in 1" :key="item")
      .card-item--title.border-1px
        p 1080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.mp4
      .card-item--btns
        mu-button 迅雷
        mu-button 115
        mu-button 百度
        mu-button 播放
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      linear: 10
    }
  }
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
