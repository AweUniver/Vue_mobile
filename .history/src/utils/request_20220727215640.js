// 基于axios封装网络请求
import theAxios from 'axios'
import router from '@/router'
import { Notify } from 'vant'
import { getToken } from '@/utils/token.js'
const axios = theAxios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 20000 // 20秒超时时间
})

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    // 只有401才代表身份过期，才需要登录
    if (error.response.status === 401) {
      // 不能使用this.$router (因为this不是vue组件对象无法调用$router)
      Notify({ type: 'warning', message: '身份已过期' })
      router.replace('/login')
    }

    return Promise.reject(error)
  }
)

export default ({
  url,
  method = 'GET',
  params = {},
  data = {},
  headers = {}
}) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
