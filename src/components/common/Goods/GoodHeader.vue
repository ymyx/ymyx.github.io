<template>
    <h2>
        <slot>品牌制造商直供</slot>
    </h2>
</template>

<script>
  export default {
    name: "GoodHeader"
  }
</script>

<style scoped>
    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        height:0.65rem;
        font-size: 0.16rem;
        font-weight: normal;
        color: #333;
    }
</style>
