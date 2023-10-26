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

