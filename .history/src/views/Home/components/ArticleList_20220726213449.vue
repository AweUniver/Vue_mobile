<template>
  <div>
    <!-- 文章列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <article-item
        v-for="obj in list"
        :key="obj.art_id"
        :artObj="obj"
      ></article-item>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
import { getAllArticleListAPI } from '@/api'
export default {
  props: {
    // list: Array // 文章列表数组
    channelId: Number
  },
  data () {
    return {
      list: [], // 文章列表数组
      loading: false, // 加载
      finish: false, // 到底部
      theTime: new Date().getTime() // 用于分页
    }
  },
  components: {
    ArticleItem
  },
  async created () {
    const res = await getAllArticleListAPI({
      channel_id: this.channelId,
      timestamp: new Date().getTime()
    })
    this.list = res.data.data.results
    this.theTime = res.data.data.pre_timestamp
  },
  methods: {
    // 底部加载的事件方法
    onload () {

    }
  }
}
</script>
