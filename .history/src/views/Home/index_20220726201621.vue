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
      <van-tabs v-model="active" sticky offset-top="1.226667rem" animated>
        <van-tab :title="obj.name" v-for="obj in userChannelList" :key="obj.id">
          <article-list></article-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getUserChannelsAPI, getAllArticleListAPI } from '@/api'
import ArticleList from './components/ArticleList.vue'
export default {
  data () {
    return {
      active: 0,
      userChannelList: [], // 用户选择频道列表
      articleList: [] // 文章列表
    }
  },
  async created () {
    const res = await getUserChannelsAPI()
    console.log(res)
    this.userChannelList = res.data.data.channels

    // 文章列表
    const res2 = await getAllArticleListAPI({
      channel_id: 0,
      timestamp: new Date().getTime()
    })
    console.log(res2)
  },
  components: {
    ArticleList
  }
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
