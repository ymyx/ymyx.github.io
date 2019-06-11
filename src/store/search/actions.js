import {getSearch, getSearchGoods, getSearchList} from "../../network/search";

var actions =  {
  async getSearchData({state,commit}, vm) {
    let res = await getSearch();
    res = res.data;
    console.log(res)
    commit('edittip', res.defaultKeyword.keyword);
    commit('addHotlist', res.hotKeywordList);
    commit('getHistorylist', vm)
  },
  async getSearchListData({state,commit}) {
    let res = await getSearchList({keyword:state.search});
    commit('changeSearchList', res.data)
  },
  async getSearchGoodsData({state,commit}, val) {
    var page = (val&&val.page)||state.page;
    let res = await getSearchGoods({keyword: state.search,page:page})
    let data = res.data;
    commit('changePage',page)
    commit('addGoodList', data)
  }
}

export default actions
