let name = 'rayhomie'
let age = 20

let person = {
  name: 'John',
}
let sayHello = function (name) {
  console.log('你好', name);
}
let modify = function () {
  age = 10
}
setTimeout(() => {
  name = 'leihao'
  console.log(person);
}, 1000)
export { name, person, age as Age, sayHello as SayHello, modify }