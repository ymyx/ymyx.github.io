<template>
    <span @click="change" ref="tag">
        {{name}}
    </span>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: "Tag",
    props:{
      name:{
        type:String,
        required:true,
        default:''
      }
    },
    methods:{
        change(){
          this.$emit('goodshow',this.name)
        }
    }
  }
</script>

<style scoped lang="less">
    span{
        padding: 0.05rem 0.1rem;
        display: inline-block;
        border:1px solid #999;
        margin:  0.03rem;
        &.active{
            color: #f12;
            border-color: #f12;
        }
    }
</style>
