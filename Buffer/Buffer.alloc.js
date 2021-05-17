//Buffer.alloc(size[,fill[,encoding]])
let buffer = Buffer.alloc(8)//给当前buffer分配8个字节内存
console.log(buffer);// <Buffer 00 00 00 00 00 00 00 00>
//直接修改buffer内容
buffer[0] = 88// 十进制的88
buffer[1] = 0x88// 十六进制的88
console.log(buffer);// <Buffer 58 88 00 00 00 00 00 00>

let fillbuffer= Buffer.alloc(8,'12')// 分配8字节并填充满字符串
console.log(fillbuffer);// <Buffer 31 32 31 32 31 32 31 32>
console.log(fillbuffer.toString());// 12121212