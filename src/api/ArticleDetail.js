import request from '@/utils/request.js'

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
