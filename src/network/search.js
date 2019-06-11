import request from "./request";
import api from "./api";

function getSearch() {
  return request({
    url: api.SearchIndex
  })
}

function getSearchList(options) {
  return request({
    url: api.SearchHelper,
    params: options
  })
}

function getSearchGoods(options) {
  var obj = Object.assign( {page: 1, size: null, sort: 'id', order: 'desc', cagegoryid: 0}, options)
  return request({
    url: api.GoodsList,
    params: obj
  })
}


export {
  getSearch,
  getSearchList,
  getSearchGoods
}
