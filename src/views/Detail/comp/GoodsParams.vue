<template>
    <div class="params" v-if="params">
        <h2>商品参数</h2>
        <ul>
            <li v-for="(item,index) in params">
                <span class="left">{{item.name}}</span>
                <span class="right omg">{{item.value}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  import DetailMixin from "./DetailMixin";
  export default {
    mixins:[DetailMixin],
    name: "GoodsParams",
  }
</script>

<style scoped lang="less">
.params{
    background: #fff;
    margin-top: 0.1rem;
    padding:0.1rem;
    h2{
        font-size: 0.16rem;
        font-weight: normal;
        line-height: 2em;
        border-bottom: 1px solid #eee;
        margin-bottom: 0.05rem;
    }
    li{
        background: #eee;
        margin-bottom: 0.05rem;
        display: flex;
        height: 0.24rem;
        overflow: hidden;
        padding: 0 0.05rem;
        line-height: 0.24rem;
    }
    .left{
        height: 100%;
        width:0.72rem;
    }
    .right{
        height: 100%;
        flex: 1;
    }
}
</style>
