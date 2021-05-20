const fs = require('fs')
const writer = fs.createWriteStream('./write.txt')

writer.write('你好啊', (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('写入成功一次');
})

writer.write('雷浩',(err)=>{
  console.log('写入成功二次');
})

// writer.close()//可以使用close
writer.end('End')//也可以使用end（传入参数可以写入到文件中）

//监听关闭
writer.on('close', () => {
  console.log('文件已关闭');
})