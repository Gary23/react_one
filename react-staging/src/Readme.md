15 向路由组件传递params参数

增加三级路由组件，message列表点击后展示列表的详情信息，并且让message组件的列表动态生成
message组件下新建detail组件放详情数据，数据来源是message列表的数据
detail中写假数据，根据列表的传参展示对应的数据

2种方式
1、params：
传参：Link直接在url路径后面拼接参数 /${参数值1}/${参数值2}  
接收：Route在路径后用 :参数名1/:参数名2 
获取：在路由组件中就可以用props.match.params来获取


2、search
传参：Link直接在url路径后面拼接参数 /?属性名1=${参数值1}&属性名2=${参数值2}
接收：无需接收
获取：在路由组件中就可以用props.location.search获取，获取的是urlencoded字符串（key=value&key=value），使用querystring（qs）转为对象   qs.stringify可以把对象转为urlencoded字符串，qs.parse可以把urlcoded字符串转为对象，这里用的时候要去掉开头的?

3、state参数
这个state和组件的state状态对象没有任何关系
传参：to参数需要传一个对象to={{ pathname: '路径', state: { key:value, key:value } }}
接收：无需接收
获取：在路由组件中就可以用props.location.state获取，
state的方式虽然url上没有体验参数，但是刷新后也不会清理state数据，会保存在history对象中，但是清理浏览器缓存后，就获取不到了，所以用state要判断获取不到数据的场景，state如果不传默认的值是undefined


detail组件中根据传入的title和id，获取数据并展示