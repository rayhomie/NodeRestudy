const program = require('commander')

const helpOptions = () => {

  //添加自己的options

  program.option('-h --lh', 'a lh cli')
  //手动设置路径，<>为可选参数
  program.option('-d --dest <dest>', 'a destination folder, example: -d /src/components')

  //监听参数传递
  program.on('--help', function () {
    console.log('监听到--help!!!');
  })
}
module.exports = helpOptions