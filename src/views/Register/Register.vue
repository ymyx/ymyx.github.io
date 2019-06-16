<template>
    <div class="form-group">
        <detail-header title="注册"></detail-header>
        <div class="form-box">
            <div class="form-item">
                <input type="text" v-model="username" placeholder="用户名">
            </div>
            <div class="form-item">
                <input type="password" v-model="password" placeholder="密码">
            </div>
            <div class="form-item">
                <input type="password" v-model="repassword" placeholder="确认密码">
            </div>
            <p class="info" v-show="info">两次密码不一致，请重新输入</p>
            <div class="form-btn">
                <input @click="tijiao" :disabled="disable" type="button" value="注册">
            </div>
        </div>
        <div class="other">
            <router-link :to="{name:'login'}">登录</router-link>
            <span>忘记密码</span>
        </div>
    </div>
</template>

<script>
  import DetailHeader from "../Detail/comp/DetailHeader";
  import {registerByName} from "../../network/login";
  export default {
    name: "Register",
    components: {DetailHeader},
    data(){
      return {
        username:'',
        password:'',
        repassword:'',
        disable:true,
        info:false
      }
    },
    watch:{
      password(){
        this.required()
      },
      repassword(){
        this.required()
      }
    },
    methods:{
      required(){
        if(this.password !== this.repassword){
          this.disable = true
          this.info = true
        }else{
          this.disable = false
          this.info = false
        }
      },
      async tijiao(){
        if (this.username.length < 1 || this.password.length < 1) {
          this.$toast({
            autoClose: false,
            body:'帐号密码不能为空' ,
          })
          return false;
        }
        let res = await registerByName({
          username:this.username,
          password:this.password
        })
        if (res.errno !== 0) {
          this.$toast({
            autoClose: false,
            body: JSON.stringify(res.errmsg),
          })
          return false
        }
        if (res.errno === 0) {
          this.$toast({body:res.data.msg},()=>{
            this.$router.push({name: 'login'})
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
    .info{
        color:red;
    }
    .form-group{
        font-size: 0.16rem;
    }
    .form-box{
        padding: 0 0.2rem;

        margin-top: 0.3rem;
    input{
        font-size: inherit;
        flex: 1;
        line-height: 0.3rem;
        height: 0.3rem;
        text-indent: 0.05rem;
    }
    }
    .form-btn{
        display: flex;
        height:0.8rem;
        align-items: center;
    input{
        flex: 1;
        height: 0.4rem;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius:0.05rem;
    }
    }
    .form-item{
        height: 0.5rem;
        display: flex;
        align-items: center;
        position: relative;
    &:after{
         content: '';
         height: 1px;
         width: 100%;
         display: block;
         position: absolute;
         bottom: 0;
         left: 0;
         border-bottom: 1px solid #eee;
         transform:scale(1,0.5);
     }
    }
    .other{
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        color:#666;
    }
</style>
