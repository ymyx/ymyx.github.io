<template>
    <div class="brand" v-if="brandList.length">
        <good-header>
            品牌制品商直供
        </good-header>
        <div class="list">
            <brand-list-item class="item" v-for="(item,index) in brandList" :key="item.id">
                <img :src="item.new_pic_url" alt="">
                <div class="desc">
                    <h3>{{item.name}}</h3>
                    <p>{{item.floor_price}}元起</p>
                </div>
            </brand-list-item>
        </div>
    </div>
</template>

<script>
  import BrandListItem from "./BrandListItem";
  import GoodHeader from "components/common/Goods/GoodHeader";

  export default {
    props:{
      brandList:{
        type:Array,
        default:[]
      }
    },
    name: "BrandList",
    components:{
      BrandListItem,
      GoodHeader
    }
  }
</script>

<style scoped lang="less">
.brand{
    width: 100%;
    margin-top: 0.1rem;
    background: #fff;

    .list{
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .item{
        width: 50%;
        position: relative;
        &:after{
            content:'';
            position: absolute;
            right:-1px;
            top: 0;
            height: 100%;
            width: 1px;
            background:#fff;
            transform:scaleX(0.5);
            z-index: 10;
        }
        &:before{
            content:'';
            position: absolute;
            bottom:-1px;
            left: 0;
            height: 1px;
            width: 100%;
            background:#fff;
            transform:scaleY(0.5);
            z-index: 10;
        }
    }
    .desc{
        position: absolute;
        left: 0;
        top: 0;
        padding: 0.15rem;
        h3{
            font-weight: normal;
            font-size: 0.15rem;
            color: #666;
        }
        p{
            font-size: 0.14rem;
            color: #999;
        }
    }

}
</style>
