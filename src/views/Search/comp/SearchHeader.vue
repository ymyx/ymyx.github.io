<template>
    <div class="search-header">
        <top-header>
            <template v-slot:left>
                <top-header-back class="left"></top-header-back>
            </template>
            <template v-slot:center>
                <div class="search-center">
                    <i class="iconfont icon-search"></i>
                    <input  type="text" v-model.trim="mysearch" :placeholder="defaultKeyword">
                </div>
            </template>
            <template v-slot:right>
                <div class="right" @click="jump">
                    搜索
                </div>
            </template>
        </top-header>

    </div>
</template>

<script>
  import TopHeader from "components/common/header/TopHeader";
  import TopHeaderBack from "components/common/header/TopHeaderBack";
  import {mapActions, mapMutations, mapState} from "vuex";

  export default {
    name: "SearchHeader",
    props:{
      defaultKeyword:{
        type:String,
        default:''
      }
    },
    data(){
      return {

      }
    },
    watch:{

    },
    computed:{
      ...mapState(['search']),
      mysearch:{
        get(){
          return this.search
        },
        async set(val){
          if(val==this.search)return;
          this.changeSearch(val)
          this.changeShowStatus(1);
          await this.getSearchListData(val);
        }
      }

    },
    components:{
      TopHeader,
      TopHeaderBack
    },
    methods:{
      ...mapMutations(["changeSearch",'changeShowStatus']),
      ...mapActions(['getSearchListData']),
      jump(){
        this.changeShowStatus(2);
      }
    }
  }
</script>


<style scoped lang="less">
    .search-center{
        flex: 1;
        height: 30px;
        background: #eee;
        display: flex;
        align-items: center;
        border-radius: 3px;
        .iconfont{
            margin: 0 5px;
            font-size: 18px;
        }
        input{
            text-align: left;
            background:transparent;
            height: 100%;
            flex: 1;
            font-size: 14px;
        }
    }
    .animated{
        animation-duration: 0.3s;
    }
</style>
