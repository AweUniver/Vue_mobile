<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 文章列表 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
        offset="50"
      >
        <article-item
          v-for="obj in list"
          :key="obj.art_id"
          :artObj="obj"
          @disLikeEV="disLikeFn"
          @reportEV="reportFn"
        ></article-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
import { getAllArticleListAPI, dislikeArticleAPI, reportArticleAPI } from '@/api'
import { Notify } from 'vant'
export default {
  props: {
    // list: Array // 文章列表数组
    channelId: Number
  },
  data () {
    return {
      list: [], // 文章列表数组
      loading: false, // 底部加载状态
      finished: false, // 底部完成状态
      theTime: new Date().getTime(), // 用于分页
      isLoading: false // 顶部加载
    }
  },
  components: {
    ArticleItem
  },
  async created () {
    this.getArticleListFn()
  },
  methods: {
    async getArticleListFn () {
      const res = await getAllArticleListAPI({
        channel_id: this.channelId,
        timestamp: this.theTime
      })

      this.list = [...this.list, ...res.data.data.results]
      this.theTime = res.data.data.pre_timestamp

      this.loading = false // 如果不关闭，底部一直是加载中状态
      if (res.data.data.pre_timestamp === null) {
        // 本次回来的数据是最后的
        this.finished = true
      }
      // 顶部加载状态改为false,给onLoad调用
      this.isLoading = false
    },
    // 底部加载的事件方法
    async onLoad () {
      if (this.list.length === 0) {
        this.loading = false
        return
      }
      this.getArticleListFn()
    },
    // 顶部刷新数据
    async onRefresh () {
      this.list = []
      this.theTime = new Date().getTime()
      this.getArticleListFn()
    },
    // 反馈不感兴趣
    async disLikeFn (id) {
      await dislikeArticleAPI({ artId: id })
      Notify({ type: 'success', message: '反馈成功' })
    },
    // 反馈垃圾内容
    async reportFn (id, value) {
      await reportArticleAPI({
        artId: id,
        type: value
      })
    }
  }
}
</script>
