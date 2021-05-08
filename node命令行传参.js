console.log(process.argv);
/*
获取参数：`process.argv`

1、当我们直接 `node index.js` 回车执行
//打印出内容：
[
  '/usr/local/bin/node',//node的全局绝对路径
  '/Users/mac/Desktop/react_project/NodeRestudy/index.js'//index.js的绝对路径
]


2、当我们传递参数 `node index.js env=production platform=ios author=rayhomie` 回车执行
//打印出内容：
[
  '/usr/local/bin/node',//node的全局绝对路径
  '/Users/mac/Desktop/react_project/NodeRestudy/node命令行传参.js',//index.js的绝对路径
  'env=production',//接收的参数
  'platform=ios',//接收的参数
  'author=rayhomie'//接收的参数
]
*/