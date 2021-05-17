//处理文本文件
const fs = require('fs')

fs.readFile('./text.txt', { encoding: 'utf8' }, (err, data) => {
  console.log(data);// 雷浩
})
fs.readFile('./text.txt', (err, data) => {
  console.log(data);// <Buffer e9 9b b7 e6 b5 a9>
  console.log(data.toString());// 雷浩
})