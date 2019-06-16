import request from "./request";
import api from "./api";

function cartList() {
  return request({
    url: api.CartList,
  })
}


function cartChecked(options) {
  return request({
    url: api.CartChecked,
    data: options,
    method: 'post'
  })
}

function cartUpdate(options) {
  return request({
    url: api.CartUpdate,
    data: options,
    method: 'post'
  })
}

function CartRemoveAll(options) {
  return request({
    url: api.CartDelete,
    data: options,
    method: 'post'
  })
}

export {
  cartList,
  cartChecked,
  cartUpdate,
  CartRemoveAll
}
