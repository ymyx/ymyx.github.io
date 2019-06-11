import state from './state'
import mutations from './mutations'
import getters from "./getters";
import actions from "./actions";
var searchmodule = {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
export default searchmodule
