<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.back()"
      fixed
    />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image round class="avatar" :src="profileObj.photo" @click="imageClickFn"/>
          <!-- file 选择框 -->
          <input
            type="file"
            ref="iptFile"
            v-show="false"
            accept="image/*"
            @change="onFileChange"
          />
        </template>
      </van-cell>
      <van-cell title="名称" is-link :value="profileObj.name" />
      <van-cell title="生日" is-link :value="profileObj.birthday" />
    </van-cell-group>
  </div>
</template>

<script>
import { userProfileAPI, updateUserPhotoAPI } from '@/api'
export default {
  data () {
    return {
      profileObj: {} // 用户基本资料
    }
  },
  name: 'UserEdit',
  async created () {
    const res = await userProfileAPI()
    this.profileObj = res.data.data
  },
  methods: {
    // 文件选择事件
    async onFileChange (e) {
      if (e.target.files.length === 0) return
      const theFd = new FormData()
      theFd.append('phtot', e.target.files[0])
      const res = await updateUserPhotoAPI(theFd)
      this.profileObj.photo = res.data.data.photo
    },
    // 图片点击事件
    imageClickFn () {
      this.$refs.iptFile.click()
    }
    // 姓名点击事件
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
