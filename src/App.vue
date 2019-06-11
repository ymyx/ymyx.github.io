<template>
    <div class="scope" >
        <div class="main">
           <keep-alive>
             <router-view/>
           </keep-alive>
        </div>
        <tab-bar :tabbar="tabbar"></tab-bar>
    </div>
</template>
<script>
  import TabBar from "components/common/tabbar/TabBar";
  import {tabbar} from "./config/app";

  export default {
    components: {TabBar},
    data() {
      return {
        tabbar,
      }
    },
    watch:{
      $route(to,from){

      }
    }
  }
</script>
<style lang="less" scoped>
.scope{
    width: 100%;
    height: 100%;
}
.main{
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
