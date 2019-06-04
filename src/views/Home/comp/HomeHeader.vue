<template>
    <top-header  >
        <template v-slot:left></template>
        <template  v-slot:center>
            <div class="search" @click="jumpTo('/search')">
                <i class="iconfont icon-search"></i>
                <span>商品搜索,共xxx款好物</span>
            </div>
        </template>
        <template v-slot:right></template>
    </top-header>
</template>

<script>
  import TopHeader from "components/common/header/TopHeader";
  export default {
    name: "HomeHeader",
    components:{
      TopHeader
    },
    methods:{
      jumpTo(url){
        this.$router.push(url)
      }
    }
  }
</script>
<style scoped>
    .search{
        color: #666;
        text-align: center;
        border-radius:0.05rem;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: #eee;
    }

</style>
