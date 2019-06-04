<template>
    <div class="tabbar" v-if="tabbar.length" v-show="$route.meta.tabbar">
        <ul>
            <li :class="{active:$route.path==item.url}" v-for="(item,index) in tabbar" :key="item.id">
                <router-link :to="item.url">
                    <i class="iconfont" :class="item.icon"></i>
                    <p>{{item.name}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "TabBar",
    props:{
      tabbar:{
        type:Array,
        required:true,
      }
    },
    data(){
      return {

      }
    },
    mounted() {
      console.log(this.$router);
      console.log(this.$route);
    }
  }
</script>

<style scoped lang="less">
    .tabbar{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 44px;
        text-align: center;
        background: #fff;
        ul{
            display: flex;
            height: 100%;
        }
        li{
            height: 100%;
            width: 20%;
            a{
                vertical-align: top;
                height: 100%;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            &.active{
                a{
                    color: #b4282d;
                }
            }
        }
        i{
            width: 20px;
            height: 20px;
            vertical-align: top;
            margin: 0 auto;
            font-size: 0.18rem;
            display: block;
        }
        p{
            line-height: 0.2rem;
            height: 0.2rem;
        }
    }

</style>
