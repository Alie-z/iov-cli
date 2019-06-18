<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  };
</script>
<style>
  @import './common/global.css';
</style>
