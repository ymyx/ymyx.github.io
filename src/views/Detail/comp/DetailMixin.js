import {addCart, getGoodsCout, goodsDetail} from "../../../network/goods";

var data = {
  visible: false,
  status: 0,//false的话表示现在是第一次单击加入购物车，默认会弹出选择框，
  // 状态为true时我们可以把选项添加到购物车中，并且隐藏它。
  data: [],
  info: {},
  banner: [],
  params: [],
  specs: [],
  sign: 0,
  select: {},
  num: 1,
  product: [],
  selectTitle: '请选择规格数量',
  postParams: {
    goodsId: 0,
    number: 1,
    productId: 0
  },
  cartnum: 0
}

var DetailMixin = {
  data() {
    return data
  },
  watch: {
    select: {
      handler() {
        this.changeSelectTitle();
      },
      deep: true
    }
  },
  methods: {
    changeSelectBar() {
      this.visible = !this.visible;
    },
    async getdata(id) {
      let res = await goodsDetail({id});

      console.log(res.data)
      this.banner = res.data.gallery;
      this.info = new Goodsinfo(res.data.info)
      this.params = res.data.attribute;
      this.specs = res.data.specificationList;
      this.product = res.data.productList;
      this.initSelect();
    },
    initSelect() {
      var res = this.specs.map((item) => {
        return item.valueList[0]
      });
      var obj = {}
      this.specs.forEach((item, index) => {
        obj['sign' + index] = res[index]
      });
      this.select = obj;
    },
    addSelect(obj, index) {
      this.select['sign' + index] = obj;
    },
    changeSelectTitle() {
      var arr = Object.keys(this.select).map(item => {
        return this.select[item].value
      });
      this.selectTitle = arr.join('+')
    },
    changePostParams() {
      var arr = Object.keys(this.select).map(item => {
        return this.select[item].id
      });
      if (arr) {
        var productSpectsids = arr.join('_');
        var product = this.product.filter(item => {
          return item.goods_specification_ids === productSpectsids
        })[0];
      } else {
        var product = this.product[0]
      }
      this.postParams.productId = product.id;
      this.postParams.goodsId = product.goods_id;
      this.postParams.number = this.num
    },
    async addCart() {
      this.changePostParams();

      if (localStorage.getItem('yanxuan')) {
        this.status++;
        this.status %= 2;
        //status 如果 为 1时那么可以发起提交
        if (this.status === 0) {
          let res = await addCart(this.postParams);
          if (res.errno === 0) {
            this.$toast({body: '添加购物车成功'})
          } else {
            this.$toast({body: res.errmsg})
          }
        }
      } else {
        this.$toast({body: '请登录后再添加到购物车'})
        return;
      }
      this.changeSelectBar();
    }
  }
}

export default DetailMixin;

class Goodsinfo {
  constructor(data) {
    this.title = data.name
    this.subtitle = data.goods_brief
    this.price = data.retail_price
    this.pics = data.goods_desc
    this.num = data.goods_number
  }
}
