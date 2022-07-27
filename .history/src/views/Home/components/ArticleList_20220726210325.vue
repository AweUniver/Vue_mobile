<template>
  <div>
    <!-- 文章列表 -->
    <article-item
    v-for="obj in list"
    :key="obj.art_id"
    :artObj="obj"></article-item>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
export default {
  props: {
    // list: Array // 文章列表数组
    channelId: Number
  },
  components: {
    ArticleItem
  },
  async created () {}

}
</script>
