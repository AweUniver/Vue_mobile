import Vue from 'vue'

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
  Search,
  Image as VanImage,
  Divider,
  ShareSheet,
  Tag,
  CellGroup,
  Image,
  SwipeCell,
  Dialog,
  DatetimePicker
  , Loading
  , Lazyload
} from 'vant'

Vue.use(Lazyload, {
  perLoad: 0.8,
  error: 'https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png'
})
Vue.use(Loading)
Vue.use(DatetimePicker)
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
