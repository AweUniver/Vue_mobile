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
    component: component: () => import(/* webpackChunkName:"Login" */ '@/views/Layout'),
    children: [
      {
        path: 'home',
        component: component: () => import(/* webpackChunkName:"Login" */ '@/views/Home')
      },
      {
        path: 'user',
        component: component: () => import(/* webpackChunkName:"Login" */ '@/views/User')
      }
    ]
  },
  {
    path: '/search',
    component: component: () => import(/* webpackChunkName:"Login" */ '@/views/Search')
  },
  {
    // 搜索结果页
    path: '/search_result/:kw',
    component: component: () => import(/* webpackChunkName:"Login" */ '@/views/Login')
  },
  { // 文章详情页
    path: '/detail',
    component: component: () => import(/* webpackChunkName:"Login" */ '@/views/Login')
  },
  // 用户编辑页面
  {
    path: '/user_editor',
    component: component: () => import(/* webpackChunkName:"Login" */ '@/views/Login')
  },
  // 小思同学
  {
    path: '/chat',
    component: component: () => import(/* webpackChunkName:"Login" */ '@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
