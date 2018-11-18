import Vue from 'vue'
import App from './App'
import conf from './utils/config'

Vue.config.productionTip = false
Vue.prototype.$config = conf

const app = new Vue(App)
app.$mount()
