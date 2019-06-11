<template>
    <transition enter-active-class="animated slideInRight"
                leave-active-class="animated slideOutRight">
        <div class="search">
            <search-header @goodshow="goodshow" :placeholder="tip"></search-header>
            <tag-box
                    @goodshow="goodshow"
                    v-show="historylist.length&&status==0" @ymremove="clearHistorylist(this)" :showdelete="true"
                     :list="historylist">
                历史记录
            </tag-box>
            <tag-box
                    @goodshow="goodshow"
                    v-show="status==0" :list="hotlist">
                热门搜索
            </tag-box>
            <ul class="search-list" v-show="status ==1">
                <li v-for="(item,index) in searchlist" @click="goodshow(item)">
                    {{item}}
                </li>
            </ul>
            <search-select v-show="status==2"></search-select>


        </div>
    </transition>
</template>
<script>
  import mixin from './mixin'
  import SearchHeader from "../Search/comp/SearchHeader";
  import TagBox from "components/common/tag/TagBox";
  import SearchSelect from "../Search/comp/SearchSelect";

  export default {
    mixins: [mixin],
    name: "search",
    data() {
      return {}
    },
    computed: {},
    methods: {},
    deactivated() {
      this.goinit();
    },
    async created() {
      await this.hottagdata(this)
    },
    components: {
      SearchHeader,
      TagBox,
      SearchSelect
    },
  }
</script>

<style scoped lang="less">
    .search {
        position: absolute;
        z-index: 199;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #eee;
    }

    .search-list {
        background: #fff;
        padding: 0.1rem 0.2rem;

        li {
            height: 0.36rem;
            line-height: 0.36rem;
            border-bottom: 1px solid #ddd;
        }
    }
</style>
