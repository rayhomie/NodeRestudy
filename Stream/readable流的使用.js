const fs = require('fs')

//流的方式读取
const reader = fs.createReadStream('./read.txt', {
  code: 'utf8',
  highWaterMark: 2//每次最多读两个字节
})
//监听data回调获取读取的数据
reader.on('data', (data) => {
  console.log(data.toString());
  reader.pause()//暂停读取
  setTimeout(() => {
    reader.resume()//恢复读取
  }, 1000)
})
//监听文件被打开
reader.on('open', () => {
  console.log('文件被打开');
})
//监听文件关闭
reader.on('close', () => {
  console.log('文件被关闭');
})