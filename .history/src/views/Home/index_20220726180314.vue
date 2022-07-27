<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar fixed>
        <template v-slot:left>
          <img class="logo" src="@/assets/logo.png" alt="" />
        </template>
        <template #right>
          <van-icon name="search" size="0.48rem" color="#fff" />
        </template>
      </van-nav-bar>
    </div>

    <div class="main">
      <!-- v-model关联的激活项的下标（双向绑定） -->
      <van-tabs v-model="active" sticky offset-top="1.226667rem">
        <van-tab :title="obj.name" v-for="obj in userChannelList" :key="obj.id"
          >{{ obj.name }}</van-tab
        >
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getUserChannelsAPI } from '@/api'
import ArticleList from './components/ArticleList.vue'
import { component } from 'vue/types/umd'
export default {
  data () {
    return {
      active: 0,
      userChannelList: [] // 用户选择频道列表
    }
  },
  async created () {
    const res = await getUserChannelsAPI()
    console.log(res)
    this.userChannelList = res.data.data.channels
  }
components:{ArticleList}
}
</script>

<style scoped lang="less">
.logo {
  width: 100px;
  height: 30px;
}
.main {
  padding-top: 46px;
  // 底部在Layout/index.vue
}
</style>
