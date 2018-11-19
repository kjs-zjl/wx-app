<template lang="pug">
  .card
    .card_title(v-if="title") {{title}}
    .card_content
      .item(v-for="media in medias" :key="media.id" :class="{'full':media.id === 3}")
        mu-card
          mu-card-media
            .default_bg
              .img(:style="`background-image:url(${media.img})`")
          mu-card-title(class="media_title" :title="media.t")
</template>

<script>

export default {
  props: {
    title: {
      type: String
    },
    medias: {
      type: Array,
      require: true
    }
  },
  data () {
    return {

    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.card {
  .card_title {
    background-color: #fff;
    padding: 5px 10px;
    margin-bottom: 5px;
  }
  .card_content {
    padding: 0 3px;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: calc(50% - 6px);
      margin: 0 3px;
      margin-bottom: 10px;
      .default_bg {
        background: url(../assets/images/default.jpeg) no-repeat;
        background-size: 100%;
        .img {
          height: 90px;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
      .media_title {
        padding: 10px 5px;
        .mu-card-title {
          line-height: inherit;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .item.full {
      width: 100%;
    }
  }
}
</style>
