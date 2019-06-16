import Vue from 'vue'
import Vuex from 'vuex'
import searchmodule from "./search/searchmodule";
import goodsmodule from "./goods/goodsmodule";
import cartmodule from "./cart/cartmodule";
import detailmodule from "./detail/detailmodule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    searchmodule,
    goodsmodule,
    cartmodule,
    detailmodule
  }
})
