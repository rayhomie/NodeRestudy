const express = require("express");

//express其实是一个函数：createApplication => 返回app对象
const app = express();

//监听默认路径
app.get("/", (req, res, next) => {
  res.end("hello get express");
});

app.post("/", (req, res, next) => {
  res.end("hello post express");
});

//开启监听
app.listen(8888, () => {
  console.log("express服务器启动成功");
});
