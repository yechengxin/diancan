import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './common/element-ui';

import Toast from './components/common/toast'

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
