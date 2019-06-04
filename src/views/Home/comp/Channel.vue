<template>
    <div class="channel" v-if="channel">
        <ul>
            <li v-for="(item,index) in channel" :key="item.id">
                <a href="#">
                    <img :src="item.icon_url" alt="">
                    <p>{{item.name}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Channel",
    props:{
      channel:{
        type:Array,
        required:true
      }
    }
  }
</script>

<style scoped lang="less">
    .channel{
        background: #fff;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;
        }
        li{
            width: 20%;
            padding: 0.05rem;
        }
        p{
            height: 0.24rem;
            line-height: 0.24rem;
        }
    }
</style>
