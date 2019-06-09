const Base = require('./base.js');
const salt = 'yanmingfei';
module.exports = class extends Base {
  async loginAction() {
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
      if(think.isEmpty(userid)){
        return this.fail('该用户名未注册');
      }
      userid = await this.model('user').where(data).getField('id',true);
      if(think.isEmpty(userid)){
        return this.fail('密码不正确');
      }

      var userfull = await this.model('user').field(['id','username','token','last_login_time']).where({id:userid}).find();
      let {id,token,last_login_time} = userfull;

      let nowDate = Math.floor(new Date().getTime()/1000);
      let dTieme = nowDate-last_login_time;

      let h = parseInt(dTieme/60/60);

      const TokenService = this.service('token','api');
      let resToken = await TokenService.verify(token)
      if(!think.isEmpty(token)&&h<2&&resToken){
        return this.success({token:token,userinfo:{id,username}})
      }

      const sessionKey = await TokenService.create({user_id:userid});
      //更新用户信息
      userid = await  this.model('user').where({id:userid}).update({
        last_login_time:parseInt(new Date().getTime()/1000),
        last_login_ip:clientIp,
        token:sessionKey
      });
      if(think.isEmpty(userfull) || think.isEmpty(sessionKey)){
        return this.fail('登录失败');
      }
      return this.success({token:sessionKey,userinfo:{id,username}})
    }else{
      return this.fail({msg:'对不起只能接受Post请求'})
    }
  }

  async loginoutAction() {
    let token = this.ctx.header['x-nideshop-token'] || '';
    const tokenSerivce = think.service('token', 'api');
    let userid = await tokenSerivce.getUserId(token);
    if(userid<=0){
      return this.success({
        msg:'token已清除'
      })
    }
    let newuserid = await  this.model('user').where({id:userid}).update({
      last_login_time:parseInt(new Date().getTime()/1000),
      last_login_ip:this.ctx.ip,
      token:''
    });
    if(think.isEmpty(newuserid)){
      this.fail('请求失败，请重新请求')
    }else{
      return this.success({
        msg:'token已清除'
      });
    }

  }
};
