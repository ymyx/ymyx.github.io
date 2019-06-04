<template>
    <good-box>
        <template v-slot:header>
            周一周四·新品首发
        </template>
        <template v-slot:list>
            <div class="list" v-if="goods.length">
                <goods-item v-for="(item,index) in goods"
                            :key="item.id"
                            :name="item.name"
                            :id="item.id"
                            :list_pic_url="item.list_pic_url"
                            :retail_price="item.retail_price"
                ></goods-item>
            </div>
        </template>
    </good-box>
</template>

<script>
  import GoodBox from "components/common/Goods/GoodBox";
  import GoodsItem from "components/common/Goods/GoodsItem";

  export default {
    name: "NewGoods",
    props: {
      goods: {
        type: Array,
        default: []
      }
    },
    created() {

    },
    components: {
      GoodBox,
      GoodsItem
    }
  }
</script>

<style scoped lang="less">
    .list {
        padding: 0 0.2rem 0.2rem;
        text-align: center;
        flex-wrap: wrap;
        display: flex;
        margin-bottom: 0.1rem;
    }
</style>
