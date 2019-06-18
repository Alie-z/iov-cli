<template>
  <div>
    <van-cell
        v-for="(list,index) in list"
        :key="index"
        :title="list.name"
        :label="list.label"/>
    <van-button @click='_handleSet(0)'>普通改变data数据</van-button>
    <van-button type="primary" @click='_handleSet(1)'>set改变data数据</van-button>
  </div>
</template>

<script>
  export default {
    name: "vue_nextTick",
    data() {
      return {
        list: [
          {
            name: "Vue.extend",
            path: 'message',
            label: 'Vue.extend()构造出一个Vue子类实例，调用$mount()方法生成需要的dom,再拿到对应的$el,实现对应的业务逻辑',
          },
          {
            name: "Vue.nextTick",
            path: 'demo',
            label: '在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。',
          },
          {
            name: "Vue.set",
            path: 'demo',
            label: '向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性',
          },]
      }
    },
    updated() {
      console.log('数据更新', this.list[2]);
    },
    methods: {
      _handleSet(type) {
        if (type == 0) {
          this.list[2] = {
            name: "Vue.delete",
            path: '',
            label: '',
          }
           this.$toast.fail('视图未更新')
        } else if (type == 1) {
          this.$set(this.list, '3', {
            name: "Vue.delete",
            path: '',
            label: '',
          })
        }
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
