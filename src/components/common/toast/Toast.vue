<template>
    <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                @after-leave="afterLeave">
        <div  v-show="visible" class="toast">
            <div class="toast-header" v-show="title">{{title}}</div>
            <div class="toast-body">{{body}}</div>
            <div class="toast-footer">
                <button class="confirm" @click="confirmFn">确认</button>
                <button class="cancle" v-show="cancle" @click="cancleFn">关闭</button>
            </div>
        </div>
    </transition>

</template>

<script>
  export default {
    name: "Toast",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      body: {
        type: String,
        default: '',
        required: false
      },
      cancle: {
        type: Boolean,
        default: true
      },
      timer:{
        type:Number,
        default:0
      },
      time:{
        type:Number,
        default:3000
      },
      autoClose:{
        type:Boolean,
        default:true
      },
      cb:{
        type:Function,
        default:()=>{}
      }
    },
    methods: {
      confirmFn() {
        this.visible=false;
        return true
      },
      createTimer(){
        if(this.autoClose){
          this.timer = setTimeout(()=>{
            this.visible = false;
          },this.time)
        }
      },
      cancleFn() {
        this.visible=false;
        return false;
      },
      afterLeave(){
        this.$destroy(true);
        clearTimeout(this.timer);
        this.$el.parentNode.removeChild(this.$el);
        this.cb()
      }
    },
    mounted() {
      this.createTimer();
    }
  }
</script>

<style scoped lang="less">
    .toast {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        width: 75%;
        background: #fff;
        border: 1px solid #eee;
        box-shadow: 0 0 10px 1000px rgba(0, 0, 0, .5);
        text-align: center;
        padding: 0.1rem 0 0;

        .toast-header {
            font-size: 0.18rem;
            color: #333;
        }

        .toast-body {
            padding: 0.05rem;
            margin-bottom: 0.05rem;
            color: #999;
            font-size: 0.14rem;
        }

        .toast-footer {
            border-top: 1px solid #eee;
            height: 0.4rem;
            display: flex;
            padding: 0.05rem 0;
            justify-content: center;
            button {
                color: #6495ED;
                background: transparent;
                width: 50%;
                font-size: 0.18rem;
            }
        }
    }
</style>
