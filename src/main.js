import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import "vuetify/dist/vuetify.min.css";
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
