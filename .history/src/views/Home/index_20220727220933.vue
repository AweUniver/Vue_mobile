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
      <van-tabs
        v-model="channelId"
        sticky
        offset-top="1.226667rem"
        animated
        @change="channelChangeFn"
      >
        <van-tab
          :title="obj.name"
          v-for="obj in userChannelList"
          :key="obj.id"
          :name="obj.id"
        >
          <article-list :channelId="channelId"></article-list>
        </van-tab>
      </van-tabs>
      <!-- 编辑频道图标 -->
<van-icon name="plus" size="0.37333334rem" class="moreChannels"/>
    </div>
  </div>
</template>

<script>
import { getUserChannelsAPI } from '@/api'
import ArticleList from './components/ArticleList.vue'
export default {
  data () {
    return {
      channelId: 0, // 激活时频道ID,默认频道ID为0
      userChannelList: [] // 用户选择频道列表
    }
  },
  async created () {
    const res = await getUserChannelsAPI()
    console.log(res)
    this.userChannelList = res.data.data.channels
  },
  components: {
    ArticleList
  },
  methods: {

    async channelChangeFn () {
      // 文章列表
    //   const res2 = await getAllArticleListAPI({
    //     channel_id: this.channelId,
    //     timestamp: new Date().getTime()
    //   })
    //   console.log(res2)
    //   this.articleList = res2.data.data.results
    }
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
