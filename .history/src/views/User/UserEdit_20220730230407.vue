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
import { userProfileAPI, updatePhotoAPI } from '@/api'
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
    async onFileChange (ev) {
      //   console.log(ev.target.files[0])
      if (ev.target.files.length === 0) return // 防止用户未选择图片
      const fd = new FormData()
      fd.append('photo', ev.target.files[0]) // photo在表单里参数名携带
      const res = await updatePhotoAPI(fd)
      console.log(res)
      this.profile.photo = res.data.data.photo // 更新最新头像
    },
    // 图片点击事件
    imageClickFn () {
      this.$refs.iptFile.click()
    }
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
