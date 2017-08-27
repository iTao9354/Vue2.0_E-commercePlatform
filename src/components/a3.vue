<template>
  <div>
    {{ hello }}
    <button @click="emitMyEvent">emit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: 'I am a component A!'
    }
  },
  methods: {
    emitMyEvent () {
      this.$emit('my-event', this.hello)
    }
  }
}
</script>

<style>

</style>

