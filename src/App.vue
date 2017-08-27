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

    <!-- 五、过流动画 js实现过渡 -->
    <!-- <button @click="toggleCom">toggle</button>
    <transition name="fade" mode="out-in">
      <div :is="currentView"></div>
    </transition> -->

    <button @click="show = !show">toggle</button>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="0">I am show</p>
      <!-- <div v-else>I am not show</div> -->
      <p v-else key="1">not in show</p>
    </transition>
  </div>
</template>

<script>
// 五、过流动画 js实现过渡
import comA from './components/a'
import comB from './components/b'
export default {
  components: {comA, comB},
  data () {
    return {
      currentView: 'com-b',
      show: true
    }
  },
  methods: {
    toggleCom () {
      if (this.currentView === 'com-a') {
        this.currentView = 'com-b'
      } else {
        this.currentView = 'com-a'
      }
    }
  }
}

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
/* 四、过渡/动画 */
.fade-enter,
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
}
</style>
