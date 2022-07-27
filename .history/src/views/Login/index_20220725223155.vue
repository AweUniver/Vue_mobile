<template>
  <div>
    <van-nav-bar title="黑马头条-登录" />
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
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
