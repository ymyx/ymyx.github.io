<template>
    <div class="wrapper" ref="bs">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    props:{
      list:{
        type:Array,
        required:true
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    watch:{
      list(){
        this.scroll.refresh();
        this.scroll.finishPullUp();
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.bs,{
        scrollY:true,
        probeType:3,
        pullUpLoad:true
      });
      this.scroll.on('scroll',(obj)=>{
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingup',()=>{
          this.scroll.refresh();
          this.scroll.finishPullUp();
        })
      })

    }
  }
</script>

<style scoped lang="less">
    .wrapper{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
