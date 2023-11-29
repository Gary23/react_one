### 01_setState

创建一个简单的求和demo

1. 对象式setState写法
   - setState，可以接收两个参数，状态改变对象和回调函数`setState(changeState, [callback])`，回调函数是可选参数
   - setState 修改状态是异步操作，调用state之后并且执行完render之后，才会调用回调函数，在回调函数内才能拿到修改后的state
   - 如果setState的数值不依赖于原state可以使用对象式setState写法

2。 函数式setState写法
   - 同样接收两个参数，updater函数和回调函数`this.setState(updater, [callback])`，回调函数是可选参数
   - updater是一个函数，返回changeState对象，updater可以接收state和props
   - 对象式的写法实际是函数式的一个语法糖，如果setState的数值依赖于原state可以使用函数式setState写法

### 02_lazyLoad

懒加载组件，通常用作路由组件的懒加载，路由组件会在主页打开就全部请求，进入路由组件时不会再发送任何请求，懒加载组件的作用就是按需请求，不在主页请求回所有组件

- 使用一个路由案例，有Home和Abount路由组件
- 从react中引入lazy函数
- 引入组件的写法由 `import xx from 'xxxx'` 改为 `const xxx = lazy(() => import('xxxxxx'))` 
- 需要指定一个加载中的dom元素，从react引入Suspense组件，用Suspense组件去嵌套所有懒加载的路由组件，在Suspense组件中传入failback属性，属性的值是加载中要展示的dom元素，可以直接传入一个单独的加载中的组件

### 03_hooks

react 16.8版本新增加的特性，因为函数式组件中的this不能指向实例对象，所以this是undefined，导致函数式组件不能通过this获取到state和props等，react16.8之后通过hooks，就可以让函数式组件也可以访问到当前实例对象

写一个函数式组件，求和案例

1. React.useState
   - 在函数中使用 `const [count, setCount] = React.useState(0)` React.useState传入状态值的初始值，返回一个数组，数组第一个元素count是状态值，第二个元素setCount是修改count需要调用的方法
   - react每次render时，都会再次调用这个函数式组件，但是useState的调用只有第一次才会执行，不会每次都对状态进行初始化
   - 这里setCount还有第二种写法，不是传入一个值  而是传入一个回调函数，参数是当前的状态值，return的是修改后的状态值

2. React.useEffect
   - 将求和案例增加功能，初始化组件后就开始每秒求和+1，在类式组件中componentDidMount钩子里增加定时器就可以，函数组件中使用React.useEffect来替代钩子函数
   - `React.useEffect(callback, [stateArray])`，useEffect第一个参数传入一个回调函数，初始化组件时会调用，只要任意state触发render就会调用回调。第二个参数是一个状态监听的数组，只有数组中有的state才会在render后执行回调，如果传入空数组，所有state触发render都不会调用回调
   - 如果第二个参数是空数组，就相当于类式组件的componentDidMount钩子，如果不传第二个参数就相当于componentDidUpdate钩子
   - 所以在这个功能中，将定时器写到useEffect的回调中，并且传入空数组

3. React.useEffect卸载组件
   - 求和案例增加卸载root根组件的按钮，点击后调用 ReactDOM.unmountComponentAtNode 卸载组件
   - 卸载后定时器依然执行，所以需要一个类式组件的componentWillUnmount的钩子来取消定时器
   - React.useEffect的第一个参数是一个回调函数，这个函数可以return一个函数，这个函数会在组件销毁时调用，也就相当于componentWillUnmount钩子

4. React.useRef
   - 求和案例增加一个输入框，点击弹出提示按钮就alert输入框的内容，如果是类式组件，可以通过给input绑定ref，在点击按钮通过this.ref来获取value
   - 函数式组件通过React.useRef绑定，`const inputRef = React.useRef()`，在input绑定这个inputRef `ref={inputRef}`
   - React.useRef实际和React.createRef是一样的功能
   - 使用`inputRef.current`可以获取到DOM元素

### 04_Fragment标签

Fragment标签不会渲染为真实dom元素，它有两种使用场景

1. 用作组件根元素
   - 组件必须使用一个根标签嵌套，但是如果不想让这个根标签渲染为真实dom，可以用`<Fragment></Fragment>`嵌套整个组件的元素

2. 用于遍历元素
   - 遍历元素时，也需要一个根元素嵌套，这个元素也可以使用Fragment
   - 遍历元素时，可以给Fragment标签传参一个key值，Fragment标签只能接收这一个参数

### 05_context

context是一种组件间的通讯方式，用于组件与后代组件的通信

1. Parent组件
   - Parent最外层组件，层级是`Parent > Child > Grand`，如果Parent要向Grand组件传值就可以用到context
   - 从react引入createContext方法创建context标签：`const MyContext = createContext()`
   - 使用`<MyContext.Provider></MyContext.Provider>`嵌套Child组件，这样Child及其之后的组件都可接收到context对象，MyContext.Provider标签可以传入一个value参数，之后的组件接收的就是value传入的值

2. Child组件、Grand组件
   - 需要声明接收：`static contextType = MyContext`，声明后会将MyContext的value注入到当前组件的context对象中
   - 通过`this.context`就可以访问context数据
   - 函数式组件可以通过`<MyContext.Consumer>{ value => {} }</MyContext.Consumer>`获取到context，标签中是一个回调函数，value接收MyContext.Provider的value传参，return需要创建的元素

### 06_PureComponent

PureComponent类内部实现了shouldComponentUpdate钩子的比对，普通的组件不写shouldComponentUpdate会有以下问题：
   - 只要调用了this.setState，就算传入空对象，都会触发组件render的重新调用
   - 父组件只要调用了render，同时也会将所有子组件的render重新调用
   - 原因是没有写shouldComponentUpdate钩子，所以默认每次更新控制都是返回默认值true

使用shouldComponentUpdate的方式解决
   - 在钩子判断哪些情况不需要调用render
   - 使用setState的组件要判断nextState与当前state内部对应的数据是否修改，如果没有修改返回false
   - 所有子组件除了state还要判断nextProps与当前props内部对应的数据是否修改，如果没有修改返回false
   - shouldComponentUpdate的解决方式几乎不可用，因为state内的数据可能很多，子组件也可能很多

PureComponent的方式解决
   - 从react中引入PureComponent
   - 基于PureComponent创建类，`class App extends PureComponent{}`
   - PureComponent内部实现了类似shouldComponentUpdate钩子的比较逻辑，如果state或者props内部的数据和上次没有变化就不会调用render
   - PureComponent有一个小问题，它只能进行浅比较，所以每次setState中的对象或数组，都要用字面量的写法，不能在原有引用地址上修改再传入setState

### 07_renderProps

- 父组件在子组件中写标签体内容，子组件可以通过`this.props.children`属性接收并直接展示
- 如果给A组件传入的标签体是B组件，则B组件属于A组件的子组件，但是A组件不能直接给B组件传值，需要借助renderProps才可以实现
- 在A组件传入一个render函数`<A render={ name => <B name={name} /> } ></A>`，这样在A组件render时候调用并传入name`return ( { this.props.render(this.state.name) } )`，B组件就可以正常在props接收name

### 08_ErrorBoundary

- 错误边界，把错误控制在组件内部，不要影响整个项目，在父组件，可以阻挡子组件的报错
- 如果子组件在生命周期钩子中出现任何错误，都会调用父组件的getDerivedStateFromError钩子和componentDidCatch钩子，并且可以收到错误信息
- getDerivedStateFromError需要使用static声明，因为它是在构造函数和实例属性初始化之前被调用
- getDerivedStateFromError可以返回一个对象更新state中的状态，可以通过状态展示统一的错误处理组件
- componentDidCatch是在浏览器绘制完组件之后被调用的，所以不需要声明static
- componentDidCatch更多是用于统计错误次数上送给后台系统统计
