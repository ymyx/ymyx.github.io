<template>
    <transition enter-active-class="animated slideInRight"
                leave-active-class="animated slideOutRight">
        <div class="search">
            <search-header :defaultKeyword="defaultKeyword"></search-header>
            <tag-box v-show="showStatus==0&&historylist.length" :list="historylist" :showdelete="true">历史记录</tag-box>
            <tag-box v-show="showStatus==0" :list="hotlist">热门搜索</tag-box>
            <ul class="search-list" v-show="showStatus==1">
                <li v-for="(item,index) in searchlist" @click="jump(item)">
                    {{item}}
                </li>
            </ul>
            <search-select v-show="showStatus==2"></search-select>
        </div>
    </transition>
</template>
<script>
  import SearchHeader from "./comp/SearchHeader";
  import SearchSelect from "./comp/SearchSelect";
  import TagBox from "components/common/tag/TagBox";
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

  export default {
    name: "search",
    data() {
      return {}
    },
    computed: {
      ...mapState(['defaultKeyword', 'search', 'hotlist', 'historylist', 'searchlist', 'showStatus']),
    },
    methods: {
      ...mapMutations(['addHistorylist', 'clearHistory', 'changeSearch', 'changeShowStatus']),
      ...mapActions(['getSearchGoodsData']),
      async jump(item) {
        this.changeSearch(item)
        this.changeShowStatus(2)
        await this.getSearchGoodsData()
        console.log(this.$store.state)
      },
    },
    deactivated() {
      this.changeSearch('');
      this.changeShowStatus(0)
    },
    async created() {
      await this.$store.dispatch('getSearchData', this);
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
