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
        v-model.tirm="kw"
        v-fofo
        placeholder="请输入搜索关键词"
        background="#007BFF"
        shape="round"
        @input="inputFn"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kw: '', // 搜索关键字
      timer: null // 防抖定时器
    }
  },
  methods: {
    // 输入框触发实时改变
    inputFn () {
    // 防抖
    clearTimeout(this.timer)
    this.timer=setTimeout(() => {
        if(this.kw)
    }, 300);
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
</style>
