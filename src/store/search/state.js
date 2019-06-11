var state = {
  tip: '',//默认提示文本
  search: '',//输入框
  status: 0,//0时显示历史记录和热门搜索  1时显示用户输入的提示列表 2时显示按下搜索后或者单击 tag之后的结果
  hotlist: [],//热门搜索tag列表
  historylist: [],//历史搜索tag列表
  searchlist: [],//搜索列表
  goodlist: [],//商品列表
  total: 0,//总页数
  page: 1//当前页数
}
export default state
