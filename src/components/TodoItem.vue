<template>
  <div>
    <li class='item'>
      <input type="checkbox" v-model='checked'>
      <slot name='item' :checked="checked"></slot>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        checked:false
      }
    }
    // props: {
    //   msg: Number,
    //   _handleClick:Function
    // },
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
