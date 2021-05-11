//入口用于声明配置管理模块
(function () {
  //require是外部require.js加载的全局变量
  require.config({//需要配置
    baseUrl: '',
    paths: {//模块名与路径的映射(不加后缀名)
      "module1": "./modules/module1",
      "module2": "./modules/module2"
    }
  })

  //加载module2.js中的代码
  require(['module2'], function (module2) {
    console.log(module2);
  })
})()