<template>
    <transition enter-active-class=" animated slideInUp"
                leave-active-class="animated slideOutDown">
        <div v-show="visible" class="detail-select">
            <span class="close" @click="visible=!visible">
                &times;
            </span>
            <div class="header">
                <div class="img">
                    <img src="http://yanxuan.nosdn.127.net/355efbcc32981aa3b7869ca07ee47dac.jpg" alt="">
                </div>
                <div class="info">
                    <p>价格: ¥2598</p>
                    <p>已选择:请选择规格数量</p>
                </div>
            </div>
            <div class="body">
                <div class="props">
                    <h3>规格</h3>
                    <div class="props-list">
                        <Tag name="1.5m床垫*1+枕头*2"></Tag>
                        <Tag name="1.8m床垫*1+枕头*2"></Tag>
                    </div>
                </div>
                <div class="props">
                    <h3>颜色</h3>
                    <div class="props-list">
                        <Tag name="浅杏粉"></Tag>
                        <Tag name="玛瑙红"></Tag>
                        <Tag name="烟灰白"></Tag>
                    </div>
                </div>
                <div class="props">
                    <h3>数量</h3>
                    <div class="props-list">
                        <div class="price-box">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
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
    mixins:[DetailMixin]
  }
</script>

<style scoped lang="less">
.detail-select{
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 44px;
    width: 100%;
    height: 50%;
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
    .header{
        padding: 0.15rem;
        height: 1.3rem;
        display: flex;
        align-items: flex-end;
        font-size: 0.14rem;
        color: #333;
        img{
            margin-right: 0.15rem;
            height: 1rem;
        }
    }
    .body{
        overflow-y: scroll;
        padding:0 0.15rem;
        h3{
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 0.14rem;
            font-weight: normal;
        }
        .price-box{
            display: flex;
            span{
                font-family: "黑体";
                font-weight: bold;
                font-size: 0.16rem;
                border: 1px solid #eee;
                margin-right: -1px;
                padding: 0.08rem 0.2rem;
                &:nth-of-type(2){
                    font-weight: normal;
                    font-family:Arial;
                    text-align: center;
                    min-width: 30%;
                }
            }
        }
    }
}
</style>
