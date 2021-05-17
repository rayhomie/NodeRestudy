//处理图片文件
const fs = require('fs')
//使用sharp库来处理图片数据https://github.com/lovell/sharp#documentation
const sharp = require('sharp');

//方式一：传入buffer
fs.readFile('./picture.jpg', (err, data) => {
  sharp(data)
    .resize(20, 20)
    .toFile('./20x20.jpg')
})
//方式二：传入路径
sharp('./picture.jpg')
  .resize(100, 100)
  .toFile('./100x100.jpg')

