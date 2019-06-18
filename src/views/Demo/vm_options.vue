<template>
  <div class='options'>
    <div>
      <h3>普通写法</h3>
      <div v-for="item in iconType" :key='item'>
        <van-icon v-if="item === 1" size='30px' name="close"/>
        <van-icon v-if="item === 2" size='30px' name="success"/>
        <van-icon v-if="item === 3" size='30px' name="location-o"/>
        <van-icon v-if="item === 0" size='30px' name="phone-o"/>
      </div>
    </div>
    <div>
      <h3>逼格写法</h3>
      <div
          class='iconBox'
          v-for="item in iconType"
          :key='item'
          v-html="$options.filters.$_filterIcon(item)"
      ></div>
    </div>
  </div>
</template>

<script>
  const iconStatus = {
    0: "<div class='icon'></div>",
    1: "<div class='icon icon-blue'></div>",
    2: "<div class='icon icon-red'></div>",
    3: "<div class='icon icon-aqua'></div>",
  }

  export default {
    data() {
      return {
        iconType: [0, 1, 2, 3]
      }
    },
    filters: {
      $_filterIcon: (value) => {
        console.log(value)
        return iconStatus[value] || "icon undefined"
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  .options {
    width: 100%;
    padding: 15px;

    .iconBox {
      display: flex;
      height: 50px;

      .icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: #000;
        border-radius: 50%;
      }

      .icon-aqua {
        background: aqua;
      }

      .icon-red {
        background: red;
      }

      .icon-blue {
        background: blue;
      }

    }

  }
</style>
