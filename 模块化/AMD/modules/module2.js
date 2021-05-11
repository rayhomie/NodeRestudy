//每个模块需要使用define来定义
define([
  'module1'//依赖的模块
], function (module1) {//使用参数来接收导入的变量
  console.log(module1.name)
  console.log(module1.age)
  module1.sayHello('leihao')
  return {}
})