import axois from '@/utils/request.js'

const getAllChannelsAPI = () => {
  return axois({
    url: '/v1_0/channels',
    method: 'GET'
  })
}
