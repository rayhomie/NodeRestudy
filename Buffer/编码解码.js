
const message = '你好啊'
//1.对中文使用buffer进行utf8的编码 
let utf8buffer = Buffer.from(message, 'utf8')
console.log(utf8buffer);// <Buffer e4 bd a0 e5 a5 bd e5 95 8a>
//2.toString默认对utf8解码
console.log(utf8buffer.toString());// 你好啊
console.log(utf8buffer.toString('utf16le'))// 뷤붥闥

//1.对中文使用buffer进行utf16le的编码 
let utf16lebuffer = Buffer.from(message, 'utf16le')
console.log(utf16lebuffer);// <Buffer 60 4f 7d 59 4a 55>
//2.toString对utf16le解码
console.log(utf16lebuffer.toString('utf16le'));// 你好啊