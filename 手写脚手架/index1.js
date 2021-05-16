#!/usr/bin/env node
console.log('hello world')

//参数-v,--version获取版本号
process.argv.find(item => ['--version', '-V'].includes(item))
  && console.log(require('./package.json').version);