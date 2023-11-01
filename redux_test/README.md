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



