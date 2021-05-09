// CJS/module1.js
let name = 'rayhomie'

let age = 20

const person = {
  name: 'rayhomie',
  age: 20
}

function modify(newName, newAge) {
  name = newName
  age = newAge
  person.name = newName
  person.age = newAge
}

setTimeout(() => {
  console.log(name, age);
}, 1000)

/*
//使用exports导出
exports.name = name
exports.age = age
exports.person = person
exports.modify = modify
*/

//使用module.exports导出
module.exports = { name, age, person, modify }