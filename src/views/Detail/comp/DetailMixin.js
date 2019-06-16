import {createNamespacedHelpers } from 'vuex'
const { mapState, mapActions,mapMutations } = createNamespacedHelpers('detailmodule')

var DetailMixin = {
  computed:{
    ...mapState([])
  }
}

export default DetailMixin;
