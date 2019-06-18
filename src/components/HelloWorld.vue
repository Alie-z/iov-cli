<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="box1" @click='_handleClick(msg)'></div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: Number,
      _handleClick:Function
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .box1 {
    width: 375px;
    height: 100px;
    background-color: cyan;
  }
</style>
