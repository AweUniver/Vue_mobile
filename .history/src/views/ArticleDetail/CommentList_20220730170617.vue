<template>
  <div>
    <!-- 评论列表 -->
    <div class="cmt-list">
      <!-- 评论的 Item 项 -->
      <div class="cmt-item" v-for="obj in commentArr" :key="obj.com_id">
        <!-- 头部区域 -->
        <div class="cmt-header">
          <!-- 头部左侧 -->
          <div class="cmt-header-left">
            <img :src="obj.aut_photo" alt="" class="avatar" />
            <span class="uname">{{ obj.aut_name }}</span>
          </div>
          <!-- 头部右侧 -->
          <div class="cmt-header-right">
            <van-icon
              name="like"
              size="16"
              color="red"
              v-if="obj.is_liking === true"
              @click="likeFn(true, obj)"
            />
            <van-icon
              name="like-o"
              size="16"
              color="gray"
              v-else
              @click="likeFn(false, obj)"
            />
          </div>
        </div>
        <!-- 主体区域 -->
        <div class="cmt-body">
          {{ obj.content }}
        </div>
        <!-- 尾部区域 -->
        <div class="cmt-footer">{{ timeAgo(obj.pubdate) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { commentsListAPI, commentLikingAPI, commentDisLikingAPI } from '@/api'
import { timeAgo } from '@/utils/date.js'
export default {
  data () {
    return {
      offset: null, // 偏移量评论ID
      commentArr: [] // 评论列表
    }
  },
  async created () {
    const res = await commentsListAPI({
      id: this.$route.query.art_id
    })
    this.commentArr = res.data.data.results
  },
  methods: {
    timeAgo,
    async likeFn (bool, commentObj) {
      // 用户评论点赞
      if ((bool === true)) {
        commentObj.is_liking = false
      } else {
        commentObj.is_liking = true
      }
    }
  }
}
</script>

<style scoped lang="less">
.cmt-list {
  padding: 10px;
  .cmt-item {
    padding: 15px 0;
    + .cmt-item {
      border-top: 1px solid #f8f8f8;
    }
    .cmt-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cmt-header-left {
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          background-color: #f8f8f8;
          border-radius: 50%;
          margin-right: 15px;
        }
        .uname {
          font-size: 12px;
        }
      }
    }
    .cmt-body {
      font-size: 14px;
      line-height: 28px;
      text-indent: 2em;
      margin-top: 6px;
      word-break: break-all;
    }
    .cmt-footer {
      font-size: 12px;
      color: gray;
      margin-top: 10px;
    }
  }
}
</style>
