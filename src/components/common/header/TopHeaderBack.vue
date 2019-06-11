<template>
    <span @click="goback()">
        <slot>
            <i class="iconfont icon-back"></i>
        </slot>
    </span>
</template>

<script>
  export default {
    name: "TopHeaderLeft",
    methods:{
      goback(){
        console.log(11)
        this.$router.back();
      }
    }
  }
</script>
<style scoped>

</style>
