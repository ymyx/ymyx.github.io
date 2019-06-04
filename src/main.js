import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {money} from "./config/fillter";
import vueg from 'vueg';

Vue.filter('money',money);

Vue.config.productionTip = false
Vue.use(vueg,router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
