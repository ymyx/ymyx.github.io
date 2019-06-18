<template>
    <div v-if="banner.length">
        <banner :banner="banner" v-if="banner.length" :time="3000">
            <template slot-scope="data">
                <banner-item v-for="(item,index) in data.banner" :key="item.goods_id+index">
                    <a href="#">
                        <img :src="item.img_url" alt="">
                    </a>
                </banner-item>
            </template>
        </banner>
    </div>
</template>

<script>
  import Banner from "components/common/banner/Banner";
  import BannerItem from "components/common/banner/BannerItem";
  import DetailMixin from "./DetailMixin";

  export default {
    mixins: [DetailMixin],
    name: "DetailSwiper",
    components: {
      Banner,
      BannerItem
    }
  }
</script>

<style scoped>

</style>
