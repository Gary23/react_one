


路由组件的基本使用：
安装 react-router-dom@5

App组件
import { Link, BrowserRouter, Route } from react-router-dom

Router分两种，BrowserRouter和HashRouter，  这里使用BrowserRouter标签，  用BrowserRouter嵌套整个页面

注释导航的a标签，改为路由链接Link标签，href改为to  /组件   

根据路径匹配组件（注册路由） <Route />标签  path=路由地址（和Link组件对应）  component={引入的组件}   

更好的方案是在index.js import { BrowserRouter } from react-router-dom   然后直接嵌套App标签


路由组件与一般组件：
存放目录不同
路由组件按照标准应该放在pages目录
而一般组件应该放到components目录下
写法不同
一般组件：<Header />
路由组件：
<Route 
  path="/home"
  component={Home}
/>
接收参数不同
一般组件：传递什么就能收到什么
路由组件：参数靠路由传入，接收三个固定属性history: { go, goBack, goForward, push, replace }、match: { match, path, url }、location: { pathname, search, state }


18 BrowserRouter与HashRouter的区别
1、底层原理不一样：
  BR使用的是H5的history API 不兼容IE9及以下版本
  HR使用的是URL的哈希值
2、url的表现形式不一样
  BR的路径中没有#
  HR的路径中有#
3、刷新后路由对state参数的影像（一种路由的传参方式）
  BR没有任何影响，因为state保存在history对象中
  HR不使用history，所以没法保存state数据




