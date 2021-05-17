console.log('开始')
setTimeout(() => {
  console.log('结束')
}, 0)
new Promise((resolve, reject) => {
  resolve('then')
}).then(res => console.log(res))
for (let i = 0; i < 1000000000; i++) {
}
//等待若干秒后才执行结束。因为timer需要等待宏任务结束