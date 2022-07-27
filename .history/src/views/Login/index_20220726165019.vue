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
import { setToken } from '@/utils/token.js'
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
        setToken(res.data.data.token)
        // 跳转一定要写在最后，尽量最后执行
        // location.href->当前浏览器地址和要跳转的地址一样（不包含#后面锚点信息）不会刷新网页
        // push可以回退,replace不会产生历史记录，不会回退
        this.$router.replace({ path: '/layout/home' })
      } catch (err) {
        Notify({ type: 'danger', message: '账号或密码错误' })
      }
      this.isLoading = false // 网络请求完成无论成功/报错，把状态关掉
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
