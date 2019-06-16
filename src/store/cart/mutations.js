var mutations =  {
  setCarList(state,payload){
    state.cartlist = payload;
  },
  setcartTotal(state,payload){
    state.cartTotal = payload;
  },
  setEdit(state,payload){
    state.edit = payload;
    if(payload==true){
      this.commit('cartmodule/setEditCarlist',false)
    }
  },
  setEditCarlist(state,payload){
    state.cartlist.forEach(item=>{
      item.checked = payload
    })

    this.commit('cartmodule/changeSelect')
  },
  changeSelect(state,payload){
    let res = state.cartlist.filter(item=>{
      return item.checked == true;
    })
    state.delselect =  res.map(item=>{
      return item.productId
    });
  },
  deleteSelect(state,payload){
    state.delselect = [];
  }
}
export default mutations;
