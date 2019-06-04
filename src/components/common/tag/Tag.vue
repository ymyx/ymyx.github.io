<template>
    <span @click="change">
        母亲节
    </span>
</template>

<script>
  export default {
    name: "Tag",
    props:{
      tag:{
        type:String,
        required:true
      }
    }
  }
</script>

<style scoped>

</style>
