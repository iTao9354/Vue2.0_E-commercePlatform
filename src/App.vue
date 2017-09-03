<template>
  <div>
    <!-- 一、父子组件数据传递 -->
    <!-- <comp-a number-to-do = 78></comp-a> -->
    <!-- <input type="text" v-model="myVal">
    <comp-a :my-value="myVal"></comp-a> -->

    <!-- 二、父子组件通信之slot插槽 -->
    <!-- <comp-a :my-value="myVal">
      <p>123</p>
      <p slot="header">xxx header</p>
      <p slot="footer">yyy footer</p>
    </comp-a> -->

    <!-- 三、动态组件 -->
    <!-- <keep-alive>
      <p :is = "currentView"></p>
    </keep-alive> -->

    <!-- 四、过渡/动画 -->
    <!-- <button @click="show = !show">toggle</button>
    <div>       -->
      <!-- <transition name="fade">
        <p v-show="show">this is toggle show</p>
      </transition> -->
      <!-- <transition name="my-trans">
        <p v-show="show">this is toggle show</p>
      </transition>
    </div> -->

    <!-- 五、多元素过渡 -->
    <!-- <button @click="toggleCom">toggle</button>
    <transition name="fade" mode="out-in">
      <div :is="currentView"></div>
    </transition> -->

    <!-- <button @click="show = !show">toggle</button>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="0">I am show</p> -->
      <!-- <div v-else>I am not show</div> -->
      <!-- <p v-else key="1">not in show</p>
    </transition> -->

    <!-- 六、js动画过渡 -->
    <!-- <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false">
        <p class="animate-p" v-show="show">I am show</p>
    </transition>
    <br><br><br><br><br>
    <button @click="show = !show">toggle</button> -->

    <!-- 七、自定义指令 -->
    <!-- <p v-color="'red'">这是一个段落</p>
    <p v-custom="'40px'">第二段</p>
    <input type="text" v-focus> -->

    <!-- 八、路由、路由参数、路由嵌套 -->
    <!-- <router-view></router-view>
    <router-link :to="{'path': '/apple'}">to Apple</router-link>
    <router-link :to="{'path': '/banana/red'}">to Redbanana </router-link> -->

    <!-- 九、命名的路由视图 -->
    <!-- <router-view name="bananaA"></router-view>
    <router-view name="bananaB"></router-view> -->

    <!-- 十、使用过渡制作路由跳转动画 -->
    <!-- <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition> -->

    <!-- 十一、状态管理插件 vuex -->
    {{ totalPrice }}
    <apple></apple>
    <banana></banana>
  </div>
</template>

<script>
// 十一、状态管理插件
import Apple from './components/apple'
import Banana from './components/banana'
export default {
  components: {
    Apple, Banana
  },
  computed: {
    totalPrice () {
      // return this.$store.state.totalPrice
      return this.$store.getters.getTotal
    }
  }
}

// // 七、自定义指令
// export default {
//   directives: {
//     color (el, binding) {
//       el.style.color = binding.value
//     },
//     custom: {
//       bind (el, binding) {

//       },
//       inserted (el, binding) {
//         el.style.fontSize = binding.value
//       }
//     },
//     focus: {
//       inserted (el, binding) {
//         el.focus()
//       }
//     }
//   }
// }

// // 六、js动画过渡
// import $ from 'jquery'
// export default {
//   data () {
//     return {
//       show: true
//     }
//   },
//   methods: {
//     beforeEnter (el) {
//       $(el).css({
//         left: '-500px',
//         opacity: 1
//       })
//     },
//     enter (el, done) {
//       $(el).stop().animate({
//         left: 0,
//         opacity: 1
//       }, {
//         duration: 1500,
//         complete: done
//       })
//     },
//     leave (el, done) {
//       $(el).stop().animate({
//         left: '500px',
//         opacity: 0
//       }, {
//         duration: 1500,
//         complete: done
//       })
//     }
//   }
// }

// // 五、多元素过渡
// import comA from './components/a'
// import comB from './components/b'
// export default {
//   components: {comA, comB},
//   data () {
//     return {
//       currentView: 'com-b',
//       show: true
//     }
//   },
//   methods: {
//     toggleCom () {
//       if (this.currentView === 'com-a') {
//         this.currentView = 'com-b'
//       } else {
//         this.currentView = 'com-a'
//       }
//     }
//   }
// }

// // 四、过渡/动画
// export default {
//   data () {
//     return {
//       show: true
//     }
//   }
// }

// // 三、动态组件
// import comA from './components/a'
// export default {
//   components: {comA},
//   data () {
//     return {
//       currentView: 'com-a'
//     }
//   }
// }

// // 二、父子组件通信之slot插槽
// import compA from './components/a'
// export default {
//   components: {
//     compA
//   },
//   data () {
//     return {
//       myVal: ''
//     }
//   }
// }

// // 一、父子组件数据传递
// import compA from './components/a'
// export default {
//   components: {
//     compA
//   },
//   data () {
//     return {
//       myVal: ''
//     }
//   }
// }

</script>

<style>
/* 六、js动画过渡 */
.animate-p {
  position: absolute;
  left: 0;
  top: 0;
}

/* 四、过渡/动画 */
/* .fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.my-trans-enter-active,
.my-trans-leave-active {
  transition: all 1s ease-out;
}
.my-trans-enter {
  transform: translateY(-500px);
  opacity: 0;
}
.my-trans-leave-active {
  transform: translateY(500px);
  opacity: 0;
} */
</style>
