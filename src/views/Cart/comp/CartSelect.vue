<template>
    <div class="cart-select">
        <div class="slect-all">
            <span class="control">
                <input type="checkbox" v-model="allchecked">
            全选 <span v-show="!myedit">({{selectNum}})</span>
            </span>
            <span class="all-price" v-show="!myedit">
                ¥{{total.checkedGoodsAmount}}
            </span>
        </div>
        <div class="control-btn">
            <span @click="myedit=!myedit">{{edit?'完成':'编辑'}}</span>
            <span v-show="!myedit">下单</span>
            <span @click="setRemove()" v-show="myedit">删除选中</span>
        </div>
    </div>
</template>

<script>
  import CartMixin from "./CartMixin";

  export default {
    name: "CartSelect",
    mixins: [CartMixin],
    computed: {
      selectNum() {
        if(this.edit){
          return 0
        }else{
          return this.total.checkedGoodsCount
        }
      },
      allchecked: {
        get() {
          if (this.edit) {
            return (this.delselect.length === this.cartlist.length)&&(this.delselect.length>0);
          }
          return (this.total.checkedGoodsCount === this.total.goodsCount)&&(this.cartlist.length>0)
        },
        async set(newval) {
          if (this.edit) {
            console.log(newval)
            this.setEditCarlist(newval);
            return;
          }
          await this.setChecked({sign: 'all', isChecked: newval})
        }
      },
      myedit: {
        get() {
          return this.edit;
        },
        async set(newval) {
          if (newval == false) {
            await this.getcartlist();
          }
          this.setEdit(newval)
        }
      }
    },

  }
</script>

<style scoped lang="less">
    .cart-select {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 44px;
        height: 44px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

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

    .control {
        margin-right: 0.1rem;
    }

    .slect-all {
        padding-left: 0.1rem;
        font-size: 0.16rem;
    }

    .control-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        span {
            text-align: center;
            font-size: 0.16rem;
            width: 0.8rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #eee;
            margin-left: -1px;

            &:nth-of-type(2), &:nth-of-type(3) {
                color: #fff;
                background: #b4283d;
            }
        }
    }
</style>
