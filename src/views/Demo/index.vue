<template>
  <div class='demoBox'>
    <div class="demoItem">
      <div class="orderNum">
        <van-radio checked-color="#07c160">{{demoResult}}</van-radio>
      </div>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Vue_nextTick from './vue_nextTick'
  import Vue_set from './vue_set.vue'
  import Vue_delete from './vue_delete.vue'
  import Vue_directive from './vue_directive.vue'
  import Vue_filter from './vue_filter.vue'
  import Vue_mixin from './vue_filter.vue'
  import Vm_options from './vm_options.vue'
  import Vue_observable from './vue_observable.vue'
  import Vue_version  from './vue_version .vue'

  export default {
    components: {
      Vue_set,
      Vue_nextTick,
      Vue_delete,
      Vue_directive,
      Vue_filter,
      Vue_mixin,
      Vm_options,
      Vue_observable,
      Vue_version ,
    },
    data() {
      return {
        demoResult: null,
        currentComponent: null
      }
    },
    created() {
      const {ex} = this.$route.query
      if (ex) {
        this.demoResult = ex
        this.currentComponent = ex.replace('.', '_').replace('$','')
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .demoBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;

    .demoItem {
      width: 343px;
      background: #fff;
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .orderNum {
      height: 41px;
      border-bottom: 1px solid #F5F5F5;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      font-size: 12px;
    }
  }
</style>
