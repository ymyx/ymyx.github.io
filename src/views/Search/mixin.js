import {createNamespacedHelpers } from 'vuex'
const { mapState, mapActions,mapMutations } = createNamespacedHelpers('searchmodule')

const mixin = {
  methods:{
    ...mapActions({
      hottagdata:'getSearchData',
      searchlistdata:'getSearchListData',
      goodsdata:'getSearchGoodsData'
    }),
    ...mapMutations(['editSearch','editStatus','changeSearchList','addHotlist','addHistorylist','addGoodList','clearGoodList','setLocalStorage','clearHistorylist','getHistorylist','changePage']),
    async changeInput(newval,btn){
      this.editSearch(newval);
      await this.searchlistdata();
      this.editStatus(btn||1);
    },
    async goodshow(val){
      this.addHistorylist({vm:this,val:{is_hot:0,keyword:val}});
      this.editSearch(val);
      this.clearGoodList();
      this.editStatus(2);
      await this.goodsdata({page:1});
    },
    goinit(){
      this.editSearch('')
      this.editStatus(0)
      this.changeSearchList([]);
      this.clearGoodList();
    }
  },
  computed:{
    ...mapState(['tip','search','status','hotlist','historylist','searchlist','goodlist','total','page'])
  },
}
export default mixin
