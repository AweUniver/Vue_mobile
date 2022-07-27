import request from '@/utils/request.js'
import { getToken } from '@/utils/token.js'

// 登录接口
export const loginAPI = ({ mobile, code }) =>
  request({
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
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
// 文章获取列表
export const getAllArticleListAPI = ({ channel_id, timestamp }) =>
  request({
    url: '/v1_0/articles',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    params: {
      channel_id,
      timestamp
    }
  })

// 文章-反馈不感兴趣
export const dislikeArticleAPI = ({ artId }) =>
  request({
    url: '/v1_0/article/dislikes',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    data: {
      target: artId
    }
  })
// 文章-反馈垃圾内容
export const reportArticleAPI = ({ artId, type }) =>
  request({
    url: '/v1_0/article/reports',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    data: {
      target: artId,
      type: type,
      remark: '其他问题附加说明'
    }
  })
