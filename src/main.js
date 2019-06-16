import Vue from 'vue'
import VueBus from "vue-bus";
import App from './App.vue'
import router from './router'
import store from './store/store'
import {money} from "./config/fillter";
import VueLocalStorage from "vue-localstorage";
import Toast from 'components/common/toast'
Vue.use(Toast);
Vue.filter('money',money);

Vue.config.productionTip = false
Vue.use(VueBus)
Vue.use(VueLocalStorage)
new Vue({
  localStorage:{
    historylist:{
      type:Array,
      default:[]
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
