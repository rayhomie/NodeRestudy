define(function (require, exports, module) {
  const name = 'rayhomie'
  const age = 20
  const sayHello = function (name) {
    console.log('你好', name);
  }
  //和Commonjs规范差不多的导出导入
  module.exports = { name, age, sayHello }
})