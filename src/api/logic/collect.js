module.exports = class extends think.Logic {
  listAction() {
    this.rules = {
      typeId:{
        int:true,
        required:true,
        method:'GET',
      }
    };
  }
};
