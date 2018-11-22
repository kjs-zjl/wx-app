<template lang="pug">
  ul.card
    li.card-item(v-for="item in 5" :key="item")
      .card-item--title
        p 看破加减我是感觉看破加减我是感觉看破加减我是感觉看破加减我是感觉看破加减我是感觉看破加减我是感觉
      //- .card-item--btns
      //-   mu-button 迅雷
      //-   mu-button 115
      //-   mu-button 百度
      //-   mu-button 播放
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
    padding: 15px 5px;
    box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2);
    &:last-child {
      margin-bottom: 0;
    }
    &--title {
      p {
        font-weight: bold;
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
