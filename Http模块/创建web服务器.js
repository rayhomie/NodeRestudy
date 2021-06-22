const http = require("http");

//创建一个web服务器
const server = http.createServer((req, res) => {
  res.end("hello server");
});

//启动服务器
server.listen(3000, () => {
  console.log(`~服务器已经启动在3000端口~`);
});
