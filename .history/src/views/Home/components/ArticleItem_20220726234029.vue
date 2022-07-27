<template>
  <!-- 一条文章单元格 -->
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ artObj.title }}</span>
          <img
            v-if="artObj.cover.type === 1"
            class="thumb"
            :src="artObj.cover.images[0]"
            alt=""
          />
        </div>
        <div class="thumb-box" v-if="artObj.cover.type > 1">
          <img
            v-for="(imgUrl, index) in artObj.cover.images"
            :key="index"
            class="thumb"
            :src="imgUrl"
            alt=""
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <div>
            <span>{{ artObj.aut_name }}</span>
            <span>{{ artObj.comm_count }}评论</span>
            <span>{{ formatTime(artObj.pubdate) }}</span>
          </div>
          <!-- 反馈按钮 -->
          <van-icon name="cross" @click="show=true" />
        </div>
      </template>
    </van-cell>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" get-container="body" cancel-text="取消" />
  </div>
</template>

<script>
import { timeAgo } from '@/utils/date.js'
import { firstActions, } from '@/utils/date.js'
export default {
  props: {
    artObj: Object // 文章对象
  },
  data () {
    return {
      show: false,
      actions: [{ name: '不感兴趣' },
        { name: '反馈垃圾内容' }
      ]
    }
  },
  methods: {
    formatTime: timeAgo,
    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
    //   this.show = false
      if (this.action.name === '反馈垃圾内容') {

      }
    }
  }
}
</script>

<style scoped lang="less">
/* 标题样式 */
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* label描述样式 */
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 文章信息span */
.label-box span {
  margin: 0 3px;
  &:first-child {
    margin-left: 0;
  }
}
/* 图片的样式, 矩形黄金比例：0.618 */
.thumb {
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

/* 三图, 图片容器 */
.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
