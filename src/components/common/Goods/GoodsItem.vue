<template>
    <div class="goods-item">
        <div class="img">
            <img :src="list_pic_url" alt="">
        </div>
        <div class="desc">
            <h4>{{name}}</h4>
            <p>{{retail_price|money('¥')}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      id:{
        type:Number,
        required:true
      },
      list_pic_url:{
        type:String,
        required: true
      },
      name:{
        type:String,
        required:true
      },
      retail_price:{
        type:Number,
        default: 0
      }
    }
  }
</script>

<style scoped lang="less">
.goods-item{
    width: 50%;
    h4{
        font-weight: normal;
        font-size: 0.14rem;
        color: #333;
    }
    p{
        font-size: 0.12rem;
        color: #b4282d;
    }
}
</style>
