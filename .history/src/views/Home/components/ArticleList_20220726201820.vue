<template>
  <div>
    <!-- 文章列表 -->
    <article-item></article-item>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
export default {
  props: {
    list: Array // 文章列表数组
  },
  components: {
    ArticleItem
  }
}
</script>
