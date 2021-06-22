import Vue from 'vue'
import App from './App.vue'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$bus = new Vue()

import store from './store/index'
import router from './router/index'

Vue.use(Elementui)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
