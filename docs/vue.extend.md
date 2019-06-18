## Vue.extend（构造一个组件的语法器）
- 官网描述：使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。(听不太懂。。。)
- 个人描述：暂时还没有挂载到dom文档流中的一个组件说明，new 实例().$mount()，生成的实例里面有$el这个参数，记录了生成的dom啊，这个dom你想插哪里插哪里。

## Vue.component（全局注册组件）
- 官网描述：注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
- 个人描述：将通过 Vue.extend 生成的扩展实例构造器注册（命名）为一个组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用类似于 new myVue 这样的构造函数来生成组件实例，并挂载到自定义元素上

```$xslt
 // 注册全局组件
 var apple = Vue.extend({
    ....
 })
 Vue.component('tab',tab) 
 
 // 获取注册的组件 (始终返回构造器)
var MyComponent = Vue.component('my-component')
```

## Vue.use （安装 Vue.js 插件）
- 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
该方法需要在调用 new Vue() 之前被调用。
当 install 方法被同一个插件多次调用，插件将只会被安装一次。

-----

## 现在我们创建一个涉及到操作dom的全局提示组件为例

### 1./Message/message.vue
```vue
<template>
  <transition name="fade">
    <div class="message" :class="type" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message',
    props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
//['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss">
  // fade动画 <transition name="fade"> </transition>
  // 下面的样式可以自己改
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }

  .message {
    position: fixed;
    top: 40px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    min-width: 400px;
    padding: 10px 20px;
    color: #1A1A1A;
    background: #f5f5f5;
    font-size: 14px;
    line-height: 1.4;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);

    &.info {
      color: #07c160;
    }

    &.success {
      color: #1989fa;
    }

    &.error {
      color: #f44;
    }

    &.warning {
      color: #ff976a;
    }
  }

</style>
```

### 2./Message/message.js
```js
import Message from './message.vue'

const MESSAGE = {
  duration: 3000, // 显示的时间 ms
  animateTime: 300, // 动画时间,表示这个组件切换show的动画时间
  install(Vue) {  //使用install方法，Vue 作为参数传入，使vue.use能注册该方法
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    //注册一个全局组件Message
    Vue.component('Message', Message)

    function msg(type, text, callBack) {
      let msg
      let duration = MESSAGE.duration
      if (typeof text === 'string') {
        msg = text
      } else if (text instanceof Object) {
        msg = text.text || ''
        if (text.duration) {
          duration = text.duration
        }
      }
      let VueMessage = Vue.extend({
      //这里用到render函数，没有用template选项，个人选择，都可以用
        render(h) {
          let props = {
            type,
            text: msg,
            show: this.show
          }
          return h('message', {props})
        },
        data() {
          return {
            show: false
          }
        }
      })
      let newMessage = new VueMessage()
      let vm = newMessage.$mount() //生成$el实例 可以任意插入到dom中
      let el = vm.$el
      document.body.appendChild(el) // 把生成的提示的dom插入body中
      vm.show = true
      let t1 = setTimeout(() => {
        clearTimeout(t1)
        vm.show = false  //隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从body中移除dom
        let t2 = setTimeout(() => {
          clearTimeout(t2)
          document.body.removeChild(el) //从body中移除dom
          newMessage.$destroy()
          vm = null // 设置为null，好让js垃圾回收算法回收，释放内存

          callBack && (typeof callBack === 'function') && callBack()
      // 如果有回调函数就执行，没有就不执行，用&&操作符，
      // 只有&&左边 的代码为true才执行&&右边的代码，避免用面条代码：
      // if(true){
      //   ...
      //   if(true){
      //   ...
      //   }
      // }
        }, MESSAGE.animateTime)
      }, duration)
    }

// 挂载到vue原型上，暴露四个方法
    Vue.prototype.$message = {
      info(text, callBack) {
        if (!text) return
        msg('info', text, callBack)
      },
      success(text, callBack) {
        if (!text) return
        msg('success', text, callBack)
      },
      error(text, callBack) {
        if (!text) return
        msg('error', text, callBack)
      },
      warning(text, callBack) {
        if (!text) return
        msg('warning', text, callBack)
      }
    }
  }
}
export default MESSAGE

```

### 3. 在在main.js中引入message.js,以插件形式安装

```js
import vMessage from './views/Message/message'
Vue.use(vMessage)
```

### 4. 组件中使用
```vue
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
<style lang="scss">
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

```
