<template>
    <div>
        <TopHeader>
            <template v-slot:left>
                <i class="iconfont icon-fanhui"></i>
            </template>
            <template v-slot:center>

            </template>
            <template v-slot:right>

            </template>
        </TopHeader>
    </div>
</template>

<script>
  import TopHeader from "components/common/header/TopHeader";

  export default {
    name: "Header",
    components:{
      TopHeader
    }
  }
</script>

<style scoped>

</style>
