<template>
  <div>
    {{ msg }}
    <!-- <router-view></router-view> -->

    <!-- 十一、状态管理插件vuex -->
    <br>
    <button @click="addOne">add 12</button>
    <button @click="minusOne">minus 12</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello bananannannanan',

      // 十一、状态管理插件vuex
      price: 12
    }
  },
  methods: {
    addOne () {
      this.$store.commit('increment', this.price)
    },
    minusOne () {
      this.$store.commit('decrement', this.price)
    }
  }
}
</script>

