// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// 注册
Vue.use(VueRouter)
// 实例化
let router = new VueRouter()

/* eslint-disable no-new */
new Vue({
  router,  // 正式使用
  el: '#app',
  render: h => h(App)
})
