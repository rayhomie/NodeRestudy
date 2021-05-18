setTimeout(() => {
  console.log('setTimeout');
}, 0)

setImmediate(() => {
  console.log('setImmediate');
})


//答案：
/*
setTimeout
setImmediate
或者
setImmediate
setTimeout
*/

/*原因：
初始化事件循环需要时间，
timers的回调先保存到红黑树再放到timers队列中也需要时间，
setImmediate的回调不需要保存直接加入到check队列几乎不耗时。

*/