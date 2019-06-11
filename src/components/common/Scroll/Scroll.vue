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
    mounted() {
      var scroll = new BScroll(this.$refs.bs,{
        scrollY:true,
        probeType:3,
        pullUpLoad:true
      });
      scroll.on('scroll',(obj)=>{
      })
      scroll.on('pullingUp',()=>{
        console.log('xxx')
        this.$emit('pullingup',scroll)
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
