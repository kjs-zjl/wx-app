<template lang="pug">
  .card
    .card_title(v-if="medias.length") {{title}}
    .card_content
      .item(v-for="(media,index) in medias" :key="media.id" :class="{'full':index === 0}" @click="jumpDetail(media.id)")
        mu-card
          mu-card-media
            .default_bg
              .img(:style="`background-image:url(${media.img || media.image})`")
          mu-card-title(class="media_title" :title="media.t || media.title")
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
  methods: {
    jumpDetail (id) {
      console.log(id)
      this.$router.push({path: `movieDetail/${id}`, append: true})
    }
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
      .img{
        height: 150px;
      }
    }
  }
}
</style>
