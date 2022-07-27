import axois from '@/utils/request.js'

const getAllChannelsAPI = () =>
  axois({
    url: '/v1_0/channels',
    method: 'GET'
  })
