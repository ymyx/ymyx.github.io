<template>
    <div class="goods-bar">
        <span>
            <i class="iconfont icon-favorite"></i>
        </span>
        <span>
             <b>0</b>
            <i class="iconfont icon-cart"></i>
        </span>
        <span class="red" @click="addCart()">加入购物车</span>
    </div>
</template>

<script>
  export default {
    name: "GoodsBar",
    data(){
      return {
        status:0
      }
    },
    methods:{
      addCart(){
        if(this.status==0){

        }
      }
    }
  }
</script>

<style scoped lang="less">
.goods-bar{
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 44px;
    position: absolute;
    left: 0;
    bottom:0;
    width: 100%;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 0 3px rgba(0,0,0,.3);
    span{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        line-height: 44px;
        position: relative;
        font-size: 0.14rem;
        b{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(30%,-90%) scale(0.8);
            padding: 0 0.05rem;
            background:#b4282d;
            color: #fff;
            overflow: hidden;
            border-radius:0.24rem;
            font-weight: normal;
            line-height: 0.2rem;
            height: 0.2rem;
        }
        &.red{
            color: #fff;
            background:#b4282d;
        }
        &:after{
            content: '';
            position: absolute;
            right: -1px;
            top: 0;
            width: 1px;
            height: 100%;
            background: #eee;
        }
    }
    .iconfont{
        font-size: 0.24rem;
        vertical-align: middle;
        :before{
            display: inline-block;
            vertical-align: top;
        }
    }
}
</style>
