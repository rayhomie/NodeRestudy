import { name, person, Age, SayHello, modify } from './modules/module1.js';

SayHello('leihao')
modify()
setTimeout(() => {
  console.log(name);
}, 2000)
console.log(name);
console.log(person);
person.name = 'green'
// let flag = true;
// if (flag) {//运行时
//   const promise = import('./modules/module1.js')
//   promise.then((res) => {
//     console.log(res);
//   })
// }