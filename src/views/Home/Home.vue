<template>
    <div class=" home" v-if="show">
        <home-header></home-header>
        <!--焦点图-->
        <home-swiper :banner="banner"></home-swiper>
        <!--频道页面-->
        <chanel :channel="channel"></chanel>
        <brand-list :brandList="brandList"></brand-list>
        <new-goods :goods="NewGoods"></new-goods>
        <topic-list :goods="TopicList"></topic-list>
    </div>
</template>

<script>
  import {getHome} from "../../network/home";
  import HomeSwiper from "./comp/HomeSwiper";
  import Chanel from "./comp/Channel";
  import HomeHeader from "./comp/HomeHeader";
  import BrandList from "./comp/BrandList";
  import NewGoods from "./comp/NewGoods";
  import TopicList from "./comp/ToppicList";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      Chanel,
      HomeHeader,
      BrandList,
      NewGoods,
      TopicList
    },
    data() {
      return {
        banner: [],
        channel: [],
        brandList: [],
        NewGoods:[],
        TopicList:[],
        show:false
      }
    },
    async created() {
      try {
        let data = await getHome();
        let arr = Object.freeze(data.data)
        this.show = true;
        this.banner = arr.banner;
        this.channel = arr.channel;
        this.brandList = arr.brandList;
        this.NewGoods = arr.newGoodsList;
        this.TopicList  = arr.topicList
      }catch (e) {
        console.warn(e)
      }

    }
  }
</script>
<style scoped>
    .home {
        padding: 44px 0 0;
        width: 100%;
        position: absolute;
        top: 0px;
        bottom: 50px;
        overflow-y: scroll;
        background: #eee;
        -webkit-overflow-scrolling: touch;
    }


</style>
