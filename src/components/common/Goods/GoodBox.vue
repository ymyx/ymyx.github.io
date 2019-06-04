<template>
    <div class="goods-box">
        <good-header>
            <slot name="header"></slot>
        </good-header>
        <slot name="list"></slot>
    </div>
</template>

<script>
  import GoodHeader from "./GoodHeader";
  export default {
    name: "GoodBox",
    components:{
      GoodHeader
    }
  }
</script>

<style scoped lang="less">
    .goods-box {
        background: #fff;
    }
</style>
