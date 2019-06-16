import {createNamespacedHelpers } from 'vuex'
const { mapState, mapActions,mapMutations } = createNamespacedHelpers('cartmodule')

const cartMixin = {
  computed:{
    ...mapState({
      cartlist:'cartlist',
      total:'cartTotal',
      edit:'edit',
      delselect: 'delselect'
    })
  },
  methods:{
    ...mapMutations(['setEdit','changeSelect','setEditCarlist','deleteSelect']),
    ...mapActions(['getcartlist','setChecked','setUpdate','setRemove'])
  }
}
export default cartMixin;
