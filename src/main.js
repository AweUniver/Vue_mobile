import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'highlight.js/styles/default.css' // 代码高亮的样式
import 'amfe-flexible'
import directiveObj from './utils/directive'
import './VueComponent.js' // vant组件注册
Vue.config.productionTip = false

Vue.use(directiveObj) // 执行目标对象里install方法并传入Vue类

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
