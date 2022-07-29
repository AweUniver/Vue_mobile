<template>
  <div>
    <!-- 搜索页面头部 -->
    <div class="search-header">
      <!-- 后退按钮 -->
      <van-icon
        name="arrow-left"
        color="white"
        size="0.48rem"
        class="goback"
        @click="$router.back()"
      />
      <!-- 搜索组件 -->
      <van-search
        v-model.trim="kw"
        v-fofo
        placeholder="请输入搜索关键词"
        background="#007BFF"
        shape="round"
        @input="inputFn"
      />
    </div>
    <!-- 搜索建议列表 -->
    <div class="sugg-list">
      <div
        class="sugg-item"
        v-for="(str, index) in suggestList"
        :key="index"
        v-html="lightFn(str, kw)"
      ></div>
    </div>
  </div>
</template>

<script>
import { suggestListAPI } from '@/api/index'
export default {
  data () {
    return {
      kw: '', // 搜索关键字
      timer: null, // 防抖定时器
      suggestList: [] // 联想建议列表的
    }
  },
  methods: {
    // 输入框触发实时改变
    inputFn () {
      // 防抖
      clearTimeout(this.timer)
      if (this.kw.length === 0) {
        this.suggestList = []
      } else {
        this.timer = setTimeout(async () => {
          if (this.kw.length === 0) return
          const res = await suggestListAPI({ keywords: this.kw })
          this.suggestList = res.data.data.options
        }, 300)
      }
    },
    // 关键字高亮
    lightFn (originStr, target) {
        let reg=new RegExp(target,'i')
      return originStr.replace(
        /\/i,
        `<span style="color: red;">${target}</span>`
      )
    }
  }
}
</script>

<style scoped lang="less">
.search-header {
  height: 46px;
  display: flex;
  align-items: center;
  background-color: #007bff;
  overflow: hidden;
  /*后退按钮*/
  .goback {
    padding-left: 14px;
  }
  /*搜索组件*/
  .van-search {
    flex: 1;
  }
}
/*搜索建议列表样式 */
.sugg-list {
  .sugg-item {
    padding: 0 15px;
    border-bottom: 1px solid #f8f8f8;
    font-size: 14px;
    line-height: 50px;
    // 实现省略号的三行代码
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
