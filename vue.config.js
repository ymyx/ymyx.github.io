// vue.config.js
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
module.exports = {
  // 选项...
  chainWebpack:(config)=>{
    if(process.env.NODE_ENV=='production'){
      //生产环境
      new LodashModuleReplacementPlugin()
    }
    config.resolve.alias
      .set('@',path.join(__dirname,'src'))
      .set('assets',path.join(__dirname,'src/assets'))
      .set('components',path.join(__dirname,'src/components'))
      .set('layout',path.join(__dirname,'src/layout'))
      .set('base',path.join(__dirname,'src/base'))
      .set('static',path.join(__dirname,'src/static'));
  }
}
