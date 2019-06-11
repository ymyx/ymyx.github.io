<template>
    <div class="tag-box">
        <tag-header :showdelete="showdelete">
            <slot></slot>
        </tag-header>
        <div class="list" v-if="list.length>0">
            <tag v-for="(item,index) in list"
                 :key="item.keyword"
                 :name="item.keyword"
                 :class="{active:item.is_hot==1}">
            </tag>
        </div>
    </div>
</template>

<script>

  import TagHeader from "./TagHeader";
  import Tag from "./Tag";

  export default {
    props: {
      showdelete: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default: []
      }
    },
    name: "TagBox",
    components: {
      TagHeader,
      Tag
    }
  }
</script>

<style scoped lang="less">
    .tag-box {
        background: #fff;
        margin-bottom: 0.2rem;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        padding: 0.1rem 0.2rem;

        &:after {
            content: '';
            flex: 1;
            width: 0;
            height: 0;
            overflow: hidden;
        }
    }
</style>
