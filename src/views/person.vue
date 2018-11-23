<template lang="pug">
  ._full
    ._full_inner._scroll._effect.component-person(:class="{'_effect--30':decline}")
      .component-person-content
        mu-list
          mu-list-item.avatar(v-if="0")
            mu-list-item-action
              mu-avatar
                img(src="http://img5.mtime.cn/mt/2018/10/17/085012.20600355_1280X720X2.jpg")
            mu-list-item-title 永久会员：18825070581
          mu-list-item.avatar(v-else, to="login", append)
            mu-list-item-action
              mu-avatar
                img(src="http://img5.mtime.cn/mt/2018/10/17/085012.20600355_1280X720X2.jpg")
            mu-list-item-title 点我登录
          mu-list-item(to="openVip", append)
            mu-list-item-action
              span.iconfont.icon-vip.color_f44
            mu-list-item-title 开通会员
            mu-list-item-action
              span.iconfont.icon-next-arrow
          mu-list-item(to="activeVip", append)
            mu-list-item-action
              span.iconfont.icon-vip.color_f44
            mu-list-item-title 卡密激活会员
            mu-list-item-action
              span.iconfont.icon-next-arrow
          mu-list-item(to="onlinePlay", append)
            mu-list-item-action
              span.iconfont.icon-play-video.color_3f5
            mu-list-item-title 在线播放
            mu-list-item-action
              span.iconfont.icon-next-arrow
          mu-list-item(to="myCollection", append)
            mu-list-item-action
              span.iconfont.icon-collection.color_e91
            mu-list-item-title 我的收藏
            mu-list-item-action
              span.iconfont.icon-next-arrow
          mu-list-item(to="feedback", append)
            mu-list-item-action
              span.iconfont.icon-feedback.color_219
            mu-list-item-title 反馈建议
            mu-list-item-action
              span.iconfont.icon-next-arrow
          mu-list-item(to="appLock", append)
            mu-list-item-action
              span.iconfont.icon-lock.color_219
            mu-list-item-title 应用锁
            mu-list-item-action
              span.iconfont.icon-next-arrow
        .button-exit
          mu-button(color="primary", full-width, @click="exitAccount") 退出账号
    transition(name="hor")
      router-view
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      decline: false
    }
  },
  methods: {
    ...mapActions(['set_menu_active']),
    exitAccount () {
      this.$confirm('退出后，将无法自动登录账号，请牢记账号密码', {okLabel: '确定退出'}).then(({result}) => {
        if (result) {

        }
      })
    }
  },
  created () {
    this.set_menu_active(4)
  }
}
</script>

<style lang="less" scoped>
.component-person {
  .mu-list {
    margin-top: 10px;
    padding: 0;
    background-color: #fff;
    li.avatar {
      padding: 8px 0;
    }
  }
  .button-exit{
    width: 90%;
    margin: 20px auto;
  }
}
</style>
