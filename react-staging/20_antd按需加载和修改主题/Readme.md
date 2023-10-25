antd基本使用

安装：npm i antd@4

这里使用4.x的版本，对node的版本要求比较低(v8版本以上)，最新的5.x需要node v16以上版本

使用：
import { Button } from antd
import 'antd/dist/antd.css'

这里 antd/dist/antd.css 会引入所有组件的样式，可以优化为按需加载（js的部分使用import已经支持了按需加载）

1、按需引入：
需要安装npm包：@craco/craco 脚手架配置   babel-plugin-import 按需引入css

安装了craco后，需要修改package.json的启动命令
scripts里的命令start、build、test react-scripts 改为 craco

根目录增加配置文件craco.config.js  配置脚手架具体的修改规则

module.exports = {
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: 'css'  //设置为true即是less 这里用的是css
        }
      ]
    ]
  },
};


2、自定义主题：
安装 craco-less
craco.config.js 修改

const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {//支持装饰器
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true  //设置为true即是less 这里用的是css
        }
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};


