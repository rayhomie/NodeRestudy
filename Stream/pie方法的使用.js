const fs = require('fs')
const writer = fs.createWriteStream('./write.txt')
const reader = fs.createReadStream('./read.txt', {
  code: 'utf8',
  highWaterMark: 2//每次最多读两个字节
})

reader.pipe(writer)//将读到的值，导入输出流

// writer.close()