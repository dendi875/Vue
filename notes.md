# notes
----------

https://github.com/vuejs/vue-cli/tree/v2#vue-cli--

[root@localhost vue]# npm install --global vue-cli
[root@localhost vue]# vue init webpack my-project
[root@localhost Travel]# npm run dev
[root@localhost Travel]# npm run start

# 项目目录结构介绍
sr/main.js 是项目入口文件。

### 单文件组件与Vue中的路由

当一个文件与 .vue 结尾时，我们把这种文件叫作单文件组件。里面放的组件，
组件的模板放到了 template 标签里，组件的逻辑放到了 script 标签里，组件的样式放到了 style 标签里。

<router-view/>
显示的是当前路由地址所对应的内容，


export default new Router({
  routes: [
    {
      path: '/',  // 当你访问根路径时，要显示 HelloWorld 这个组件
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

### 多页应用 VS 单页应用


### 项目代码初始化
1、完善 index.html 里的 meta 标签。
minimum-scale=1.0,maximum-scale=1.0,er-scalable=no
2、引入 reset.css border.css
3、fastclick 库
[root@localhost Travel]# npm install --save fastclick
4、重启服务
[root@localhost Travel]# npm run start


======
首页header区域开发

使用 stylus 开发，所以要安装 stylus
[root@localhost Travel]# npm install stylus --save
安装 stylus-loader

注意：修改了 webpack 配置项以后一定要重新启动服务器
[root@localhost Travel]# npm run start
-------------
首页轮播图

借助  Vue 的轮播组件 Vue-Awesome-Swiper 来实现。
[root@localhost Travel]# npm install vue-awesome-swiper@v2.6.7  --save
--------------
图标区域页面布局

* 推荐组件开发

* 周末游组件开发
slot 使用
有时我们希望组件中的内容可以被我们的父组件给定制时可以使用slot

* Ajax 获取首页数据
axios Vue官方推荐的 Ajax访问Api

1、安装 axios
[root@localhost Travel]# npm install axios --save

2、启动服务器
[root@localhost Travel]# npm run dev

把本地开发用到的模拟数据放到 static/mock 目录下

在开发环境下把
/api/index.json 的请求转发到 /static/mock/index.json
在 config/index.js proxyTable 配置项

首页父子组件数据传递
-------------------
城市选择页面路由配置

搜索框布局

列表布局

better-scroll的使用及城市字母表布局
安装：
[root@localhost Travel]# npm install better-scroll --save
重新启动服务器
[root@localhost Travel]# npm run start

城市列表页面的动态数据渲染

兄弟组件间联动。

点击或拖拽右侧字母表后左侧显示相应内容


兄弟组件之间的联动

拖拽城市列表页面右侧字母后左侧显示相应的内容


列表切换性能优化

-----------
搜索功能实现
------------------------------
使用 Vuex 实现数据共享，首页（Home.vue）和城市列表（City.vue）没有一个共同的父级组件就没办法进行数据的中转。
https://vuex.vuejs.org/zh/

虚线中的内容就是Vuex，可以把它想象成一个仓库，这个仓库是由 State、Actions、Mutations组成
State 就是存放共用数据据的地方，如果我们想要用共用数据就直接来 state 地方取。
Actions就是放一些异步操作和大量异步操作的地方。
Mutations 里放的是一个一个对State同步的修改。

当State里的数据发生变化时组件展示的内容也相应的发生了变化。
如果我们想改变 state 中的数据，不能直接修改必须经过一个流程
首先，组件调用 Actions，Actions 再调用 Mutations，只有通过 Mutations 最终才能改变 State 里面的值。
但用时组件可以饶过 Actions 然后调用 Mutations 修改 State 里的值。

组件调用 Actions 是通过调用 Dispatch 方法来实现。
Actions调用Mutations或者组件调用Mutations是通过 Commit 方法来实现。

安装：
重启服务器：
打开 main.js 引入 vuex.js
-----------------------
Vuex的高级功能使用及localStorage

localStorage类似于cookie的功能，可以实现本地存储的功能。
对 store/index.js 进行拆分，不然它会变得很臃肿
Vuex里的 getters 类似于 Vue计算属性computed的计算属性作用，当我们需要通过 state 里的数据计算出新的数据时就可以使用它。

使用 keep-alive 优化网面性能。
当使用 keep-alive 时我们的 vue 会多出一个生命周期函数 activated
---------------
详情页动态路由及banner布局
---------------------
公用图片画廊组件拆分
-----------
城市详情页面Header区域的渐隐渐显效果