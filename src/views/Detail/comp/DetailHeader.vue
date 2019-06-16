<template>
    <top-header>
        <template v-slot:left>
            <top-header-back class="left"></top-header-back>
        </template>
        <template v-slot:center>
                <span class="text-center">
                    {{title}}
                </span>
        </template>
        <template v-slot:right>
            <div class="right"></div>
        </template>
    </top-header>
</template>

<script>
  import TopHeader from "components/common/header/TopHeader";
  import TopHeaderBack from "components/common/header/TopHeaderBack";

  export default {
    name: "DetailHeader",
    props:{
      title:{
        type:String,
        default:'',
        required:true
      }
    },
    components:{
      TopHeader,
      TopHeaderBack
    }
  }
</script>

<style scoped lang="less">
    .text-center{
        width: 100%;
        text-align: center;
    }
</style>
