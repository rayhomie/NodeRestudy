const path = require('path')

const basePath = '/User/why'
const filename = 'index.js'

// 路径拼接
const filePath = path.resolve(basePath, filename)
const filepath = path.join(basePath, filename)
console.log(filePath, filepath);// /User/why/index.js /User/why/index.js

// 获取路径信息
const file_path = '/User/why/index.js'
const dirname = path.dirname(file_path)// 文件夹路径
const basename = path.basename(file_path)// 文件名
const extname = path.extname(file_path)// 后缀名
console.log(dirname, basename, extname);// /User/why index.js .js


const resolve = dir => path.resolve(__dirname, dir)
console.log(resolve('src'));