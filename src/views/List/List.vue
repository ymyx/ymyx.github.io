<template>
    <div>
        {{$route.params.wd}}
    </div>
</template>

<script>
  export default {
    name: "List",
    mounted() {
      console.log(this.$router)
      console.log(this.$route.params.wd)
    }
  }
</script>

<style scoped>

</style>
