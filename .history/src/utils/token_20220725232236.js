// 此文件封装3个方法专门用于操作token
const key = 'geek-itheima'
export const setToken = () => {
  localStorage.setItem(key, token)
}
