// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

/* eslint-disable no-new */
// 一、注册全局组件
// Vue.component('my-header', {
//   template: '<p>this is my header</p>'
// })
// 根组件
// new Vue({
//   el: '#app',
//   data: {
//     word: 'hello world'
//   }
// })

// // 二、注册局部组件
// // 孙组件
// var myHeaderChild = {
//   template: '<p>this is my header child</p>'
// }
// // 子组件
// var myHeader = {
//   template: '<p><my-header-child></my-header-child>this is my header</p>',
//   components: {
//     'my-header-child': myHeaderChild
//   }
// }
// new Vue({
//   el: '#app',
//   data: {
//     word: 'hello world'
//   },
//   components: {
//     'my-header': myHeader
//   }
// })

// // 三、避免data引用赋值
// // 孙组件
// var myHeaderChild = {
//   template: '<p>this is my header child</p>'
// }
// // 子组件
// var myHeader = {
//   template: '<p><my-header-child></my-header-child>this is my header</p>',
//   components: {
//     'my-header-child': myHeaderChild
//   },
//   data () {
//     return {
//       f1: 0,
//       f2: 2
//     }
//   }
// }
// new Vue({
//   el: '#app',
//   data: {
//     word: 'hello world'
//   },
//   components: {
//     'my-header': myHeader
//   }
// })

// // 四、vue的属性和方法
// // 孙组件
// var myHeaderChild = {
//   template: '<p>this is my header child</p>'
// }
// // 子组件
// var myHeader = {
//   template: '<p><my-header-child></my-header-child>this is my header</p>',
//   components: {
//     'my-header-child': myHeaderChild
//   },
//   data () {
//     return {
//       f1: 0,
//       f2: 2
//     }
//   }
// }
// var root = new Vue({
//   el: '#app',
//   data: {
//     word: 'hello world'
//   },
//   components: {
//     'my-header': myHeader
//   }
// })
// // 属性&方法
// console.log(root.$data)
// root.$on('emit', function () {
//   alert(1)
// })

// // 五、vue的指令
// // 孙组件
// var myHeaderChild = {
//   template: '<p>this is my header child</p>'
// }
// // 子组件
// var myHeader = {
//   template: '<p v-html="" v-on:click="" v-on:keydown.enter=""><my-header-child></my-header-child>this is my header</p>',
//   components: {
//     'my-header-child': myHeaderChild
//   },
//   data () {
//     return {
//       f1: 0,
//       f2: 2
//     }
//   }
// }
// new Vue({
//   el: '#app',
//   data: {
//     word: 'hello world'
//   },
//   components: {
//     'my-header': myHeader
//   }
// })

// 六、vue的内置组件
// 孙组件
var myHeaderChild = {
  template: '<p>this is my header child</p>'
}
// 子组件
var myHeader = {
  template: '<p v-html="" v-on:click="" v-on:keydown.enter=""><component :is=""></component>this is my header</p> <keep-alive><router-view></router-view></keep-alive>',
  components: {
    'my-header-child': myHeaderChild
  },
  data () {
    return {
      f1: 0,
      f2: 2
    }
  }
}
new Vue({
  el: '#app',
  data: {
    word: 'hello world'
  },
  components: {
    'my-header': myHeader
  }
})
