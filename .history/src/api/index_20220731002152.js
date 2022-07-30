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
export const userUnFollowedAPI = ({ userId }) =>
  request({
    url: `/v1_0/user/followings/${userId}`,
    method: 'DELETE'
  })

// 用户获取个人资料
export const userProfileAPI = () => request({
  url: '/v1_0/user/profile'
})
// 用户获取基本信息
export const GetUserInfoAPI = () => request({
  url: '/v1_0/user'
})
// 用户更新头像
export const updateUserPhotoAPI = (formObj) => {
  return request({
    url: '/v1_0/user/photo',
    method: 'PATCH',
    data: formObj
  })
}
// 用户更新基本资料
export const updateUserProfileAPI = ({ name, gender, birthday, intro }) => request({
  url: '/v1_0/user/profile',
  method: 'PATCH',
  data: { // data不会忽略值为null的键值对，params遇到null
    name,
    gender,
    birthday,
    intro
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
// 对文章点赞
export const likeArticleAPI = ({ artId }) =>
  request({
    url: '/v1_0/article/likings',
    method: 'POST',
    data: {
      target: artId
    }
  })
// 取消对文章点赞
export const unlikeArticleAPI = ({ artId }) =>
  request({
    url: `/v1_0/article/likings/${artId}`,
    method: 'DELETE'
  })
// 获取文章详情
export const detailAPI = ({ artId }) =>
  request({
    url: `/v1_0/articles/${artId}`
  })
// 文章评论列表
export const commentsListAPI = ({ id, offset = null, limit = 10 }) =>
  request({
    url: '/v1_0/comments',
    method: 'GET',
    params: {
      type: 'a',
      source: id,
      offset,
      limit
    }
  })
// 文章发布评论
export const commentsSendAPI = ({ id, content, art_id = null }) => {
  const obj = {
    target: id,
    content
  }
  if (art_id === null) {
    obj.art_id = art_id
  }
  return request({
    url: '/v1_0/comments',
    method: 'POST',
    data: obj
  })
}
// 对评论喜欢
export const commentLikingAPI = ({ comId }) => {
  return request({
    url: '/v1_0/comment/likings',
    method: 'POST',
    data: {
      target: comId
    }
  })
}
// 评论-取消喜欢
export const commentDisLikingAPI = ({ comId }) => {
  return request({
    url: `/v1_0/comment/likings/${comId}`,
    method: 'DELETE'
  })
}
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
