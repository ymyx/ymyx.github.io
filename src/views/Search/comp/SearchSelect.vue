<template>
    <div class="good-box" v-if="">
        <Scroll @pullingup="getnextpage" :list="goodlist">
            <ul>
                <li v-for="(item,index) in goodlist" :key="item.name" @click="jump(item.id)">
                    <img :src="item.list_pic_url" alt="">
                    <p>
                        {{item.name}}
                    </p>
                    <p>{{item.retail_price}}</p>
                </li>
            </ul>
            <div class="none" v-show="!goodlist.length">
                <i class="iconfont icon-cry"></i>
                <p>没有更多</p>
            </div>
        </Scroll>

    </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Scroll from "components/common/Scroll/Scroll";
  import mixin from "../mixin";

  export default {
    name: "SearchSelect",
    mixins:[mixin],
    components: {
      Scroll
    },
    watch:{
    },
    methods:{
      async getnextpage(fn){
        var nextpage = this.page+1;
        if(nextpage> this.total){ console.log('没有需要再添加的数据');  return;}
        await this.goodsdata({page:nextpage})
        fn();
      },
      jump(id){
        this.$router.push('/detail/'+id)
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
    .none{
        height: 2rem;
        color:#999;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .iconfont{
            font-size:0.35rem;
        }
    }
</style>
