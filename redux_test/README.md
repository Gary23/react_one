## redux

### 使用场景

专门用于状态管理的JS库，不是react的插件，仅仅是名字和react有点像
可以用在react vue angular  但是基本是与react配合使用，因为vue有vuex
作用：集中式管理react应用中多个组件共享的状态

场景：
1. 某个组件的状态，需要让其他组件随市可以获取到（共享）
2. 一个组件需要改变另一个组件的状态（通信）
3. 能不用就不用


### 三个核心概念

1. action
   - 动作的对象
   - 包含两个属性
    type 标识属性，值为字符串
    data 数据属性 值是任意类型

2. reducer
   - 用于初始化状态，加工状态
   - 加工时，根据旧的state和action，产生新的state的纯函数

3. store
   - 将state action reducer联系在一起的对象


### 01_求和案例

首先不使用redux来写一个求和按钮**1_原始版求和**

页面要素：求和的值、下拉框可选择数字、加号按钮、减号按钮、和为奇数才触发加法的按钮、异步的加号按钮
四个按钮分别触发不同的事件计算求和的值，求和的值使用state.count，每次通过setState更新count的值


### 02_精简版redux的写法

精简版先不写action，只写必要的store和reducers

基于求和案例，创建redux目录  创建store.js  count_reducers.js

1. store
   - 引入count_reducers.js
   - 文件专门用于抛出一个store对象，整个应用只有一个store对象
   - 从redux引入creatStore方法，创建store对象
   - 调用creatStore并传入count_reducers

2. count_reducers.js
   - 该文件是用于创建一个count组件的reducers，本质是一个函数接收两个参数(preState，action)，初始化状态和加工状态
   - 参数preState是更新前的状态值
   - 参数action是一个对象，包含type和data
   - 获取action对象的type和data
   - type在这个案例里有加和减，判断这两种场景，用preState和data做计算
   - default写初始化的值，在这个案例中默认值赋值为0

3. count组件
   - 引入store.js
   - 把count状态交给redux处理，获取状态使用`store.getState()`，设置状态使用`store.dispatch({ type, data })`
   - dispatch只会更新状态，不会进行render，需要自行更新，在组建中可以监听`store.subscribe(callback)`，任何数据变更后会执行回调
   - store.subscribe可以在每个组件中自己定义调用` this.setState({})`强制render，也可以放到最外层的index.js重新render整个应用

### 03_增加action的写法

基于精简版，增加action的写法，在精简版中是在count组件中写的`{ type, data }`，这就是一个action对象，这里把它交给count_action.js来处理

1. count_action.js
   - 该文件专门为count组件生成action对象（`{ type, data }`）
   - 抛出加法和减法的函数，函数return一个action对象

2. count组件
   - 引入action抛出的加法和减法函数，dispatch函数的传参由对象改为action函数的调用

3. constant.js
   - 该文件用于定义action对象中type对象的常量值
   - 在reduxcers和action引入constant.js，reduxcers和action中的常量都在这里声明

### 04_高级操作_异步action

action除了是Object类型，还可以是Function类型，其中dispatch处理Object类型只能同步执行，如果需要异步执行，需要将异步操作包装在一个函数中，所以Function类型通常用做异步执行

1. count_action.js
   - 新建一个action函数，return一个函数体，函数体内实现异步操作
   - dispatch只能接收redux-thunk转换后的Function类型，redux-thunk是一个中间件，它的作用是把一个异步操作包装在一个函数中，并在适当的时候调用
   - return的函数体会接受到一个dispatch本身作为参数，异步结束后调用dispatch函数来设置状态

2. store.js
   - 从store中引入applyMiddleware，再引入redux-thunk。
   - 异步action使用，dispatch只能接收redux-thunk转换过的函数，添加中间件的操作需要在store中完成
   - 调用createStore创建store增加第二个参数，调用applyMiddleware，并给applyMiddleware传参redux-thunk

### 05_react-redux容器及组件和UI组件连接

在react-redux中，组件分为容器组件和ui组件，在demo中将容器组件统一放置到新建的containers目录

1. containers/count组件
   - 引入components/count这个ui组件
   - 引入react-react的connec方法
   - 调用connect函数的返回值就能得到一个容器组件，需要传入ui组件。`connect()(CountUI)`，注意这里是调用connect的返回值，也就是调用两次
   - 最后抛出这个容器及组件

2. App组件
   - 引入containers/count容器组件
   - 引入redux/store文件，传入Count容器组件

3. components/count组件
   - 暂时删除所有和store相关的内容

### 06_react-redux基本使用

1. containers/count组件
   - 引入所有redux/count_action.js的方法
   - 调用connect需要传两个参数，用于给ui组件传值，两个参数都需要return一个Object，ui组件通过props接收传参
   - 第一个参数是state的映射mapStateTpProps，接收state参数，就是store.getStore()的返回值，mapStateTpProps返回需要传入ui组件的参数
   - 第二个参数是dispatch的映射mapDispatchToProps，接收dispatch参数，就是store的dispatch方法，dispatch内部依然是传入action，mapDispatchToProps返回需要传入ui组件的方法

3. components/count组件
   - 将删除的从store调用的方法和获取的状态，改为从props调用和获取
   - 实际上对ui组件来说，使用react-redux只是修改了一下调用了api的名称，react-redux的主要逻辑都在容器组件

### 07_react-redux基本使用优化

1. containers/count组件组件优化
   - 都改为匿名函数且使用箭头函数的写法
   - connect改变传参，第二个参数(mapDispatchToProps)直接写Object，value就是action函数体，react-redux内部会去执行了dispatch操作

2. index.js
   - 不再需要store的subscribe监听，render组件是react-redux的能力之一，通过connect实现的
   - 管理store，引入store、从react-redux引入Provider标签，嵌套App组件，并把store传入Provider标签，这样就相当于全局引入就不需要在后面的组件引入了

3. App组件
   - 删除store的引入及传参 

4. 文件层面优化
   - 删除components目录下的count组件，把这个ui组件的内容放到容器组件中，最终只抛出一个容器组件就可以

### 08_多个组件使用react-redux

1. 新建person组件
   - 新建containers/person组件，先在组件内部不使用react-redux实现功能，输入框输入内容，添加到数据在列表展示

2. person结合react-redux
   - 新建 actions 和 reducers 目录，分别存放count和person组件的action和reducer文件
   - 修改count相关的action和reducer引用路径
   - contast增加addPerson常量
   - actions/person文件，新增addPersonAction方法返回action对象
   - reducers/person文件，新增personReducer方法返回加工后的personList
   - store中引入reducers/person，原来store只有一个countReducer，可以直接传入createStore，现在有多个reducer，需要组合reducer数据。引入react-redux的combineReducers函数，调用combineReducers组合count和person的reducer加工后数据，combineReducers方法组合后将返回值传入createStore，这样之后
   - 多个组件使用redux之后，store.getState方法就会返回一个对象而不是原来的count，containers/count中connect的传参修改为state.count
