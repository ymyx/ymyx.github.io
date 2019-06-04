<template>
    <div class="item">
        <div class="img">
            <img :src="imgurl" alt="">
        </div>
        <div class="desc">
            <h2>{{title}}<span>¥ {{price}}元起</span></h2>
            <p>{{desc}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Topic",
    props:{
      id:{
        type:Number,
        required: true
      },
      imgurl:{
        type:String,
        required:true
      },
      title:{
        type:String,
        default:''
      },
      desc:{
        type:String,
        default:''
      },
      price:{
        type:Number,
        default:0
      }
    }
  }
</script>

<style scoped lang="less">
    .item{
        padding-bottom: 0.05rem;
        width: 100%;
    }
    .img{
        height: 1.94rem;
        overflow: hidden;
        margin-bottom: 0.1rem;
    }
    h2{
        line-height: 0.24rem;
        height: 0.24rem;
        font-size: 0.15rem;
        font-weight: normal;
        color: #333;
    }
    p{
        overflow: hidden;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;text-overflow: ellipsis;
        color: #999;
        height: 0.2rem;
        line-height: 0.2rem;
    }
</style>
