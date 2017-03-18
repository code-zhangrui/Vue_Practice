# vue-demos
# npm i babel-loader babel-core babel-preset-es2015 babel-preset-react

## 几个点

#### npm init
#### npm install -g vue-cli
#### vue init webpack .
#### npm i
#### npm run dev

#### 1.npm可能被墙，用cnpm替代
#### 2.npm run dev 前根据提示安装一些包
#### 3.ESLint 插件中的rule要注释掉，不然书写起来很麻烦（花括号前要空格；函数后的小括号前要空格）
#### 4.生成预览：改index.js里的路径；npm run build 前根据提示安装一些包
#### 5.预览地址，...index.html
#### 6.安装sass-loader node-sass可能会报错，rebuild一下即可
#### 7.导航条的v-for、class、@、v-show等语法
#### 8.SVG这部分先跳过
#### 9.两层for-in
#### 10.Vuex思想：一个组件有4块：入口、出口、函数、数据；store比较特殊，是统一管理数据的地方
#### 11.默认 computed 只能用于读数据，如果还想写数据，就要用到 Vue 的 setter / getter 功能 
#### 12.payload是外边函数带进来的有效数据，比如，点击的对象
#### 13.流程：组件中template里绑定组件内的函数，后者将数据作为形参传入store里的函数，去处理这些数据。
#### 14.一个包：object-path 可以省写路径，格式： path 为 <code>'`${x}.${y}`'</code> 
