<template>
  <div>
    <!-- 评论列表 -->
    <div
      class="cmt-list"
      :class="{
        'art-cmt-container-1': isShowCmtBox,
        'art-cmt-container-2': !isShowCmtBox,
      }"
    >
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
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
    <!-- 评论的item -->
      <div>
        <!-- 底部添加评论区域 - 1 -->
        <div class="add-cmt-box van-hairline--top" v-if="isShowCmtBox === true">
          <van-icon name="arrow-left" size="0.48rem" @click="$router.back()" />
          <div class="ipt-cmt-div" @click="toggleShowFn">发表评论</div>
          <div class="icon-box">
            <van-badge :content="totalCount === 0 ? '' : totalCount" max="99">
              <van-icon
                name="comment-o"
                size="0.53333334rem"
                @click="commentClickFn"
              />
            </van-badge>
            <van-icon name="star-o" size="0.53333334rem" />
            <van-icon name="share-o" size="0.53333334rem" />
          </div>
        </div>

        <!-- 底部添加评论区域 - 2 -->
        <div class="cmt-box van-hairline--top" v-else>
          <textarea
            placeholder="友善评论、理性发言、阳光心灵"
            v-fofo
            @blur="blurFn"
            v-model.trim="comText"
          ></textarea>
          <van-button
            type="default"
            :disabled="comText.length === 0"
            @click="sendFn"
            >发布</van-button
          >
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import {
  commentsListAPI,
  commentLikingAPI,
  commentDisLikingAPI,
  commentsSendAPI
} from '@/api'
import { timeAgo } from '@/utils/date.js'
export default {
  data () {
    return {
      offset: null, // 偏移量评论ID
      commentArr: [], // 评论列表
      isShowCmtBox: true, // 底部显示评论容器
      totalCount: 0, // 评论总数量
      comText: '', // 发布评论内容
      loading: false,
      finished: false,
      lastId: null// 分页
    }
  },
  async created () {
    const res = await commentsListAPI({
      id: this.$route.query.art_id
    })
    this.commentArr = res.data.data.results
    this.totalCount = res.data.data.total_count
    this.lastId = res.data.data.last_id
  },
  methods: {
    timeAgo,
    async likeFn (bool, commentObj) {
      // 用户评论点赞
      if (bool === true) {
        await commentDisLikingAPI({
          comId: commentObj.com_id
        })
        commentObj.is_liking = false
      } else {
        await commentLikingAPI({
          comId: commentObj.com_id
        })
        commentObj.is_liking = true
      }
    },
    // 显示评论输入框
    toggleShowFn () {
      this.isShowCmtBox = false
    },
    // 评论按钮点击事件
    commentClickFn () {
      // 设置window.scrollTo(0,文章内容高度)
      document.querySelector('.like-box').scrollIntoView({
        behavior: 'smooth'
      })
    },
    async sendFn () {
      const res = await commentsSendAPI({
        id: this.$route.query.art_id,
        content: this.comText
      })
      this.commentArr.unshift(res.data.data.new_obj)
    },
    // 输入框失去焦点
    blurFn () {
      setTimeout(() => {
        this.isShowCmtBox = true
      }, 0)
    },
    // 底部加载更多
    async onload () {
      if (this.commentArr.length > 0) {
        // 请求下一页数据
        const res = await commentsListAPI({
          id: this.$route.query.art_id,
          offset: this.lastId
        })
        this.commentArr = [...this.commentList, ...res.data.data.results]
        this.totalCount = res.data.data.total_count
        this.lastId = res.data.data.last_id

        this.loading = false
      } else {
        this.loading = false
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
/*美化 - 文章详情 - 底部的评论页面 */
// 外层容器
.art-cmt-container-1 {
  padding-bottom: 46px;
}
.art-cmt-container-2 {
  padding-bottom: 80px;
}

// 发布评论的盒子 - 1
.add-cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  line-height: 46px;
  padding-left: 10px;
  .ipt-cmt-div {
    flex: 1;
    border: 1px solid #efefef;
    border-radius: 15px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    padding-left: 15px;
    margin-left: 10px;
    background-color: #f8f8f8;
  }
  .icon-box {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    line-height: 0;
  }
}

.child {
  width: 20px;
  height: 20px;
  background: #f2f3f5;
}

// 发布评论的盒子 - 2
.cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: white;
  textarea {
    flex: 1;
    height: 66%;
    border: 1px solid #efefef;
    background-color: #f8f8f8;
    resize: none;
    border-radius: 6px;
    padding: 5px;
  }
  .van-button {
    height: 100%;
    border: none;
  }
}
</style>
