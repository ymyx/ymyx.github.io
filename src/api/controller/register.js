const Base = require('./base.js');
const salt = 'yanmingfei';
module.exports = class extends Base {
  async indexAction() {
    if (this.isPost) {
      const postData = this.post();
      const clientIp = this.ctx.ip;

      let {username,password} = postData;
      password = think.md5(password+salt);

      let data = {
        username,
        password
      };
      let userid = await this.model('user').where({username}).getField('id',true);
      if(userid>=0){
        return this.fail('该用户名已经注册');
      }

      userid = await this.model('user').add(data)

      if(think.isEmpty(userid)){
        return this.fail('注册失败，请重新提交')
      }
      return this.success({msg:'注册成功'})
    }else{
      return this.fail({msg:'对不起只能接受Post请求'})
    }
  }
};
