<template>
  <div>
    <!-- 文章列表 -->
    <article-item
      v-for="obj in list"
      :key="obj.art_id"
      :artObj="obj"
    ></article-item>
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
    return { list: [] }
  },
  components: {
    ArticleItem
  },
  async created () {
    const res = await getAllArticleListAPI({
      channel_id: this.channelId,
      timestamp: new Date().getTime()
    })
  }
}
</script>
