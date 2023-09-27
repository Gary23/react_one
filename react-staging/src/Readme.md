components目录新建4个组件 header list item footer

App组件：
根组件，初始化todos数据，所有更新状态的函数放到这个组件（多个子组件要使用这个状态所以只能放在根组件中，这个叫做状态提升。状态存放在哪里，更新状态的操作就应该在哪里）

header组件: 
接收参数：addTodo函数。
输入框组件，input的onKeyUp通过调用父组件的addTodo将输入框的内容添加到todos数组中（子组件给父组件传数据  就需要父组件给子组件传一个函数  子组件在这个函数传参给父组件）

list组件：
接收参数：deleteTodo函数、updateTodo函数、todos数组。
引入item组件，用todos数组遍历item组件，透传App组件的函数给item组件

item组件：
接收参数：deleteTodo函数、updateTodo函数、todos展开后的数据。
鼠标移入移出改变样式和显示/隐藏【删除】按钮，点击删除按钮调用根组件传入的deleteTodo函数传参id，修改checkbox的值调用根组件传入的updateTodo函数传参checked选中状态和id

footer组件：
接收参数：clearAllDone函数、checkAllTodo函数、todos数组。
计算已选中项目的数量，判断全选checkbox的状态，checkbox修改状态后调用根组件的checkAllTodo函数传参checked选中状态
【删除所有已完成的项目】，点击按钮后，直接调用App组件的clearAllDone函数


增加props的类型及必要性的限制
安装prop-types库   使用时需要用static关键字定义 propTypes