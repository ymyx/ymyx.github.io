import request from "./request";
import api from "./api";

function getHome() {
  return request({
    url:api.IndexUrl
  })
}

export {
  getHome
}
