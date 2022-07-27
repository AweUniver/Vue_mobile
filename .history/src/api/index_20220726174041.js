import request from '@/utils/request.js'

// 登录接口
export const loginAPI = ({ mobile, code }) => request({
  url: '/v1_0/authorizations',
  method: 'POST',
  data: {
    mobile,
    code
  }
})

// 获取所有频道
export const getAllChannelsAPI = () =>
  request({
    url: '/v1_0/channels',
    method: 'GET'
  })
// 获取用户选择的频道
export const getUserChannelsAPI = () =>
  request({
    url: '/v1_0/user/channels',
    method: 'GET'
    headers:{
        Authorization:
    }
  })
