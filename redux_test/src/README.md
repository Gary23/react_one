---改为redux的写法：

先不写action
创建redux目录  创建store.js  count_reducers.js

store
文件专门用于抛出一个store对象，整个应用只有一个store对象
抛出一个redux的creatStore方法的调用，参数是一个reducers函数

count_reducers.js
该文件是用于创建一个count组件服务的reducers，本质是一个函数接收两个参数(preState，action)，初始化状态和加工状态
参数preState是更新前的状态值
参数action是一个对象，包含type和data
type在这个案例里有加和减，判断这两种场景，用preState和data做计算
default写初始化的值，在这个案例中默认值赋值为0

count组件
把count状态交给redux处理，获取使用store.getState()，设置使用store.dispatch({ type, data })
dispatch只会更新状态，不会进行render，需要自行更新，在组建中可以监听store.subscribe(callback)，任何数据变更后会执行回调
store.subscribe可以在每个组件中自己定义，也可以放到最外层的index.js重新render整个应用