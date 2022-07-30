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
          <van-image
            round
            class="avatar"
            :src="profileObj.photo"
            @click="imageClickFn"
          />
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
      <van-cell
        title="名称"
        is-link
        :value="profileObj.name"
        @click="nameClickFn"
      />
      <van-cell title="生日" is-link :value="profileObj.birthday" />
    </van-cell-group>
    <!-- 姓名修改弹窗 -->
    <van-dialog
      v-model="show"
      title="标题"
      show-cancel-button
      :before-close="beforeCloseFn"
    >
      <input type="text" v-fofo v-model="inputUserName" />
    </van-dialog>
  </div>
</template>

<script>
import { userProfileAPI, updateUserPhotoAPI } from '@/api'
import { Notify } from 'vant'
export default {
  data () {
    return {
      profileObj: {}, // 用户基本资料
      show: false, // 控制姓名修改输出框
      inputUserName: '' // 修改名字弹出框输入框绑定值
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
    },
    // 姓名点击事件
    nameClickFn () {
      this.show = true
      this.inputUserName = this.profileObj.name
    },
    // 姓名确认框关闭前回调函数
    beforeCloseFn (action, done) {
      if (action === 'confirm') {
        const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{1,7}$/
        if (reg.test(this.inputUserName) === true) {
          done
        } else {
          Notify({ type: 'warning', message: '用户名只能是1~7位中英文数字组合' })
        }
      } else {
        done()
      }
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
/deep/.van-dialog__content {
  text-align: center;
  input {
    padding: 0;
    outline: none;
    border: none;
    text-align: center;
  }
}
</style>
