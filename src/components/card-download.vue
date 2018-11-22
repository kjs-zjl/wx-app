<template lang="pug">
  ul.card
    li.card-item(v-for="item in 10" :key="item")
      .card-left
        .card--title.border-1px
          p 1080p.HD国语中字.mp41080p.HD国语中字.mp41080p.HD国语中字.
        .card--progress
          mu-linear-progress(mode="determinate", :value="linear")
        .card--size
          span 5.2G/914M
          span 0B/s
          span 13.43%
      .card-right
        .card--button
          mu-button(round, small, color="#1565c0") 下载
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
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 3px 5px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2);
    &:last-child {
      margin-bottom: 0;
    }
    .card-left {
      .card--title {
        p {
          font-weight: bold;
          padding: 3px 0;
        }
      }
      .card--progress {
      }
      .card--size {
        margin-top: 6px;
        font-size: 10px;
        span {
          margin-left: 5px;
        }
      }
    }
    .card-right{
      margin-left: 10px;
      margin-right: 5px;
    }
  }
}
</style>
