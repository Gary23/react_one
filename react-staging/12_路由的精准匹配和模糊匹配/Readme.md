12 路由的精准匹配和模糊匹配
默认模糊匹配
a、to属性 /home/a/b 可以匹配到path的 /home
b、to属性的 /home 不能匹配到path的 /home/a/b
c、to属性的 /a/b/home 不能匹配到path的 /home
在a过程中，to会解析为 home a b 三个路径，而path按照顺序匹配到了home，所以可以匹配上
配置精准匹配：
to属性的路径必须和path的路径完全一样
在Route组件写exact属性

