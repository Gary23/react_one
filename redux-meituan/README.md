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


### 03_分类列表点击

1. 点击高亮
  - 在foodsStore中记录点击状态activeIndex
  - 在Menu组件判断activeIndex和当前index，修改class的值

2. 点击切换商品列表
  - App.js中判断activeIndex与foodsList的index，渲染列表

### 04_添加购物车实现

1. foodsStore.js
  - RTK增加cartList和cartFlag状态的管理，增加setCartList的action函数
  - setCartList的功能1：cartFlag默认为false，只要添加购物车，cartFlag状态就为true
  - setCartList的功能2：判断setCartList是否包含当前添加项，已包含只更新count，未包含追加

2. 统计区域功能
  - Cart组件，获取cartList和cartFlag
  - 用cartList的length更新购物车数量
  - 用cartList遍历计算总价
  - 用cartFlag判断类名展示高亮效果

### 05_购物车列表

1. 控制列表渲染
  - RTK增加showCartVisible状态和setShowCartVisible action函数
  - Cart组件，在需要展示和隐藏的地方调用setShowCartVisible
  - Cart组件，购物车列表和遮罩层根据showCartVisible判断是否展示
  - Cart组件，用cartList渲染购物车列表

2. 购物车增减逻辑实现

增减两个action，根据id传参找到当前修改项，count组件增加方法传参，控制减最低值

清空购物车，清空action



控制购物车显示隐藏

点击统计区域显示购物车列表，有购物车数据才显示

点击蒙层区域购物车列表消失

通过状态控制

类名visible