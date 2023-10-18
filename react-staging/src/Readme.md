11 解决样式丢失
path写多级目录  比如/abc/about   /abc/home
切换路由后，刷新后样式会丢失，证明bootstrap没有加载成功

路由路径是多级的话，刷新后会去找第一级的地址(/abc)去找资源，所以bootstrap会找不到
./bootstrap.css 要改为 /bootstrap.css 或者 %PUBLIC_URL%/bootstrap.css


12 路由的精准匹配和模糊匹配
默认模糊匹配
a、to属性 /home/a/b 可以匹配到path的 /home
b、to属性的 /home 不能匹配到path的 /home/a/b
c、to属性的 /a/b/home 不能匹配到path的 /home
在a过程中，to会解析为 home a b 三个路径，而path按照顺序匹配到了home，所以可以匹配上
配置精准匹配：
to属性的路径必须和path的路径完全一样
在Route组件写exact属性

13 Redirect
重定向组件，主要用于进入首页后重定向到一个路径
Redirect可以给所有Route组件兜底，就是所有path都没有匹配上，最后会展示Redirect的组件（to属性指定一个兜底路径）

14 嵌套路由
二级路由
改造一下Home组件
Home目录下，新建News组件和Message组件，把route_pages2的对应列表内容放到组件中，News和Message的导航放到Home组件内
二级路由的to属性，要携带一级路由的路径，比如这里要在/home的基础上写

