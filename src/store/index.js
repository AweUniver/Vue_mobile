import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userPhoto: 'https://uploadfile.bizhizu.cn/2014/0322/20140322051912252.jpg.source.jpg', // 头像地址
    userName: 'Daben'// 用户姓名
  },
  getters: {
  },
  mutations: {
    SET_USERPHOTO (state, value) {
      state.userPhoto = value
    },
    SET_USERNAME (state, value) {
      state.userName = value
    }
  },
  actions: {
  },
  modules: {
  }
})
