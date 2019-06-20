import request from "./request";
import api from "./api";

function goodsDetail(options) {
  return request({
    url: api.GoodsDetail,
    params: options
  })
}
function addCart(options) {
  return request({
    url:api.CartAdd,
    data:options,
    method:'post'
  })
}

function getGoodsCout() {
  return request({
    url:api.CartGoodsCount,
  })
}
export {
  goodsDetail,
  addCart,
  getGoodsCout
}
