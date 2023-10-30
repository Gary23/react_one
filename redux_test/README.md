----------- redux --------------

专门用于状态管理的JS库，不是react的插件，仅仅是名字和react有点像
可以用在react vue angular  但是基本是与react配合使用，因为vue有vuex
作用：集中式管理react应用中多个组件共享的状态

场景：
1、某个组件的状态，需要让其他组件随市可以获取到（共享）
2、一个组件需要改变另一个组件的状态（通信）
3、能不用就不用


三个核心概念：
action
1 动作的对象
2 包含两个属性
  type 标识属性，值为字符串
  data 数据属性 值是任意类型

reducer
1 用于初始化状态，加工状态
2 加工时，根据旧的state和action，产生新的state的纯函数

store
1 将state action reducer联系在一起的对象


---改为redux的写法：
先不写action
创建redux目录  创建store.js  count_reducers.js

store
文件专门用于暴露一个store对象，整个应用只有一个store对象
从redux引入creatStore方法
调用传入count_reducers并暴露

count_reducers.js
该文件是用于创建一个count组件服务的reducers,本质是一个函数，初始化状态和加工状态
定义一个函数，接收两个参数，preState,action
获取action对象的type和data
type在这个案例里有加和减，判断这两种场景，用preState和data做计算
default写初始化的值，如果preState的值是undefined说明是初始化则，赋值为默认值，这里默认值是0，最后default中return preState 的值

count组件
把count状态交给redux处理
引入store，用于获取redux中保存的count状态，store.getState()
设定count的值，store.dispath({ type: '', data: count })，
dispatch只会更新状态，不会进行render，在componentDidMount中监测redux中状态的变化，只要变化，调用render
store.subscribe(() => {
  只要redux中的任何状态改变，都会执行回调
  this.setState({})
})
store.subscribe这一步可以放倒index.js，只要状态发生变化，就直接重新调用reactDOM.render，这样就不用每个组件写store的监听了