<template>
  <div>
    <h4>之前，创建一个响应对象，必须在一个Vue实例中配置。现在我们可以在Vue实例外部，通过使用Vue.observable(data)创建，如下：</h4>
    <van-button plain type="primary" @click="state.counter++">add</van-button>
    <van-field v-model="state.counter"/>
  </div>
</template>

<script>
  import Vue from 'vue'

  const state = Vue.observable({
    counter: 0,
  });
  export default {
    data() {
      return {
        state
      }
    },
    updated() {
    },
    methods: {}
  }
</script>

