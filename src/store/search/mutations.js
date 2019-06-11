import _ from "lodash";
var mutations =  {
  edittip(state, payload) {
    state.tip = payload;
  },
  editSearch(state, payload) {
    state.search = payload;
  },
  editStatus(state, payload) {
    state.status = payload;
  },
  changeSearchList(state, payload) {
    state.searchlist = payload;
  },
  addHotlist(state, payload) {
    state.hotlist = payload;
  },
  addHistorylist(state, payload) {
    var res = [payload.val, ...state.historylist];
    res = _.unionBy(res, 'keyword')
    state.historylist = res;
    this.commit('searchmodule/setLocalStorage', payload.vm)
  },
  addGoodList(state, payload) {
    state.goodlist = [...state.goodlist,...payload.data];
    state.page = payload.currentPage
    state.total = payload.totalPages
  },
  clearGoodList(state,payload){
    state.goodlist = [];
    state.page = 1;
    state.total = 1;
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
}
export default mutations;
