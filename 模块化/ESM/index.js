// import { Name, Age, SayHello } from './modules/module1.js';
// console.log(Name, Age);
// SayHello('leihao')

let flag = true;
if (flag) {//运行时
  const promise = import('./modules/module1.js')
  promise.then((res) => {
    console.log(res);
  })
}