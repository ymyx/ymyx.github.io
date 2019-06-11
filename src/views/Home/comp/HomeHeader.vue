<template>
    <top-header class="home-header">
        <template v-slot:left></template>
        <template v-slot:center>
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
    components: {
      TopHeader
    },
    methods: {
      jumpTo(url) {
        this.$router.push(url)
      }
    }
  }
</script>
<style scoped lang="less">
    .home-header{
        position: absolute;
        left: 0;
        top: 0;
    }
    .search {
        color: #666;
        text-align: center;
        border-radius: 0.05rem;
        width: 100%;
        height: 30px;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
        & /deep/ .iconfont {
            font-size: 18px;
            margin-right: 5px;
        }
    }

</style>
