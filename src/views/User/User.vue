<template>
    <div>
        <button>
            <router-link to="{name:'login'}">登录</router-link>
        </button>
        <button>
            <router-link to="{name:'register'}">注册</router-link>
        </button>
        <button @click="loginout">退出</button>
    </div>
</template>

<script>
  import {loginOut} from "../../network/login";

  export default {
    name: "User",
    methods:{
      async loginout(){
        let res = await loginOut()
        console.log(res)
        if(res.errno!==0){
          this.$toast({body:res.errmsg})
          return;
        }
        this.$localStorage.remove('yanxuan')
        this.$toast({body:res.data.msg},()=>{
          this.$router.push({name: 'home'})
        })
      }
    }
  }
</script>

<style scoped>
    div{
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button{
        border: 1px solid #eee;
        background: #fff;
        margin:10px 0;
        padding: 10px 30px;
    }
</style>
