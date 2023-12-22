### 01_初始化项目

- 删除src和public内不用的文件
- 创建src目录下的apis、assets、components、pages、redux、router、utils
- 安装：sass antd react-router-dom @craco/craco axios react-redux @reduxjs/toolkit
- 项目根目录配置@别名：craco.config.js、jsconfig.json，package.json配置craco
- 路由配置：创建Layout和Login页面组件及路由配置
- 黑马前端的api文档地址：https://apifox.com/apidoc/shared-fa9274ac-362e-4905-806b-6135df6aa90e/api-31967347


### 02_Login组件

1. 初始化Login组件
  - 准备Login组件的结构，使用antd组件
  - 准备Login组件的样式文件

2. 表单校验
  - 手机号验证必输和格式
  - 验证码校验必输
  - 在提交和失去焦点都进行校验

3. 封装request
  - 新建文件@/utils/request.js
  - 引入axios，调用create方法创建axios实例，配置根路径、超时时间、请求拦截、响应拦截，最后导出实例

4. redux管理token
  - 创建@/redux/modules/userStore，创建reducer保存token，调用request创建异步action
  - 创建公共store，合并userStore导出
  - 在index.js注入store

5. 获取表单数据提交
  - 通过绑定onFinish回调获取表单数据
  - 获取数据后同步执行dispatch提交
  - 提交完成后跳转到首页

6. 持久化token
  - 创建@/utils/storage文件，提供set、get、remove函数，操作localStorage
  - 在userStore保存token的时候保存到localStorage
  - userStore的token数据初始化时先从localStorage获取，没有再置空
  - 请求拦截器注入token：@/utils/request中，在请求拦截器获取token，注入的请求头Authorization字段中

7. 用token做路由权限控制
  - 目的是有token能跳到首页，没有token重定向到登录页
  - 创建@/components/AutoRoute公共组件，组件内获取token，如果能获取到渲染传入的路由组件，如果获取不到重定向到/login
  - 在@/router/index.js路由表引入AutoRoute，用这个组件嵌套需要token的组件

### 03_Layout组件

1. 初始化Layout组件
  - 准备Layout组件的结构，使用antd组件
  - 准备Layout组件的样式文件
  - 样式初始化，安装normalize.css，在项目的index.js入口文件引入normalize.css，再引入全局的index.scss样式文件

2. Layout路由配置
  - Layout创建二级路由，Home、Article、Publish组件，默认重定向到Home
  - Menu组件的数据设置key值，与路由一一对应，增加点击事件跳转路由
  - Menu组件增加selectedKeys属性，值为location.pathname，高亮当前路由的菜单项

3. Layout展示用户信息
  - 用户信息要共享，所以放redux维护，新增userInfo状态对象以及对应的reducer
  - 增加获取用户信息的异步方法，从redux导出，在Layout组件中使用

4. 退出登录
  - 弹窗确认是否退出
  - 确认后清空token、清空userInfo、跳转登录页

5. 处理token失效
  - 为了用户安全考虑，用户长时间未做任何操作、或者规定时效到达后，都需要失效
  - 用本地的token调用后台接口，后台判断这个token如果失效，会返回401错误码
  - 在响应拦截监听401，监听到跳转登录

6. Home-Echarts基础图表
  - 创建@/components/HomeCharts组件，用Echarts组件创建图表，图标需要的数据接收props
  - 在Home组件引入HomeCharts组件并渲染，传入参数

7. apis封装
  - 所有的接口调用放到apis目录下，目的是方便维护和代码可读性，按照模块创建文件比如：user.js、article.js
  - 文件内引入reuqest，抛出数据请求函数

### 04_Publish组件

1. 初始化Publish组件
  - 准备Publish组件的结构，使用antd组件
  - 准备Publish组件的样式文件
  - 主要使用antd的表单系列组件、上传组件、react-quill富文本组件

2. 渲染频道列表
  - 在@/apis/article.js文件增加频道列表接口，引入Publish组件调用并渲染到页面

3. 上传封面
  - 增加上传部分的页面结构和样式
  - Upload上传组件增加onChange回调和action上传地址，fileList状态数据
  - 上传完成后赋值fileList，待上传时候上送

4. 切换封面类型
  - 增加封面模式状态控制，获取到封面类型的值，进行条件渲染，只有有图模式才展示上传Upload组件
  - 默认无图模式，每次切换类型清空fileList
  - 获取到图片类型后，可以限制上传数量，Upload组件的maxCount属性，赋值当前选择的封面数量状态

5. 发布文章表单提交
  - 创建@/apis/article.js文件，抛出发布文章接口的函数fetchCreeateArticlesApi
  - 安装并引入富文本编辑器react-quill和css，将ReactQuill组件放到内容区域
  - Publish组件引入fetchCreeateArticlesApi，在表单提交调用，传入页面表单的参数，发布成功重置表单数据
  - 提交前增加检验，封面类型和实际图片列表数量是否一致

### 05_Article组件

1. 初始化Article组件
  - 准备Publish组件的结构，使用antd组件
  - 主要使用antd的Card, Form, DatePicker, Table组件，DatePicker需要引入中文转译文件

2. 渲染频道列表
  - 创建@/hooks/useChannel
  - 将Publish组件的获取频道列表逻辑封装为自定义hook，最后抛出一个channels集合

3. 渲染table文章列表
  - @/apis/article文件创建getArticleListAPI获取文章列表接口函数
  - 获取列表后赋值列表和总数状态
  - 根据status的枚举值状态渲染状态要素

4. 筛选功能实现
  - 创建formData状态对象，赋值默认上送字段，在useEffect钩子监听formData
  - Form组件绑定onFinish回调函数，获取表单数据处理一下日期区间，给formData赋值

5. 分页功能
  - 使用Table组件的分页功能，设置pagination对象的pageSize、totle属性onChange回调，手动更改页码后通过修改formData触发数据重新加载

6. 删除功能
  - 点击删除按钮调用删除回调，传入文章id
  - 调用接口method设置DELETE，调用方式为：url/文章id





编辑文章跳转

点击编辑按钮跳到新增页面携带文章id，



编辑文章回填

通过id获取文章详情数据，调用useForm，绑定到Form组件，用Form设置value的方法设置接口返回数据

处理cover集合设置封面类型和图片列表



根据id适配状态

根据id判断遍历文章还是发布文章



更新文章

编辑文章修改后应该是更新，不是发布

适配体检时候url获取的适配

调用接口不同



打包和本地预览

配置路由懒加载，不优化的话所有路由会一起加载，在路由表从react引入lazy 



包体积分析，通过可视化方式体现打包之后的体积，source-map-explorer，script命令 source-map-explorer ＇build/static/is/*.js＇



CDN优化，由离用户最近服务器将缓存传给浏览器，非业务性代码、体积较大、不需要频道更新，比如react 等，项目中把需要CDN的排除在打包之外，以CDN的方式重新引入

看笔记的webpack配置，排除  引进  保存  index.html中取出后动态插入  





