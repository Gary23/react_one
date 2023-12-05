### 01_渲染商品列表

1. 创建整套foodsStore的redux流程，使用@reduxjs/toolkit
  - 创建store/modules/foodsStore.js，创建foods的Store对象并导出reducer，导出异步获取数据的高阶函数
  - 创建store/index.js，组合foodsStore并导出一个store对象
  - 在src/index.js根目录注入store

2. App.js
  - 引入fetchFoodList的action函数，使用useSelector, useDispatch钩子获取和展示数据，

### 02_渲染分类列表

1. App.js
  - 给Menu组件传入useSelector钩子获取的列表数据
