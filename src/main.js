import Vue from 'vue'
import App from './App.vue'
import './global-variadles'
import router from './router/index'
import './store/index'
import './data/company'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
