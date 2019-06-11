<template>
    <banner :banner="banner" v-if="banner.length" :time="3000">
        <template slot-scope="data">
            <banner-item v-for="(item,index) in data.banner" :key="item.id+index">
                <a href="#">
                    <img :src="item.image_url" alt="">
                </a>
            </banner-item>
        </template>
    </banner>
</template>

<script>
  import Banner from "components/common/banner/Banner";
  import BannerItem from "components/common/banner/BannerItem";

  export default {
    name: "HomeSwiper",
    props:{
      banner:{
        type:Array,
        required:true
      }
    },
    components:{
      Banner,
      BannerItem
    }
  }
</script>

<style scoped>

</style>
