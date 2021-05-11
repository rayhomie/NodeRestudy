//每个模块需要使用define来定义
define(function () {
  const name = 'rayhomie'
  const age = 20
  const sayHello = (name) => {
    console.log('你好' + name)
  }

  return {//暴露给外部
    name,
    age,
    sayHello
  }
})