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
          :rules="[
            {
              required: true,
              message: '请填写手机号',
              pattern: /^1[3-9]\d{9}$/,
            },
          ]"
        />
        <van-field
          v-model="user.code"
          required
          type="password"
          name="code"
          label="密码"
          placeholder="请输入6位密码"
          :rules="[
            { required: true, message: '请填写密码', pattern: /^\d{6}$/ },
          ]"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            :disabled="isLoading"
            :loading="isLoading"
            loading-text="正在登录..."
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
import { Notify } from 'vant'
export default {
  data () {
    return {
      user: {
        mobile: '13888888888', // 手机号
        code: '246810' // 密码(必须是246810)
      },
      isLoading: false // 登录按钮加载状态
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      console.log(this.user)
      // 设置状态true
      this.isLoading = true
      try {
        const res = await loginAPI(this.user)
        console.log(res)
        Notify({ type: 'success', message: '登录成功' })
      } catch (err) {
        Notify({ type: 'danger', message: '账号或密码错误' })
      }
      this.isLoading = false
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
