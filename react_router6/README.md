### 01_一级路由切换

- 安装react-router-dom
- 引入BrowserRouter组件、NavLink组件、Route组件、Routes组件
- 与router5不同的是，Route的component属性改为element属性，传入组件`<Route path="/home" element={ <Home /> }/>`
- 在router6用Routes替换Switch组件，嵌套所有Route组件，Routes组件内部不会重复匹配，只会显示第一个匹配到的path

### 02_重定向Navigate

- router6不再使用Redirect组件重定向，改为使用Navigate组件
- 写法：Route组件的path属性匹配 / ，`<Route path="/" element={ <Navigate to="/home" /> } />`，element属性需要使用Navigate组件重定向
- Navigate组件只要被渲染，就会触发试图的切换（Home组件的sum案例）
- Navigate跳转可以用to属性追加模式，也可以用replace替换模式

### 路由链接的高亮

5版本是NavLink给加的active类名 可以用activeClassName修改  6版本是写一个className的回调函数，接收一个对象，isActive布尔值，判断后返回class类名



路由表

调用useRoutes传入数组，将返回值放到原来routes的位置

路由表是数组，元素是对象，path和element

路由表最好放到单独的文件中



嵌套路由

增加news和message

路由表引入news和message

子路由用children集合

home组件增加news和message的导航，可以省略父级路径或者相对路径

home引入Outlet标签，指定路由组件的位置

