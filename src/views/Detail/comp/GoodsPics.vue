<template>
    <div class="goods-pic" v-html="pics">
    </div>
</template>

<script>
  export default {
    name: "GoodsPics",
    props:{
      pics:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
    .goods-pic{

    }
</style>
