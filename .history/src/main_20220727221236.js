import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { NavBar, Form, Field, Button, Tabbar, TabbarItem, Icon, Tab, Tabs, Cell, List, PullRefresh, ActionSheet, Popup } from 'vant'

Vue.use(Popup)
Vue.use(ActionSheet)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Cell)

Vue.use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
