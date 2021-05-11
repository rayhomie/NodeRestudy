const EventEmitter = require('events')

//1.创建发射器实例
const emitter = new EventEmitter()

//2.监听某个事件
//on是addListener的简写
emitter.on('eventname', (...args) => {
  console.log('监听到了eventname事件第1次', ...args);
})
emitter.addListener('eventname', (...args) => {
  console.log('监听到了eventname事件第2次', ...args);
})

//3.触发事件
emitter.emit('eventname','rayhomie','leihao')


/*
打印结果:
监听到了eventname事件第1次 rayhomie leihao
监听到了eventname事件第2次 rayhomie leihao
*/