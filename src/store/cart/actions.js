import {cartChecked, cartList, CartRemoveAll, cartUpdate} from "../../network/cart";

var actions =  {
  async getcartlist({state,commit}){
    let res = await cartList()
    commit('setCarList',getcartGoods(res.data.cartList));
    commit('setcartTotal',res.data.cartTotal)
    commit('deleteSelect')
  },
  async setChecked({state,commit},options){
    let productIds;
    let {sign,isChecked} = options;
    console.log(sign)
    if(sign === 'all'){
      productIds =filterlist(state.cartlist).join()
    }else{
      productIds = sign;
    }

    let res = await cartChecked({productIds,isChecked:isChecked*1});
    commit('setCarList',getcartGoods(res.data.cartList));
    commit('setcartTotal',res.data.cartTotal)

  },
  async setUpdate({state,commit},options){
    let {goodsId,productId,id,number} = options;

    let res = await cartUpdate({
      goodsId,
      productId,
      id,
      number
    })
    commit('setCarList',getcartGoods(res.data.cartList));
    commit('setcartTotal',res.data.cartTotal)

  },
  async setRemove({state,commit},options){
    let res = await CartRemoveAll({
      productIds: state.delselect.join()
    });
    commit('setCarList',getcartGoods(res.data.cartList));
    commit('setcartTotal',res.data.cartTotal)
    commit('setEdit',false)
  }
}





export default actions

function filterlist(arr) {
  return arr.map(item=>{
    return item.productId
  })
}

function getcartGoods(arr) {
 return arr.map(item=>{
    return new CartGoods(item)
  })
}

class CartGoods {
  constructor(data){
    this.img = data.list_pic_url;
    this.goodsId= data.goods_id;
    this.id = data.id;
    this.name = data.goods_name;
    this.checked=data.checked;
    this.price= data.retail_price;
    this.number = data.number;
    this.productId= data.product_id;
    this.selectname = data.goods_specifition_name_value
  }
}
