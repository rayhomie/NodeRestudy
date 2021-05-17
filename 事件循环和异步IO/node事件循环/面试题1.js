async function async1() {
  console.log('async1 start');
  await async2()
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout0');
}, 0)

setTimeout(() => {
  console.log('setTimeout2');
}, 300)

setImmediate(() => console.log('setImmediate'))

process.nextTick(() => console.log('nextTick1'))

async1()

process.nextTick(() => console.log('nextTick2'))

new Promise((resolve) => {
  console.log('promise1');
  resolve();
  console.log('promise2');//会被同步执行
}).then(() => {
  console.log('promise3');
})

console.log('script end');

//答案：
/*
script start
async1 start
async2
promise1
promise2
script end
nextTick1
nextTick2
async1 end
promise3
setTimeout0
setImmediate
setTimeout2
*/