import Vue from 'vue'
import Vuex from 'vuex'
import _ from "lodash";
import {getSearch, getSearchGoods, getSearchList} from "../network/search";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultKeyword: '',//默认提示文本
    search: '',//输入框
    hotlist: [],//热门搜索tag列表
    historylist: [],//历史搜索tag列表
    searchlist: [],//搜索列表
    goodlist: [],//商品列表
    totalPages: 0,
    currentPage: 1,
    showStatus: 0//0时显示历史记录和热门搜索  1时显示用户输入的提示列表 2时显示按下搜索后或者单击 tag之后的结果
  },
  getters: {},
  mutations: {
    changeShowStatus(state, payload) {
      state.showStatus = payload;
    },
    changeDefaultKeyword(state, payload) {
      state.defaultKeyword = payload;
    },
    changeSearch(state, payload) {
      state.search = payload;
    },
    changeSearchList(state, payload) {
      state.searchlist = payload;

    },
    changeGoodList(state, payload) {
      state.goodlist = [...state.goodlist,...payload.data];
      state.currentPage = payload.currentPage
      state.totalPages = payload.totalPages
    },
    changeHotlist(state, payload) {
      state.hotlist = payload;
    },
    addHistorylist(state, payload) {
      var res = [payload.val, ...state.historylist];
      res = _.unionBy(res, 'keyword')
      state.historylist = res;
      this.commit('setLocalStorage', payload.vm)
    },
    setLocalStorage(state, payload) {
      payload.$localStorage.set('historylist', state.historylist);
    },
    clearHistorylist(state, payload) {
      state.historylist = []
      payload.$localStorage.set('historylist', []);
    },
    getHistorylist(state, payload) {
      state.historylist = payload.$localStorage.get('historylist')
    },
    changePage(state,payload){
      state.currentPage = payload;
    }
  },
  actions: {
    async getSearchData(store, vm) {
      let res = await getSearch();
      res = res.data;
      console.log(res)
      this.commit('changeDefaultKeyword', res.defaultKeyword.keyword);
      this.commit('changeHotlist', res.hotKeywordList);
      this.commit('getHistorylist', vm)
    },
    async getSearchListData(store, val) {
      let res = await getSearchList({keyword: val});
      this.commit('changeSearchList', res.data)
    },
    async getSearchGoodsData(store, val) {
      console.log(store.state.search)
      var page = (val&&val.page)||store.state.currentPage;
      let res = await getSearchGoods({keyword: store.state.search,page:page})
      let data = res.data;
      this.commit('changePage',page)
      this.commit('changeGoodList', data)
    }
  }
})
