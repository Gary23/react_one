components目录新建4个组件 header list item footer
先创建静态组件html和css

初始化数据
App 中存放todos数据，id name done
list组件引入item组件，map遍历传入的todos数据  给item组件传参  {...todo}
item的input不要使用checked  使用defaultChecked

实现添加todo
header组件的input绑定一个onKeyUp事件，拿到input的value，onKeyUp事件中增加回车键的判断（keyCode值）
子组件要给父组件传数据  就需要父组件给子组件传一个函数  子组件在传递数据时候调用这个函数
App组件拿到子组件的todoObj之后  追加到todos数组中  id数据使用nanoid  import { nanoid } from 'nanoid'
