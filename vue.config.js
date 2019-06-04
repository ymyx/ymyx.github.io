// vue.config.js
const path = require('path');
module.exports = {
  // 选项...
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',path.join(__dirname,'src'))
      .set('assets',path.join(__dirname,'src/assets'))
      .set('components',path.join(__dirname,'src/components'))
      .set('layout',path.join(__dirname,'src/layout'))
      .set('base',path.join(__dirname,'src/base'))
      .set('static',path.join(__dirname,'src/static'))
  }
}
