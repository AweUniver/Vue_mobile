<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style></style>
