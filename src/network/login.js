import request from "./request";
import api from "./api";

function loginByName(options) {
  return request({
    url: api.AuthLoginByUserName,
    data: options,
    method:'post'
  })
}
function registerByName(options) {
  return request({
    url:api.registerByUserName,
    data:options,
    method:'post'
  })
}
function loginOut() {
  return request({
    url:api.AuthLoginOuth
  })
}

export {
  loginByName,
  registerByName,
  loginOut
}
