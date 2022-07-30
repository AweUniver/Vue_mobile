import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import {
  NavBar,
  Form,
  Field,
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  Cell,
  List,
  PullRefresh,
  ActionSheet,
  Popup,
  Row,
  Col,
  Badge,
  Search
  , Image as VanImage,
  Divider
  , ShareSheet
  , Tag, CellGroup
  , Image
  , SwipeCell
  , Dialog
} from 'vant'

Vue.use(Dialog)
Vue.use(SwipeCell)
Vue.use(Image)
Vue.use(CellGroup)
Vue.use(Tag)
Vue.use(ShareSheet)
Vue.use(Divider)
Vue.use(VanImage)
Vue.use(Search)
Vue.use(Row)
Vue.use(Col)
Vue.use(Badge)
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

// 封装中间件函数插件
const directiveObj = {
  install (Vue) {
    Vue.directive('fofo', {
      inserted (el) {
        if (el.nodeName === 'TEXTAREA' || el.nodeName === 'INPUT') {
          el.focus()
        } else {
          const theInput = el.querySelector('input')
          const theTextArea = el.querySelector('textarea')
          if (theInput) {
            theInput.focus()
          }
          if (theTextArea) {
            theTextArea.focus()
          }
        }
      }
      update (el){
        
      }
    })
  }
}
Vue.use(directiveObj)// 执行目标对象里install方法并传入Vue类

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
