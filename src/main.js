import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

//加载全局样式
import './styles/index.less'
//加载字体图标
import './styles/font/iconfont.css'
//加载动态设置REM基准值
import 'amfe-flexible'

import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
