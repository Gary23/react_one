### setState

创建一个简单的求和demo

1. 对象式setState写法
   - setState，可以接收两个参数，状态改变对象和回调函数`setState(changeState, [callback])`，回调函数是可选参数
   - setState 修改状态是异步操作，调用state之后并且执行完render之后，才会调用回调函数，在回调函数内才能拿到修改后的state
   - 如果setState的数值不依赖于原state可以使用对象式setState写法

2。 函数式setState写法
   - 同样接收两个参数，updater函数和回调函数`this.setState(updater, [callback])`，回调函数是可选参数
   - updater是一个函数，返回changeState对象，updater可以接收state和props
   - 对象式的写法实际是函数式的一个语法糖，如果setState的数值依赖于原state可以使用函数式setState写法

### lazyLoad

懒加载组件，通常用作路由组件的懒加载，路由组件会在主页打开就全部请求，进入路由组件时不会再发送任何请求，懒加载组件的作用就是按需请求，不在主页请求回所有组件

- 使用一个路由案例，有Home和Abount路由组件
- 从react中引入lazy函数
- 引入组件的写法由 `import xx from 'xxxx'` 改为 `const xxx = lazy(() => import('xxxxxx'))` 
- 需要指定一个加载中的dom元素，从react引入Suspense组件，用Suspense组件去嵌套所有懒加载的路由组件，在Suspense组件中传入failback属性，属性的值是加载中要展示的dom元素，可以直接传入一个单独的加载中的组件

### hooks

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



