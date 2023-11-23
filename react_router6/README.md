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

### 03_路由链接的高亮

- 5版本是NavLink给加的active类名，可以直接用activeClassName属性修改自定义的类名
- 6版本className可以写一个回调函数，回调内接收一个对象，根据对象的isActive属性判断当前导航是否被选中

### 04_路由表

- 路由表的数据类型是Array，元素的Object，需要配置path和element属性，值和Route组件一样
- 使用：在函数式组件中返回`useRoutes(路由表Array)`，替换原routes组件，routes和route组件就不需要写了
- 路由表应该放到单独的文件中，抛出一个函数式组件，在其他组件直接引入这个函数式组件渲染

### 05_嵌套路由

- 在Home组件增加news和message组件的导航链接，6版本的子路由导航链接可以写相对路径，不需要写父级路径
- Home组件引入Outlet组件占位，子路由的视图会渲染到这个组件的位置
- 在路由表的home组件里增加children属性，值是一个Array，message和news组件的路由配置

### 06_路由传参_params

- 传参：`detail/参数1/参数2`，路径可以是相对路径也可以是绝对路径
- 路由表：path属性`detail/:参数1/:参数2`
- Detail组件接收：使用useParams，调用后返回一个Object，内部为传参的数据

### 07_路由传参_search

- 传参：`detail?key=value&key=value`，路径可以是相对路径也可以是绝对路径
- Detail组件接收：使用useSearchParams，调用后返回一个Array，第一个元素是search对象，调用对象的get方法获取search参数，第二个是地方法，修改search参数
- Detail组件接收：使用useLocation，调用后会获取到字符串的search参数

### 08_路由传参_state

- 传参：to属性只传路径，新增一个state属性传参数，类型是Object
- Detail组件接收：使用useLocation，调用后会获取到state对象，就是传递的参数

### 09_编程式路由跳转_useNavigate

- 使用useNavigate可以模拟Link标签的路由跳转，使用：`const navigate = useNavigate()` 获取到navigate函数
- navigate函数第一个参数是路径，string类型，第二个参数是一个配置对象，可以配置state传参或者打开方式replace
- navigate函数可以传参-1或者1，表示后退或前进
- 使用useNavigate的组件处于路由的上下文，也就是需要被BrowserRouter嵌套

### 10_useInRouterContext

- 调用useInRouterContext，返回一个布尔值，用于判断是否处于路由的上下文（BrowserRouter嵌套），只要被BrowswrRouter类型的标签嵌套，就处于上下文

### 11_useNavigationType

- 调用useNavigationType，返回一个字符串，分别为：pop、push、replace
- push和replace是通过路由跳转来的，pop是刷新了整个页面，或者通过前进后退等方式进入的页面

### 12_useOutlet

- 呈现当前组件中的嵌套路由组件
- 如果嵌套的路由组件还没挂载就是null
