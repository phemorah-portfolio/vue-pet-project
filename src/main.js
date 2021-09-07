import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

import VuePluralize from 'vue-pluralize'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'

import App from './App.vue'
import router from './router'
import store from './store'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
 
Vue.use(VuePluralize)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
