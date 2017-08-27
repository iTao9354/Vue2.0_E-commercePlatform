<template>
  <div>
    {{ hello }}
    <!-- {{ numberToDo }} -->
    <!-- {{ myValue }}
    <slot></slot>
    <slot name="header">no header</slot>
    balabala
    <slot name="footer">no footer</slot> -->
  </div>
</template>

<script>
export default {
  // props: ['number-to-do'],
  // props: {
  //   // 'number-to-do': [Number, String]
  //   'my-value': [Number, String]
  // },
  data () {
    return {
      hello: 'I am a component A!'
    }
  }
}
</script>

<style>

</style>

