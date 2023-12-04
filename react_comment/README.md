# 基于react18的评论发布demo

默认使用函数式组件

### 01_评论列表遍历

- 引入data/list.js数据，遍历后生成评论列表

### 02_评论删除按钮

- 引入data/user.js数据，修改【删除】按钮为只有当前用户才可以显示
- 点击【删除】按钮删除对应的评论

### 03_tabs排序

- 渲染tabs，默认选中最热，控制选中项要高亮
  高亮是className控制，使用classnames包处理，使用方式：`className('静态类名', { 类名: 控制条件 })`
  ```jsx
  <span className={className('nav-item', { active: sortType === item.type })}></span>
  ```
- 根据选中的排序方式更新评论列表，对列表排序使用loadsh包处理，使用方式 `orderBy(列表, 列表排序字段名, 升序/降序)`
  ```js
  // 根据热度
  _.orderBy(list, 'like', 'desc')
  // 根据创建时间
  _.orderBy(list, 'ctime', 'desc')

  ```
### 04_发布评论

- 输入框发布评论，更新评论列表 
- 用uuid生成id，`v4()` 生成随机id
- 创建时间用dayjs，生成固定格式：`dayjs(new Date()).format('MM-DD hh:mm')`

### 05_封装数据请求逻辑

- 用真实数据请求的方式或者list和user数据，用json-server启动一个数据资源：`json-server xxx.json --port 端口号`
- 安装axios作为请求工具
- 封装list、user的获取逻辑，抛出list、user、setList，它们需要在App组件使用，setUser因为外部不需要调用所以不用抛出

### 06_封装评论组件

- 将评论列表封装单独的子组件，传入需要的数据




