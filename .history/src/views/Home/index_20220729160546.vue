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
      <van-icon
        name="plus"
        size="0.37333334rem"
        class="moreChannels"
        @click="plusClickFn"
      />
    </div>
    <!-- 管理频道弹出层 -->
    <van-popup class="channel_popup" v-model="show" get-container="body"
      ><channel-edit :userList="userChannelList" :unCheckList="unCheckChannelList" @addChannelEV="addChannelFn" @removeChannelEV="removeChannelFn"></channel-edit
    ></van-popup>
  </div>
</template>

<script>
import { getUserChannelsAPI, getAllChannelsAPI, updateChannelsAPI, removeTheChannelAPI } from '@/api'
import ArticleList from './components/ArticleList.vue'
import ChannelEdit from './ChannelEdit.vue'
export default {
  data () {
    return {
      channelId: 0, // 激活时频道ID,默认频道ID为0
      userChannelList: [], // 用户选择频道列表
      allChannelList: [], // 所有频道列表
      show: false // 频道弹出层展示或隐藏
    }
  },
  async created () {
    // 用户频道列表
    const res = await getUserChannelsAPI()
    console.log(res)
    this.userChannelList = res.data.data.channels

    // 所有频道列表
    const res2 = await getAllChannelsAPI()
    this.allChannelList = res2.data.data.channels
  },
  components: {
    ArticleList,
    ChannelEdit
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
    },
    // +号点击方法
    plusClickFn () {
      this.show = true
    },
    // 添加频道
    async addChannelFn (channelObj) {
      this.userChannelList.push(channelObj)
      const newArr = this.userChannelList.filter(obj => obj.id !== 0)
      const theNewArr = newArr.map((obj, index) => {
        const newObj = { ...obj }
        delete newObj.name
        newObj.seq = index
        return newObj
      })
      const res = await updateChannelsAPI({
        channels: theNewArr
      })
      console.log(res)
    },
    // 删除频道
    async removeChannelFn (channelObj) {
      const index = this.userChannelList.findIndex(obj => obj.id === channelObj.id)
      this.userChannelList.splice(index, 1)
      const res = await removeTheChannelAPI({
        channelId: channelObj.id
      })
    }
  },
  // 计算属性
  computed: {
    unCheckChannelList () {
    //   const newArr = this.allChannelList.filter((bigObj) => {
    //     const index = this.userChannelList.findIndex((smallObj) => {
    //       return smallObj.id === bigObj.id
    //     })
    //     if (index > -1) {
    //       return false
    //     } else {
    //       return true
    //     }
    //   })
    //   return newArr
      return this.allChannelList.filter(bigObj => (this.userChannelList.findIndex(smallObj => smallObj.id === bigObj.id) === -1))
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
// 设置 tabs 容器的样式
/deep/ .van-tabs__wrap {
  padding-right: 30px;
  background-color: #fff;
}

// 设置小图标的样式
.moreChannels {
  position: fixed;
  top: 62px;
  right: 8px;
  z-index: 999;
}
.channel_popup {
  width: 100vw;
  height: 100vh;
}
</style>
