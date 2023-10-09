---------------
promise链!!!!   
第一个 .then 中 第一个回调是resolve   第二个回调是reject   
第二个 .then 中 可以拿到第一个then的return  如果没有return  则第二个then获取到的是undefined

中断promise链！！！！
用catch兜底，用catch兜底的话，就不需要再then里写reject的回调了，有错误，就会进入到兜底的catch
如果不想兜底，可以在.then的reject回调中  return new Promise(() => {})  就不会继续执行后面的.then了


axios

复制静态页面，users_page目录
public引入bootstrap
拆分组件，search  list

Search组件  
引入axios
标题改为搜索github用户  input输入关键词点击搜索   button搜索
给input增加ref属性，回调的方式
button增加点击事件：获取用户输入、发送网络请求(http://localhost:5000/search/users?q=xxxxxxxxxxxxx)(所需服务器目录下npm start)，请求成功后更新App组件的状态（集合、首次标识、loading标识、错误标识）

App组件
创建users集合，接收users数据后保存，给search组件传函数，通用修改状态的函数
给list组件传所有state数据集合
增加未搜索时的首次标识、loading标识、接口报错的错误标识

List组件
判断首次标识，展示首次文字（欢迎使用，输入关键字，随后点击搜索）
如果是loading状态，展示加载中
如果有错误，展示错误信息
最后遍历展示users数据集合

--------

兄弟组件间的通信（消息订阅与发布机制--pubsub-js）
在接受数据的组件订阅消息subscribe，定义消息、回调   其他组件发布消息后执行回调   回调接受两个参数，消息名称和传回的数据，返回一个token，取消订阅unsubscribe使用
发布消息publish，第一个参数是消息名，第二个参数是传递的数据

App组件：
不需要有自己的状态

List组件
把App的状态都给List组件
引入pubsub.js
初始化钩子中订阅消息，在回调中更新状态
销毁钩子中取消订阅

Search组件
更新App状态的时候，更新List组件中的状态
所有更新App状态的代码，改为发布消息

-----------

fetch
