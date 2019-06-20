<template>
    <transition enter-active-class=" animated slideInUp"
                leave-active-class="animated slideOutDown">
        <div v-show="visible" class="detail-select">
            <span class="close" @click="visible=!visible">
                &times;
            </span>
            <div class="header">
                <div class="img" v-if="banner.length">
                    <img :src="banner[0].img_url" alt="">
                </div>
                <div class="info">
                    <p>价格: ¥{{info.price}}</p>
                    <p>已选择:{{selectTitle}}</p>
                </div>
            </div>
            <div class="body">
                <div class="props" v-for="(item,index) in specs">
                    <h3>{{item.name}}</h3>
                    <div class="props-list">
                        <Tag v-for="(it,i) in item.valueList"
                                :class="{active:it.value===select['sign'+index].value}"
                                :name="it.value" @tagchange="addSelect(it,index)" >
                        </Tag>
                    </div>
                </div>
                <div class="props">
                    <h3>数量</h3>
                    <div class="props-list">
                        <div class="price-box">
                            <span @click="deincrement">-</span>
                            <span>{{num}}</span>
                            <span @click="increment">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import Tag from "components/common/tag/Tag";
  import DetailMixin from "./DetailMixin";

  export default {
    name: "DetailSelect",
    components: {Tag},
    mixins: [DetailMixin],
    methods:{
      increment(){
        if(this.num>=this.info.num){
          this.$toast({body:'超出库存'})
          this.num = this.info.num;
          return;
        }
        this.num++;
      },
      deincrement(){
        if(this.num<=1){
          this.$toast({body:'不能少于1件'})
          this.num=1;
          return
        }
        this.num--;
      }
    }
  }
</script>

<style scoped lang="less">
    .detail-select {
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 44px;
        width: 100%;
        max-height: 50%;
        padding-bottom: 0.2rem;
        background: #fff;

        .close {
            position: absolute;
            right: 0;
            top: 0;
            color: #666;
            font-family: "黑体";
            padding: 0.1rem;
            line-height: 1em;
            font-size: 0.2rem;
        }

        .header {
            padding: 0.15rem;
            height: 1.3rem;
            display: flex;
            align-items: flex-end;
            font-size: 0.14rem;
            color: #333;

            img {
                margin-right: 0.15rem;
                height: 1rem;
            }
        }

        .body {
            overflow-y: scroll;
            padding: 0 0.15rem;

            h3 {
                height: 0.3rem;
                line-height: 0.3rem;
                font-size: 0.14rem;
                font-weight: normal;
            }

            .price-box {
                display: flex;

                span {
                    font-family: "黑体";
                    font-weight: bold;
                    font-size: 0.16rem;
                    border: 1px solid #eee;
                    margin-right: -1px;
                    padding: 0.08rem 0.2rem;

                    &:nth-of-type(2) {
                        font-weight: normal;
                        font-family: Arial;
                        text-align: center;
                        min-width: 30%;
                    }
                }
            }
        }
    }
</style>
