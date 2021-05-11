const fs = require('fs')

const filePath = './text.txt'

//同步操作
const syncFile = fs.readFileSync(filePath)
console.log(syncFile);

//异步回调
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('读取的内容是：', data)//默认是读取到十六进制的buffer类型
  console.log(data.toString())//Buffer转成String类型
})

//使用promises
const promisesFile = fs.promises.readFile(filePath)
promisesFile.then(data => console.log(data))