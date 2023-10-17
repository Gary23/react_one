封装NavLink：
新建MyNavLink组件，对NavLink二次封装
引入NavLink   react-router-dom
可以自定义activeClassName   接收to传参   这样就不用写很多activeClassName
<MyNavLink to="xxxx">链接</MyNavLink>   
”链接“这个文本节点在props中的属性名叫做children，所以可以直接写children属性代替文本节点
所以在组件内部直接给 NavLink 传children属性就可以  不用在标签中写文本节点内容