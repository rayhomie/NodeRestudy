define(function (require, exports, module) {
  //和Commonjs规范差不多的导出导入
  const { name, age, sayHello } = require('./modules/module1.js')
  console.log(name);
  console.log(age);
  sayHello('leihao')
})