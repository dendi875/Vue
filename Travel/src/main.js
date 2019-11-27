// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // webpack 会找 ./App.Vue
import router from './router' // 会默认打 index.js
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 这是 ES6写法，等价于 route:route
  store: store,
  components: { App }, // 这是 ES6 的写法，等价于 App:App，App 是一个局部组件被注册到实例中
  template: '<App/>'
})
