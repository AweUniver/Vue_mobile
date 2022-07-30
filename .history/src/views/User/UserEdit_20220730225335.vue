<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar title="编辑资料" left-arrow @click-left="$router.back()" fixed />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image round class="avatar" src=""/>
        </template>
      </van-cell>
      <van-cell title="名称" is-link  />
      <van-cell title="生日" is-link  />
    </van-cell-group>
  </div>
</template>

<script>
import { userProfileAPI } from '@/api'
export default {
    data(){
        return {
            profileObj:{}//用户基本资料
        }
    }，
  name: 'UserEdit'
  async created(){
    const res=await userProfileAPI()
  }
}
</script>

<style lang="less" scoped>
.user-edit-container {
  padding-top: 46px;
  .avatar {
    width: 50px;
    height: 50px;
  }
}
</style>
