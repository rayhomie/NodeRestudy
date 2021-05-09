//------------ CJS/module2.js -------------------
let name = 'rayhomie'

exports.name = name

console.log(exports, module.exports, exports === module.exports);
//{ name: 'rayhomie' } { name: 'rayhomie' } true

