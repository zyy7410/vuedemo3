// 默认js入口：

import Vue from 'vue'
// 1.引入根组件： import App from './App'
// 1.替换 根组件：
import Layout from './components/layout'

// 3 引入其他页面的组件
import IndexPage from './pages/index'

// 2.1 引入路由 库
import VueRouter from 'vue-router'
// 2.2 用use 构造vue-router
Vue.use(VueRouter)
// 2.3 实例化一个，VueRouter的对象，以及配置
let router = new VueRouter({
  // 模式
  mode: 'history',
  // map
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})


new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
