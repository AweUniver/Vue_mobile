// 基于axios封装网络请求
import theAxios from 'axios'
import router from '@/router'
// import { Notify } from 'vant'
// import { getToken, setToken, removeToken } from '@/utils/token.js'
import { getToken, removeToken } from '@/utils/token.js'
// import { getNewTokenAPI } from '@/api'
const axios = theAxios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 20000 // 20秒超时时间
})

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (getToken()?.length > 0 && config.headers.Authorization === undefined) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
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
  async function (error) {
    // 对响应错误做点什么
    // 只有401才代表身份过期，才需要登录
    if (error.response.status === 401) {
      // 不能使用this.$router (因为this不是vue组件对象无法调用$router)
    //   Notify({ type: 'warning', message: '身份已过期' })
      removeToken()
      router.replace(`/login?path=${router.currentRoute.fullPath}`)
    }
    //   const res = await getNewTokenAPI()
    //   setToken(res.data.data.token) // 更新token
    //   error.config.headers.Authorization = `Bearer ${res.data.data.token}`
    //   return axios(error.config) // 发送未完成请求
    // } else if (
    //   error.response.status === 500 &&
    //   error.config.url === '/v1_0/authorizations' &&
    //   error.config.method === 'put'
    // ) {
    //   removeToken()
    //   localStorage.clear()
    //   router.replace('/login')
    // }
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
