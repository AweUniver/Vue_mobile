import axois from '@/utils/request.js'

// 获取所有频道

export const getAllChannelsAPI = () =>
  axois({
    url: '/v1_0/channels',
    method: 'GET'
  })
