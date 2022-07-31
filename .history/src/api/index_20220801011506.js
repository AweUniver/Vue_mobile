import request from '@/utils/request.js'
import { getStorage } from '@/utils/storage.js'
export * from './ArticleDetail.js'
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
  // 刷新token
export const getNewTokenAPI = () => request({
  url: '/v1_0/authorizations',
  method: 'PUT',
  headers: {
    Authorization: 'Bearer ' + getStorage('refresh_token')
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
export const userProfileAPI = () =>
  request({
    url: '/v1_0/user/profile'
  })
// 用户获取基本信息
export const GetUserInfoAPI = () =>
  request({
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
export const updateUserProfileAPI = (dataObj) => {
  const obj = {
    name: '',
    gender: 0,
    birthday: '',
    intro: ''
  }

  for (const prop in obj) {
    if (dataObj[prop] === undefined) {
      delete obj[prop]
    } else {
      obj[prop] = dataObj[prop]
    }
  }

  return request({
    url: '/v1_0/user/profile',
    method: 'PATCH',
    data: obj
  })
}
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
