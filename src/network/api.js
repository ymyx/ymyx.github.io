const ApiRootUrl = 'http://kumanxuan1.f3322.net:8360/api/';

let api =  {
  ApiRootUrl:ApiRootUrl,
  IndexUrl: 'index/index', //首页数据接口
  CatalogList: 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: 'catalog/current',  //分类目录当前分类数据接口

  AuthLoginByWeixin: 'auth/loginByWeixin', //微信登录
  AuthLoginByUserName: 'loginauth/login', //用户名登陆

  AuthLoginOuth: 'loginauth/loginout', //用户名退出登录，清除token

  registerByUserName:'register/index', //用户名注册

  GoodsCount: 'goods/count',  //统计商品总数
  GoodsList: 'goods/list',  //获得商品列表
  GoodsCategory: 'goods/category',  //获得分类数据
  GoodsDetail: 'goods/detail',  //获得商品的详情
  GoodsNew: 'goods/new',  //新品
  GoodsHot: 'goods/hot',  //热门
  GoodsRelated: 'goods/related',  //商品详情页的关联商品（大家都在看）

  BrandList: 'brand/list',  //品牌列表
  BrandDetail: 'brand/detail',  //品牌详情

  CartList: 'cart/index', //获取购物车的数据
  CartAdd: 'cart/add', // 添加商品到购物车
  CartUpdate: 'cart/update', // 更新购物车的商品
  CartDelete: 'cart/delete', // 删除购物车的商品
  CartChecked: 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: 'cart/goodscount', // 获取购物车商品件数
  CartCheckout: 'cart/checkout', // 下单前信息确认

  OrderSubmit: 'order/submit', // 提交订单
  PayPrepayId: 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: 'collect/list',  //收藏列表
  CollectAddOrDelete: 'collect/addordelete',  //添加或取消收藏

  CommentList: 'comment/list',  //评论列表
  CommentCount: 'comment/count',  //评论总数
  CommentPost: 'comment/post',   //发表评论

  TopicList: 'topic/list',  //专题列表
  TopicDetail: 'topic/detail',  //专题详情
  TopicRelated: 'topic/related',  //相关专题

  SearchIndex: 'search/index',  //搜索页面数据
  SearchResult: 'search/result',  //搜索数据
  SearchHelper: 'search/helper',  //搜索帮助
  SearchClearHistory: 'search/clearhistory',  //搜索帮助

  AddressList: 'address/list',  //收货地址列表
  AddressDetail: 'address/detail',  //收货地址详情
  AddressSave: 'address/save',  //保存收货地址
  AddressDelete: 'address/delete',  //保存收货地址

  RegionList: 'region/list',  //获取区域列表

  OrderList: 'order/list',  //订单列表
  OrderDetail: 'order/detail',  //订单详情
  OrderCancel: 'order/cancel',  //取消订单
  OrderExpress: 'order/express', //物流详情

  FootprintList: 'footprint/list',  //足迹列表
  FootprintDelete: 'footprint/delete',  //删除足迹
};
export default api;
