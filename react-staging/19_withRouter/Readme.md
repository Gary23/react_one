17 withRouter
在非路由组件中也可以控制路由跳转
withRouter调用时传入一个普通组件，可以给普通组件加上路由组件特有的的api
export default withRouter(组件类)


18 BrowserRouter与HashRouter的区别
1、底层原理不一样：
  BR使用的是H5的history API 不兼容IE9及以下版本
  HR使用的是URL的哈希值
2、url的表现形式不一样
  BR的路径中没有#
  HR的路径中有#
3、刷新后路由对state参数的影像
  BR没有任何影响，因为state保存在history对象中
  HR不使用history，所以没法保存state数据