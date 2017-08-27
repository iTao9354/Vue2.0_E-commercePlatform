<template>
  <div>
    <!-- <p v-text="hello"></p>
    <p v-html="hello"></p>
    {{ hello }}
    {{ status ? 'success' : 'fail' }} -->

    <!-- 二、列表循环之数组形式 -->
    <!-- <ul> -->
      <!-- <li v-for="item in lists">{{item.name}}的价格是{{item.price}}元</li> -->
      <!-- <li v-for="item in lists" v-text="item.name + '---' + item.price"></li> -->
      <!-- <li v-for="(item, index) in lists" :class="{odd: index % 2}">{{ index }}-{{ item.name }}的价格是{{ item.price }}元</li> -->
    <!-- </ul> -->

    <!-- 三、列表循环之对象形式 -->
    <!-- <ul> --> 
      <!-- <li v-for="value in listObj">{{ value }}</li> -->
      <!-- <li v-for="(value, key) in listObj">{{ key + value}}</li> -->
    <!-- </ul> -->

    <!-- 四、子组件之间的相互引用及列表循环 -->
    <!-- <componentA v-for="(value, key) in listObj" :key="key"></componentA> -->

    <!-- 五、列表数据的同步更新方法methods -->
    <!-- <ul>
      <li v-for="item in list">{{ item.name }} -- {{item.price}}</li>
    </ul>
    <button @click="addItem">addItem</button> -->

    <!-- 六、用v-bind指令动态绑定vue标签属性 -->
    <!-- <a :href="link" :title="hello" class="link-href" :class="classStr">to baidu</a> -->
    <!-- <componentA :dataA = "dataA"></componentA> -->
    <!-- <a class="link-href" :class="classObj">点我啊</a>   -->
    <!-- <a class="link-href" :class="classArr">再点我啊</a> -->
    <!-- <a class="link-href" :class="[classA, {'red-font': hasError}]">第三次点击</a> -->
    <!-- <a :style="styleCss">测试内联样式</a> -->

    <!-- 七、条件渲染 -->
    <!-- <p v-if="isPartA">partA</p>
    <p v-else>no data</p> -->
    <!-- <p v-show="!isPartA">partB</p> -->
    <!-- <button @click="toggle">toggle</button> -->

    <!-- 八、自定义事件绑定 -->
    <!-- <comA @my-event="onComaMyEvent"></comA>  -->

    <!-- 九、表单事件绑定之双向数据绑定 -->
    <!-- <input type="text" v-model="myValue">
    <p>{{ myValue }}</p>

    <br><br>
    <div>
      <input v-model="myBox" type="checkbox" value="apple">
      <input v-model="myBox" type="checkbox" value="banana">
      <input v-model="myBox" type="checkbox" value="pineapple">
      <p>{{ myBox }}</p>
    </div>

    <br><br>
    <div>
      <input v-model="myRadio" type="radio" value="apple">
      <input v-model="myRadio" type="radio" value="banana">
      <input v-model="myRadio" type="radio" value="pineapple">
      <p>{{ myRadio }}</p>
    </div> -->

    <!-- <br><br>
    <div>
     <select name="" id="" v-model="selection"> -->
       <!-- <option value="apple">apple</option>
       <option value="banana">banana</option>
       <option value="pineapple">pineapple</option> -->
       <!-- <option v-for="item in selectObj" :value="item.id">{{ item.text}}</option>
     </select>
      <p>{{ selection }}</p>
    </div> -->
    <!-- <input type="text" v-model.number="myValue"> -->
    <!-- <input type="text" v-model.trim="myValue">    
    <p>{{ myValue }}</p> -->

    <!-- 十、计算属性computed -->
    <!-- <input type="text" v-model="myValue">
    <p>{{ myValueWithoutNum }}</p> -->

    <!-- 十一、数据监听 -->
    <ul>
      <li v-for="item in myList">{{ item.text }}</li>
    </ul>
    <button @click="changeList">change</button>
  </div>
</template>

<script>
// 十一、数据监听
import Vue from 'vue'
export default {
  data () {
    return {
      myList: [
        {text: 'apple'},
        {text: 'banana'}
      ]
    }
  },
  methods: {
    changeList () {
      Vue.set(this.myList, 1, {
        text: 'pineapple'
      })
    },
    tellUser () {
      alert('will change！')
    }
  },
  watch: {
    myList () {
      this.tellUser()
    }
  }
}

// // 十、计算属性
// export default {
//   data () {
//     return {
//       myValue: ''
//     }
//   },
//   computed: {
//     myValueWithoutNum () {
//       return this.myValue.replace(/\d/g, '')
//     }
//   }
// }

// // 九、表单事件绑定
// export default {
//   data () {
//     return {
//       myValue: '',
//       myBox: [],
//       myRadio: '',
//       selection: null,
//       selectObj: [
//         {id: 0, text: 'apple'},
//         {id: 1, text: 'pineapple'},
//         {id: 2, text: 'banana'}
//       ]
//     }
//   }
// }

// // 八、自定义事件绑定
// import comA from './components/a'
// export default {
//   components: {comA},
//   data () {
//     return {
//     }
//   },
//   methods: {
//     onComaMyEvent (paramFromA) {
//       console.log('onComaMyEvent' + paramFromA)
//     }
//   }
// }

// // 七、条件渲染
// export default {
//   data () {
//     return {
//       isPartA: false
//     }
//   },
//   methods: {
//     toggle () {
//       this.isPartA = !this.isPartA
//     }
//   }
// }

// // 六、用v-bind指令动态绑定vue标签属性
// import componentA from './components/a'
// export default {
//   components: {componentA},
//   data () {
//     return {
//       hello: 'world',
//       link: 'http://www.baidu.com',
//       dataA: 112,
//       classStr: 'red-font',
//       classObj: {
//         'red-font': true,
//         'blue-font': false
//       },
//       classArr: ['red-font', 'blue-font'],
//       classA: 'blue-font',
//       hasError: true,
//       styleCss: {
//         color: 'red',
//         'font-size': '30px'
//       }
//     }
//   }
// }

// // 五、列表数据的同步更新方法methods
// import Vue from 'Vue'
// export default {
//   data () {
//     return {
//       list: [
//         {
//           name: 'apple',
//           price: 34
//         },
//         {
//           name: 'banana',
//           price: 56
//         }
//       ]
//     }
//   },
//   methods: {
//     addItem () {
//       // this.list.push({name: 'pineapple', price: 78})
//       // this.list[1] = {
//       //   name: 'pineapple',
//       //   price: 78
//       // }
//       Vue.set(this.list, 1, {
//         name: 'pineapple',
//         price: 78
//       })
//     }
//   }
// }

// export default {
//   data () {
//     return {
//       hello: '<span>world</span>',
//       status: true
//     }
//   }
// }

// 二、列表循环之数组形式
// export default {
//   data () {
//     return {
//       lists: [
//         {
//           name: 'apple',
//           price: 34
//         },
//         {
//           name: 'banana',
//           price: 56
//         }
//       ]
//     }
//   }
// }

// // 三、列表循环之对象形式
// export default {
//   data () {
//     return {
//       listObj: {
//         name: 'apple',
//         price: 34,
//         weight: '100g'
//       }
//     }
//   }
// }

// // 四、组件之间的相互引用
//   // 引入子组件
// import componentA from './components/a'
// export default {
//   components: {componentA},
//   data () {
//     return {
//       listObj: {
//         name: 'apple',
//         price: 34,
//         weight: '100g'
//       }
//     }
//   }
// }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
