<template>
  <div>
    <van-nav-bar title="黑马头条-登录" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.van-nav-bar {
  background: #007bff;
}

/* /deep/ 就是把data-v-hash值选择器写到类名的前面 */
/deep/ .van-nav-bar__title {
  color: white;
}
</style>
