const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('tap', (...args) => {
  console.log('监听到了tap', ...args);
})
emitter.on('click', (...args) => {
  console.log('监听到了click', ...args);
})

console.log(emitter.eventNames());// [ 'tap', 'click' ]
console.log(emitter.listenerCount('tap'));// 1
console.log(emitter.listeners('click'));// [ [Function (anonymous)] ]