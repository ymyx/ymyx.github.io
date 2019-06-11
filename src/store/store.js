import Vue from 'vue'
import Vuex from 'vuex'
import searchmodule from "./search/searchmodule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    searchmodule
  }


})
