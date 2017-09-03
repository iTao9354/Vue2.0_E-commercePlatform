<template>
  <div>
    {{ msg }}
    <p>{{ $route.params.color }}</p>
    <!-- <button @click="getParam()">get param</button> -->

    <!-- 十一、状态管理插件vuex -->
    <button @click="addOne">add 5</button>
    <button @click="minusOne">minus 5</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello apple',

      // 十一、状态管理插件vuex
      price: 5
    }
  },
  methods: {
    // getParam () {
    //   console.log(this.$route.params)
    // }

    // 十一、状态管理插件vuex
    addOne () {
      // this.$store.commit('increment', this.price)
      this.$store.dispatch('increase', this.price)
    },
    minusOne () {
      // this.$store.commit('decrement', this.price)
      this.$store.dispatch('decrease', this.price)
    }
  }
}
</script>

<style>

</style>


