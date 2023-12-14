### 01_初始化项目

- 删除src和public内不用的文件
- 创建src目录下的apis、assets、components、pages、redux、router、utils
- 安装：sass antd react-router-dom @craco/craco axios react-redux @reduxjs/toolkit
- 项目根目录配置@别名：craco.config.js、jsconfig.json，package.json配置craco
- 路由配置：创建Layout和Login页面组件及路由配置
- 黑马前端的api文档地址：https://apifox.com/apidoc/shared-fa9274ac-362e-4905-806b-6135df6aa90e/api-31967347


### 02_登陆页

1. 静态结构和样式
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