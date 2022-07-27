<template>
  <div>
    <!-- 二级路由页面 -->
    <router-view></router-view>

    <!-- 下面底部导航 -->
    <div>
      <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="layout/home">首页</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="layout/user"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      active: 0
    }
  }
}
</script>
