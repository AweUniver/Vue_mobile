import request from '@/utils/request.js'

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
// 用户关注
export const userFollowedAPI = ({ userId }) =>
  request({
    url: '/v1_0/user/followings',
    method: 'POST',
    data: { target: userId }
  })

// 用户取消关注
export const userUnFollowedAPI = ({ artId }) =>
  request({
    url: `/v1_0/articles/${artId}`
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
  })
  // 更新、覆盖频道
export const updateChannelsAPI = ({ channels }) =>
  request({
    url: '/v1_0/user/channels',
    method: 'PUT',
    data: {
      channels // 用户已选的频道数组
    }
  })
  // 删除用户指定的频道
export const removeTheChannelAPI = ({ channelId }) =>
  request({
    url: `/v1_0/user/channels/:target${channelId}`,
    method: 'DELETE'
  })

// 文章获取列表
export const getAllArticleListAPI = ({ channel_id, timestamp }) =>
  request({
    url: '/v1_0/articles',
    method: 'GET',
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

    data: {
      target: artId
    }
  })
// 文章-反馈垃圾内容
export const reportArticleAPI = ({ artId, type }) =>
  request({
    url: '/v1_0/article/reports',
    method: 'POST',
    data: {
      target: artId,
      type: type,
      remark: '其他问题附加说明'
    }
  })
// 获取文章详情
export const detailAPI = ({ artId }) =>
  request({
    url: `/v1_0/articles/${artId}`
  })

// 搜索联想菜单
export const suggestListAPI = ({ keywords }) =>
  request({
    url: '/v1_0/suggestion',
    params: {
      q: keywords
    }
  })
// 搜索结果列表
export const searchResultAPI = ({ page = 1, per_page = 10, q }) =>
  request({
    url: '/v1_0/search',
    params: {
      page,
      per_page,
      q
    }
  })
