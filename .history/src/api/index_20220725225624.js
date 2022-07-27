import request from '@/utils/request.js'

export const loginAPI = () => request({
  url: '/v1_0/authorizations',
  method: 'POST'
})

// 获取所有频道
export const getAllChannelsAPI = () =>
  request({
    url: '/v1_0/channels',
    method: 'GET'
  })
