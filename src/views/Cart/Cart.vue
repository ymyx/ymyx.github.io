<template>
    <div>
        <detail-header title="购物车"></detail-header>
        <div class="container">
            <cart-item v-for="(item,index) in cartlist" :list="item" :key="item.id"></cart-item>
        </div>
        <cart-select></cart-select>
    </div>
</template>

<script>
  import DetailHeader from "../Detail/comp/DetailHeader";
  import CartItem from "./comp/CartItem";
  import CartSelect from "./comp/CartSelect";
  import CartMixin from "./comp/CartMixin";
  export default {
    name: "Cart",
    mixins:[CartMixin],
    async created(){
      await this.getcartlist();
    },
    mounted(){

    },
    components: {CartSelect, CartItem, DetailHeader}
  }
</script>

<style scoped lang="less">
    .nolist{
        position: absolute;
        left: 0;
        right: 0;
        overflow-y:scroll;
        top: 44px;
        bottom: 88px;
        background:#eee url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png) no-repeat center 100px;
        background-size: 1.5rem auto;
    }

</style>
