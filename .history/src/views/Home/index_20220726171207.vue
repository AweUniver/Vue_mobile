<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar>
        <template v-slot:left>
          <img class="logo" src="@/assets/logo.png" alt="" />
        </template>
        <template #right>
          <van-icon name="search" size="0.48rem" color="#fff" />
        </template>
      </van-nav-bar>
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.logo {
  width: 100px;
  height: 30px;
}
</style>
