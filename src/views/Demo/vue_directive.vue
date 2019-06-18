<template>
  <div>
    <div>全局自定义v-focus ：<input type="text" v-focus></div>
    <div>局部自定义v-focusCom ：<input type="text" v-focusCom ></div>
  </div>
</template>

<script>
  export default {
    name: "vue_nextTick",
    data() {
      return {}
    },
    directives: {
      focusCom: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
  .demoWidht {
    width: 100%;
    height: 50px;
    background-color: aqua;
  }
</style>
