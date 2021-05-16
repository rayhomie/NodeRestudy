#!/usr/bin/env node
const program = require('commander')
//查看版本号
program.version(require('./package.json').version)

//模块化封装
require('./lib/core/help')()

//解析一定要写在参数配置的后面
program.parse(process.argv)

/*
//在program.parse后面可以获取到参数信息
const opts = program.opts()
//lh -h，打印：true
console.log(opts.lh);
//lh -d /src/components，打印：/src/components
console.log(opts.dest);
*/