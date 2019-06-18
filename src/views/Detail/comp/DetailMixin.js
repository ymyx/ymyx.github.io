import {createNamespacedHelpers } from 'vuex'
const { mapState, mapActions,mapMutations } = createNamespacedHelpers('detailmodule')
var data = {
  visible:false,
  status:1,//1的话表示现在是第一次单击加入购物车，默认会弹出选择框，状态为2时我们可以把选项添加到购物车中，并且隐藏它。
  data:[],
  info:{},
  banner:[],
  params:[],
  cartOptions:[]
}

var DetailMixin = {
  data(){
    return data
  },
  computed:{
  },
  methods:{
    changeSelectBar(){
      this.visible = !this.visible;
    }
  }
}

export default DetailMixin;
