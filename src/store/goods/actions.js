import {goodsDetail} from "../../network/goods";

var actions =  {
  async getdetailData({store,commit},id){
    console.log(id)
    return await goodsDetail({
       id
    })
  }
}

export default actions
