// 默认js入口：

import Vue from 'vue'
// 1.引入根组件： import App from './App'
// 1.替换 根组件：
import Layout from './components/layout'

// 3 引入其他页面的 路由
import IndexPage from './pages/index'
import DetailPage from './pages/detail'

import CountPage from './pages/detail/count'
import ForecastPage from './pages/detail/forecast'
import AnalysisPage from './pages/detail/analysis'
import PublishPage from './pages/detail/publish'

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
    },
    {
      path: '/detail',
      component: DetailPage,
      // 重定向：不想让用户访问这个页面，当用户输入此页面时，定向到另一个页面
      redirect: '/detail/count',
      children: [
        {
          path: 'count',
          component: CountPage
        },
        {
          path: 'forecast',
          component: ForecastPage
        },
        {
          path: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'publish',
          component: PublishPage
        }
      ]
    }
  ]
})


new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
