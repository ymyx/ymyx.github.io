<template>
    <div class="good-box">
        <Scroll @pullingup="getnextpage">
            <ul>
                <li v-for="(item,index) in list">
                    <img :src="item.list_pic_url" alt="">
                    <p>
                        {{item.name}}
                    </p>
                    <p>{{item.retail_price}}</p>
                </li>
            </ul>
        </Scroll>

    </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Scroll from "components/common/Scroll/Scroll";

  export default {
    name: "SearchSelect",
    computed: {
      ...mapState({
        list: 'goodlist',
        total: 'totalPages',
        page: 'currentPage'
      })
    },
    components: {
      Scroll
    },
    methods:{
      ...mapActions(["getSearchGoodsData"]),
      async getnextpage(scroll){
        var nextpage = this.page+1;
        if(nextpage> this.total){ console.log('没有需要再添加的数据');  return;}
        await this.getSearchGoodsData({page:nextpage})
        console.log(scroll)
        scroll.refresh();
        scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped lang="less">
    .good-box {
        position: absolute;
        left: 0;
        top: 44px;
        right: 0;
        bottom: 0;
        overflow: hidden;

        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: center;
        }

        li {
            margin-bottom: 0.05rem;
            background: #fff;
            padding: 0 0.1rem;
            width: 49%;
            height: 1.96rem;
        }
    }
</style>
