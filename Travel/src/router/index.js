import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' // @代表src目录
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
