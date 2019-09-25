<template>
  <div>
    <h4>当前vue版本号为：</h4>
    <van-button type="primary" >{{version}}</van-button>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data() {
      return {
        version:Vue.version
      }
    },
    created() {
      console.log(Vue.version.split('.'))
    },
    methods: {}
  }
</script>

