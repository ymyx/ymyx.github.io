<template>
    <div class="detail">
        <detail-header :title="info.title"></detail-header>
        <div class="container">
            <detail-swiper :banner="data"></detail-swiper>
            <goods-info :info="info"></goods-info>
            <goods-params :params="params"></goods-params>
            <goods-pics :pics="info.pics"></goods-pics>
        </div>
        <detail-select visible="true"></detail-select>
        <goods-bar></goods-bar>
    </div>
</template>

<script>
  import DetailHeader from "./comp/DetailHeader";
  import DetailSwiper from "./comp/DetailSwiper";
  import GoodsInfo from "./comp/GoodsInfo";
  import GoodsParams from "./comp/GoodsParams";
  import GoodsPics from "./comp/GoodsPics";
  import {createNamespacedHelpers} from "vuex";
  import GoodsBar from "./comp/GoodsBar";
  import DetailSelect from "./comp/DetailSelect";
  let {mapActions} = createNamespacedHelpers('goodsmodule')
  export default {
    name: "Detail",
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data(){
      return {
        data:[],
        info:{},
        params:[]
      }
    },
    methods: {
      ...mapActions(['getdetailData'])
    },
    components:{
      DetailSelect,
      GoodsBar,
      GoodsPics,
      DetailSwiper,
      DetailHeader,
      GoodsInfo,
      GoodsParams
    },
    async created() {
      let res = await this.getdetailData(this.id);
      console.log(res.data)
      this.data = res.data.gallery
      this.info = new Goodsinfo(res.data.info)
      this.params= res.data.attribute
    }
  }
  class Goodsinfo{
    constructor(data){
      this.title=data.name
      this.subtitle=data.goods_brief
      this.price = data.retail_price
      this.pics= data.goods_desc
    }
  }
</script>

<style scoped>
    .container{
        background: #eee;
        position: absolute;
        left: 0; right: 0;
        bottom:44px;
        top: 44px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

    }

</style>
