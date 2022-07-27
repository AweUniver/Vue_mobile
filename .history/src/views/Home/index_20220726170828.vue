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
