<template>
    <div class="item">
        <input type="checkbox" v-model="mychecked">
        <div class="pic">
            <img :src="list.img" alt="">
        </div>
        <div class="desc">
            <h3>{{list.name}}</h3>
            <p class="select">{{list.selectname}}</p>
            <div class="price-box">
                <p class="price">¥{{list.price}}</p>
                <div class="num">
                    <span @click="decrement()">-</span>
                    <span >{{list.number}}</span>
                    <span @click="increment()">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CartMixin from "./CartMixin";

  export default {
    name: "cartItem",
    mixins:[CartMixin],
    props:{
      list:{
        type:Object,
        required:true
      }
    },
    computed:{
      mychecked:{
       get(){
         return this.list.checked;
       },
       async set(newval){
         if(this.edit){
           this.list.checked = newval;
           this.changeSelect();
           return;
         }
         await this.setChecked({sign:this.list.productId,isChecked:newval})
       }
      }
    },
    methods:{
      async decrement(){
        var curval = this.list.number
        var nextval =  curval-1;
        if(nextval<=0){
          this.$toast({body:'最小是1'})
          return;
        }
        this.list.number = nextval
        this.setUpdate(this.list)
      },
      async increment(){
        var curval = this.list.number
        var nextval =  curval+1;
        this.list.number = nextval
        this.setUpdate(this.list)
      }
    }
  }
</script>

<style scoped lang="less">
    .item {
        margin-top: 0.1rem;
        background: #fff;
        display: flex;
        padding:  0.1rem;
        align-items: center;

        input[type="checkbox"] {
            font-weight: bold;

            &:after {
                content: '\e669';
                font-family: 'iconfont';
                font-size: 0.18rem;
                color: #666;
            }

            &:checked:after {
                color: #b4282d;
                content: '\e6b1';
            }
        }

        .pic {
            margin: 0 0.1rem;
            background: #f4f4f4;
            width: 0.7rem;
            height: 0.7rem;
        }

        .desc {
            padding-right: 0.3rem;
            flex: 1;

            .select {
                color: #999;
                height: 0.2rem;
                line-height: 0.2rem;
            }

            h3 {
                height: 0.24rem;
                line-height: 0.24rem;
                font-weight: normal;
                font-size: 0.14rem;
            }

            .price-box {
                height: 0.3rem;
                line-height: 0.3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .price {
                    font-size: 0.16rem;
                }

                span {
                    font-size: 0.16rem;
                    border: 1px solid #eee;
                    padding: 0 0.08rem;
                    color: #333;

                    &:nth-of-type(2) {
                        margin-left: -1px;
                        margin-right: -1px;
                    }
                }
            }
        }
    }
</style>
