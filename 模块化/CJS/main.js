// CJS/main.js
const module1 = require('./module1.js')
//实际上是浅拷贝拷贝了一份module1.js模块对象
console.log(module1);
/*
{
  name: 'rayhomie',
  age: 20,
  message: 'my name is rayhomie',
  sayHello: [Function: sayHello]
}
*/
module1.modify('leihao', 30)
console.log(module1);
/*
{
  name: 'rayhomie',
  age: 20,
  person: { name: 'leihao', age: 30 },
  modify: [Function: modify]
}
*/