<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="count" :_handleClick='_handleClick'/>
    <div class="toList">
      <input type="text" v-model='info'>
      <button @click='addItem'>添加</button>
      <button @click='addItem1'>添加1</button>
      <ul>
        <TodoItem v-for="(item,index) in listData" :key='index'>
          <template v-slot:item="itemProps">
            <span
                :style="{
                fontSize:'20px',
                color:itemProps.checked ? 'black':'blue'
}"
            >{{item}}{{itemProps}}</span>
          </template>
        </TodoItem>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Debounce} from '../common/utils'
  import {mapState, mapMutations} from 'vuex'
  import HelloWorld from '@/components/HelloWorld.vue'
  import TodoItem from '@/components/TodoItem.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld,
      TodoItem
    },
    data() {
      return {
        msg: "Welcome to Your Vue.js Appaa",
        info: '',
        listData: [],
      }
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      ...mapMutations({
        _addCount: "subCount"
      }),
      _handleClick(params) {
        console.log(this.msg)
        console.log(params)
        this._addCount()
      },
      addItem: Debounce(function () {
        console.log(window, this)
        this.listData.push(this.info)
        this.info = ''
      }, 200),

      addItem1: Debounce(() => {
        console.log(window, this)
        // this.listData.push(this.info)
        // this.info = ''
      }, 200),
    }
  }
</script>
