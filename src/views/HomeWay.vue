<template>
  <div id="homeWay">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item v-for="(item,index) in vueWayList"
                         :title="item.title"
                         :key="index"
                         :name="index">
        <van-cell-group>
          <van-cell
              v-for="(list,index) in item.list"
              :icon="list.path.length> 0 ? 'eye':'checked'"
              :key="index"
              :title="list.name"
              @click="_handleEX(list.path,list.name)"
              :label="list.label"/>
        </van-cell-group>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
  import config from '../config'

  export default {
    data() {
      return {
        vueWayList: config,
        activeName: 0
      };
    },
    methods: {
      _handleEX(path, query) {
        console.log(query)
        this.$router.push({path, query: {ex: query}})
      }
    }
  };
</script>
<style lang='scss' scoped>
  #homeWay {
    .van-cell-group {
      .van-cell:nth-child(odd) {
        background-color: #ebedf0;
      }
    }
  }
</style>

