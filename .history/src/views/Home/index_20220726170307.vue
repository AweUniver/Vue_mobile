<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar>
        <template v-slot:left>
          <img src="@/assets/logo.png" alt="" />
        </template>
        <template #right>
          <van-icon name="search" size="18" color="#fff" />
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
