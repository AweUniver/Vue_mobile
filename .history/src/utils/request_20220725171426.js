// 基于axios封装网络请求
import theAxios from 'axios'
const axios = theAxios.create({
  baseURL: 'http://localhost:8001'
})
