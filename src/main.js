// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import RedBanana from './components/redbanana'
// 注册
Vue.use(VueRouter)
Vue.use(Vuex)
// 实例化
// 实例化状态管理插件vuex
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters: {
    getTotal (state) {
      return state.totalPrice
    }
  },
  mutations: {
    increment (state, price) {
      state.totalPrice += price
    },
    decrement (state, price) {
      state.totalPrice -= price
    }
  },
  // 另一种方式--异步
  actions: {
    increase (context, price) {
      context.commit('increment', price)
    },
    decrease (context, price) {
      context.commit('decrement', price)
    }
  }

})

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/banana'
    },
    {
      path: '/apple/:color/detail/:type',
      component: Apple
    },
    // {
    //   path: '/banana',
    //   component: Banana,
    //   children: [
    //     {
    //       path: 'red',
    //       component: RedBanana
    //     }
    //   ]
    // }
    {
      path: '/banana',
      components: {
        bananaA: Banana,
        bananaB: RedBanana
      }
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,  // 正式使用
  store,
  el: '#app',
  render: h => h(App)
})
