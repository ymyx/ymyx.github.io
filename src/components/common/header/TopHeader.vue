<template>
    <div class="header">
        <slot name="left"></slot>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <slot name="right"></slot>
    </div>
</template>

<script>
  export default {
    name: "TopHeader"
  }
</script>

<style scoped lang="less">
    .header{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        height: 44px;
        display: flex;
        width: 100%;
        background: #fff;
        font-size:14px;
        .center{
            margin: 0 20px;
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            .search{
                background: #ddd;
                height: 30px;
            }
        }
        .left,.right{
            width: 50px;
            height: 100%;
        }
    }
</style>
