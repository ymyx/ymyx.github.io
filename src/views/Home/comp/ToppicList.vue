<template>
    <good-box>
        <template v-slot:header>
            周一周四·新品首发
        </template>
        <template v-slot:list>
            <div class="list" v-if="goods.length">
                <Topic
                       :id="item.id"
                       :imgurl="item.item_pic_url"
                       :title="item.title"
                       :desc="item.subtitle"
                       v-for="(item,index) in goods" :key="item.id"></Topic>
            </div>
        </template>
    </good-box>
</template>

<script>

  import GoodBox from "components/common/Goods/GoodBox";
  import Topic from "components/common/Topic/Topic";

  export default {
    name: "ToppicList",
    props:{
      goods:{
        type:Array,
        default:[]
      }
    },
    components: {
      GoodBox,
      Topic
    }
  }
</script>
<style scoped lang="less">
    .list{
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        display: flex;
        padding: 0 0.1rem;
    }
    .list /deep/ .item{
        padding-right: 0.1rem;
        width: 100%;
        flex-shrink: 0;
    }
    .list /deep/ .desc{
        padding: 0 0.1rem;
    }
    ::-webkit-scrollbar{
        background: none;
        width: 0;
        height: 0;
    }
</style>
