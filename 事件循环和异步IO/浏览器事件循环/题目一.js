setTimeout(() => {
  console.log('set1');

  new Promise((resolve) => {
    resolve()
  }).then(() => {
    new Promise((resolve) => {
      resolve()
    }).then(() => {
      console.log('then4');
    })
    console.log('then2');
  })
})

new Promise((resolve) => {
  console.log('pr1');
  resolve()
}).then(() => {
  console.log('then1');
})

setTimeout(() => {
  console.log('set2');
})

console.log(2);

queueMicrotask(() => {
  console.log('queueMicrotask1');
})

new Promise((resolve) => {
  resolve()
}).then(() => {
  console.log('then3');
})

//答案：
/*
pr1
2
then1
queueMicrotask1
then3
set1
then2
then4
set2
*/