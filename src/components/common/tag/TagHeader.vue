<template>
    <h2>
        <slot></slot>
        <span @click="remove()" v-if="showdelete" class="iconfont icon-delete"></span>
    </h2>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: "TagHeader",
    props:{
      showdelete:{
        type:Boolean,
        default:false
      }
    },
   methods:{
     remove(){
        this.$emit('ymremove')
     }
   }
  }
</script>

<style scoped>
    h2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:  0.3rem;
        font-weight: normal;
        padding: 0 0.2rem;
        line-height: 0.3rem;
        font-size: 0.16rem;
    }
    .iconfont{
        font-size: 0.18rem;
    }

</style>
