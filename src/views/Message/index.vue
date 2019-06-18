<template>
  <div class="messageBox">
    <h2>该例子中使用到的技能点：</h2>
    <van-checkbox-group v-model="result">
      <van-checkbox
          v-for="(item) in list"
          :key="item"
          :name="item"
      >
        {{ item }}
      </van-checkbox>
    </van-checkbox-group>
    <div class="msgwrap">
      <van-button
          type="primary"
          @click="_handleMsg()">普通消息
      </van-button>
      <van-button
          type="info"
          @click="$message.success('信息按钮')">信息按钮
      </van-button>
      <van-button
          type="warning"
          @click="$message.warning('警告按钮')">警告按钮
      </van-button>
      <van-button
          type="danger"
          @click="$message.error('危险按钮')">危险按钮
      </van-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: ['Vue.extend', 'Vue.component', 'Vue.use'],
        result: []
      }
    },
    computed: {},
    created() {
      const {ex} = this.$route.query
      if(ex) this.result.push(ex)
    },
    methods: {
      _handleMsg() {
        this.$message.info('普通消息', function () {
          console.log('点击了普通消息按钮')
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .messageBox {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    .msgwrap {
      width: 100%;
    }
    .van-checkbox {
      padding: 10px 0;
    }
  }
</style>
