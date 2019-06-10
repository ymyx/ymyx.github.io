module.exports = class extends think.Controller {
  async __before() {
    // 根据token值获取用户id
    this.ctx.state.token = this.ctx.header['x-nideshop-token'] || '';
    const tokenSerivce = think.service('token', 'api');
    this.ctx.state.userId = await tokenSerivce.getUserId(this.ctx.state.token);


    const publicController = this.config('publicController');
    const publicAction = this.config('publicAction');
    // 如果为非公开，则验证用户是否登录
    const controllerAction = this.ctx.controller + '/' + this.ctx.action;
    if (!publicController.includes(this.ctx.controller) && !publicAction.includes(controllerAction)) {
      if (this.ctx.state.userId <= 0) {
        return this.fail(401, '请先登录');
      }
      //校验数据库token如果无token则也失效
      const token = await this.model('user').field(['token']).where({ id: this.ctx.state.userId }).find();
      console.log(token)
      if(think.isEmpty(token)||token.token===''){
        return this.fail(401,'token无效')
      }
    }
  }

  /**
   * 获取时间戳
   * @returns {Number}
   */
  getTime() {
    return parseInt(Date.now() / 1000);
  }

  /**
   * 获取当前登录用户的id
   * @returns {*}
   */
  getLoginUserId() {
    return this.ctx.state.userId;
  }
};
