<template>
  <div>
    <div class='demoWidht' ref="myWidth" v-if="showMe">{{ message }} px</div>
    <van-button type="warning" @click='_handleGetW(0)'>点击获取div的宽度</van-button>
    <van-button type="primary" @click='_handleGetW(1)'>使用nextTick获取div的宽度</van-button>
    <van-button type="primary" @click='_handleGetW1'>nextTick Promise 使用</van-button>
  </div>
</template>

<script>
  export default {
    name: "vue_nextTick",
    data() {
      return {
        showMe: false,
        message: null
      }
    },
    methods: {
      _handleGetW(type) {
        this.showMe = true;
        type == 0 ?
          this.message = this.$refs.myWidth.offsetWidth
          //报错 TypeError: Cannot read property 'offsetWidth' of undefined
          :
          this.$nextTick(() => {
            //dom元素更新后执行，此时能拿到p元素的属性
            this.message = this.$refs.myWidth.offsetWidth;
          })
      },
      _handleGetW1() {
        this.showMe = true;
        this.$nextTick().then(() => {
          this.$toast('宽度为' + this.$refs.myWidth.offsetWidth)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .demoWidht {
    width: 100%;
    height: 50px;
    background-color: aqua;
  }
</style>
