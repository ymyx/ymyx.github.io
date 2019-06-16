import request from "./request";
import api from "./api";

function goodsDetail(options) {
  return request({
    url: api.GoodsDetail,
    params: options
  })
}
export {
  goodsDetail
}
