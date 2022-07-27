<template>
  <div>
    <van-nav-bar title="黑马头条-登录" />
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="user.mobile"
          required
          name="mobile"
          label="手机号"
          placeholder="请输入11位手机号"
          :rules="[{ required: true, message: '请填写手机号',pattern:/^1[3-9]\d{9}$/ }]"
        />
        <van-field
          v-model="user.code"
          required
          type="password"
          name="code"
          label="密码"
          placeholder="请输入6位密码"
          :rules="[{ required: true, message: '请填写密码',pattern:/^\d{6}$/ }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
export default {
  data () {
    return {
      user: {
        mobile: '13888888888', // 手机号
        code: '246810' // 密码(必须是246810)
      }
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      console.log(this.user)
      const res = await loginAPI(this.user)
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
// .van-nav-bar {
//   background: #007bff;
// }

// /deep/ .van-nav-bar__title{
//     color: white;
// }
</style>
