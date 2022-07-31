import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login'
// import Layout from '@/views/Layout'
// import Home from '@/views/Home'
// import User from '@/views/User'
// import Search from '@/views/Search'
// import SearchResult from '@/views/Search/SearchResult.vue'
// import ArticleDetail from '@/views/ArticleDetail'
// import UserEditor from '@/views/User/UserEdit'
// import Chat from '@/views/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home' // 默认显示layout下的首页
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName:"Login" */ '@/views/Login')
  },
  {
    path: '/layout',
    component: () => import(/* webpackChunkName:"Layout" */ '@/views/Layout'),
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName:"Home" */ '@/views/Home')
      },
      {
        path: 'user',
        component: () => import(/* webpackChunkName:"User" */ '@/views/User')
      }
    ]
  },
  {
    path: '/search',
    component: () => import(/* webpackChunkName:"Search" */ '@/views/Search')
  },
  {
    // 搜索结果页
    path: '/search_result/:kw',
    component: () =>
      import(/* webpackChunkName:"SearchResult" */ '@/views/Search/SearchResult.vue')
  },
  {
    // 文章详情页
    path: '/detail',
    component: () =>
      import(/* webpackChunkName:"ArticleDetail" */ '@/views/ArticleDetail')
  },
  // 用户编辑页面
  {
    path: '/user_editor',
    component: () =>
      import(/* webpackChunkName:"UserEdit" */ '@/views/User/UserEdit')
  },
  // 小思同学
  {
    path: '/chat',
    component: () => import(/* webpackChunkName:"Chat" */ '@/views/Chat')
  }
]

const router = new VueRouter({
  routes
})

export default router
