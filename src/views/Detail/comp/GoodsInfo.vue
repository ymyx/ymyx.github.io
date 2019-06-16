<template>
    <div class="info">
        <h1>{{info.title}}</h1>
        <p class="subtitle">{{info.subtitle}}</p>
        <p class="price">{{info.price|money('¥')}}</p>
    </div>
</template>

<script>
  export default {
    name: "GoodsInfo",
    props:{
      info:{
        type:Object,
        default:{
          title:'',
          subtitle:'',
          price:0
        }
      }
    }
  }
</script>

<style scoped lang="less">
    .info{
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:1.5rem;
        h1{
            font-size:0.2rem;
            font-weight: normal;
            color: #333;
        }
        .subtitle{
            font-size: 0.14rem;
            color: #666;
        }
        .price{
            margin-top: 0.2rem;
            font-size: 0.18rem;
            color: #b4282d;
        }
    }
</style>
