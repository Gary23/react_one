### 01_项目初始化

1. 项目使用函数式组件开发，主要使用如下依赖包：
  - @reduxjs/toolkit
  - react-redux
  - antd-mobile
  - classnames
  - axios
  - react-dom
  - @craco/craco

2. 创建路由
  - 新建pages目录存放路由页面组件
  - 新建route/index.js文件，创建路由表，导出一个路由组件
  - 在index.js使用BrowserRouter嵌套根目录

3. 创建redux
  - 这里使用reduxjs/toolkit
  - 在redux/modules目录创建模块的store，导出reducer函数和action creator
  - 在redux/index.js汇总模块的reducer函数，导出一个总的store对象
  - 在index.js中使用Provider嵌套App组件并注入store

4. 主题样式
  - 创建theme.css，在内部通过变量的方式修改antd-mobile的默认样式

5. 数据mock
  - 使用json-server模拟数据请求，在package新建命令serve，数据存放在根目录的database/data.json

6. webpack配置
  - 使用craco暴露webpack配置，在根目录新建cacro.config.js并配置@别名路径
  - 在package.json修改start和build命令
  - 根目录创建jsconfig.json增加@别名路径的路径联想

### 02_整体布局

1. 创建整个项目页面布局，TabBar的切换
  - layout组件引入antd-mobile的TabBar组件
  - 用fixed方式布局
  - 增加TabBar组件的onChange回调

### 03_月度账单_统计部分

1. 创建月度账单收支统计部分静态部分
  - Month组件创建静态页面部分

2. 月度账单日期选择框开关、改变箭头
  - 创建状态控制选择框
  - 通过状态控制箭头的样式类名

3. 选择日期后在页面展示并格式化
  - 日期组件onConfirm回调记录选择的日期
  - 用dayjs进行数据格式化

4. 后台数据处理
  - 后台返回的是平铺数据，项目是按照年月筛选，所以把数据根据年月重新分组
  - 在useMemo钩子监听billList数组，return新数据结构用loadsh的groupBy方法根据date字段分组，用monthGroup接收return的新数组
  - useMemo钩子接收两个参数，第一个是函数return出计算后的数据，第二个参数是依赖数组，只要依赖数据变化就更新数据，用变量接收第一个函数的return数据
  ```js
  const calcData = useMemo(() => { return list }, ['list'])
  ```

5. 计算选择日期后的统计数据
  - 创建当前月份数组的状态currentMonthGroup，每次修改日期后，从monthGroup中获取到与当前选择月份匹配的数据进行set
  - 同样用useMemo钩子监听currentMonthGroup，内部计算数组内的的收入累计、支出累计、结余，用monthData接收这三个数据，在页面中展示
  - 用useEffect钩子在页面初始化时就更新monthGroup对象，进行计算

### 04_月度账单_单日统计列表

1. 创建单日账单统计组件
  - 在Month目录下新建components/DailyBill组件
  - 通过在Month遍历日列表来渲染该组件，将当日数据传入组件

2. 日列表处理
  - 将当前月的账单数据以日为单位进行统计
  - 用useMemo钩子返回2个数据，第1个是把当前月的数组按照天重新排列分组，第2个是按天重新分组后的的key的数组，用于遍历

3. 渲染单日统计列表
  - 遍历天的分组数据，渲染DailyBill组件，传入数据
  - 组件内部接受数据后计算收入、支出、结余，计算方式和统计部分相同

4. 渲染单日账单列表
  - DailyBill组件内，遍历传入的数据，渲染单日账单列表
  - 列表内usrFor需要转译，引入contants目录的数据字典转译
  - 增加visible状态控制单日账单列表的展示，点击单日统计部分触发状态改变

5. 封装全局图标组件
  - 单日账单列表中，根据不同的账单类型，显示不同图标
  - 组件从阿里的仓库获取图标，图标的名字与usrFor数据对应，传入usrFor字段拼接上图标的url地址就可以






