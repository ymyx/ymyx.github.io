import axios from 'axios';
import api from "./api";
//获取登录后的信息
let token = localStorage.getItem('yanxuan');
/*request({
  url:'地址',//设置请求地址
  type:"post",//请求类型
  params:{//请求参数

  }
})*/
function request(config){
  let instance = axios.create({
    baseURL:api.ApiRootUrl,
    timeout:5000
  });
  //设置token
  instance.defaults.headers.common['X-NIDESHOP-TOKEN'] = token;
  //请求前拦截
  instance.interceptors.request.use(function (config) {
    //在发送请求之前做些什么
    return config;
  },function (error) {
    return Promise.reject(error);
  });
  //响应拦截
  instance.interceptors.response.use(function (res) {
    return res.data;
  },function (error) {
    console.log(error)
    return Promise.reject(error);
  })
  return instance(config)
}
export default request;
