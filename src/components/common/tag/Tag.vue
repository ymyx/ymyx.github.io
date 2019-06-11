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
      ...mapMutations(['changeSearch','addHistorylist','changeShowStatus']),
      change(){
        var str = this.$refs.tag.innerHTML;
        str = str.trim();
        this.changeSearch(str);
        this.changeShowStatus(2);
        this.addHistorylist({val:{'is_hot':0,'keyword':str},vm:this})
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
