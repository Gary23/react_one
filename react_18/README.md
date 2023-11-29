默认使用函数式组件

创建评论功能，
1、创建列表数据，遍历列表，创建评论列表

2、只有自己的评论才展示删除，创建user对象模拟当前用户
3、点击删除按钮，从列表删除评论

4、渲染tab+点击高亮，默认最热tab

5、排序功能，根据最新（新的在前）、最热排序（点赞数多的在前），使用loadsh排序，默认最热排序

```js
// 根据热度
_.orderBy(list, 'like', 'desc')
// 根据创建时间
_.orderBy(list, 'ctime', 'desc')

```

6、引入 classnames  npm包
可以方便的通过条件动态控制class类名
在项目中不需要通过字符串拼接的方式控制className

`className('静态类名', { 类名: 控制条件 })`



受控表单绑定
使用react组件的状态(state)控制表单的状态，input赋值给state，因为setState会触发试图更新，所以也触发了表单更新



