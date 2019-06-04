module.exports = class extends think.Logic {
  loginAction() {
    this.rules = {
      username:{
        alphaNumeric:true,
        required:true,
        trim:true,
        method:'POST',
        length:{min:6,max:20}
      },
      password:{
        alphaNumeric: true,
        required: true,
        trim:true,
        method:'POST',
        length:{min:6,max:10}
      }
    };
  }
}
