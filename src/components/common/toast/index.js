var plugin = {}
import ToastObj from './Toast.vue';


plugin.install = function (Vue) {
  Vue.prototype.$toast =function (myopts,fn) {
    let options = Object.assign({},{
      autoClose: true,
      title: '提示',
      body: '例如',
      cancle: false,
      time: 5000,
      cb:()=>{}
    }, myopts)
    fn&&(options.cb = fn);
    console.log(options)
    //扩展成组件 构造函数
    var ToastComp = Vue.extend(ToastObj);
    //通过new来生成一个可用的实例组件
    var ins = new ToastComp({
      propsData: options
    });
    //查找到当前的真正可用的html元素
    var vm = ins.$mount();
    document.body.appendChild(vm.$el)
    vm.visible = true;
  }
}

export default plugin;
