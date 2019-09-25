const config = [
  {
    title: "全局API",
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
      },
      {
        name: "Vue.delete",
        path: 'demo',
        label: '删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。',
      },
      {
        name: "Vue.directive",
        path: 'demo',
        label: '注册或获取全局指令',
      },
      {
        name: "Vue.filter",
        path: 'demo',
        label: '注册或获取全局过滤器。',
      },
      {
        name: "Vue.component",
        path: 'message',
        label: '注册或获取全局组件。注册还会自动使用给定的id设置组件的名称',
      },
      {
        name: "Vue.use",
        path: 'message',
        label: '安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。',
      },
      {
        name: "Vue.mixin",
        path: 'demo',
        label: '全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。',
      },
      {
        name: "Vue.compile",
        path: '',
        label: '在 render 函数中编译模板字符串。只在独立构建时有效',
      },
      {
        name: "Vue.observable",
        path: 'demo',
        label: '让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景',
      },
      {
        name: "Vue.version",
        path: 'demo',
        label: '提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。',
      },
    ]
  },
  {
    title: "选项/数据",
    list: [
      {
        name: "data",
        path: '',
        label: 'Vue 实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化。对象必须是纯粹的对象 (含有零个或多个的 key/value 对)：浏览器 API 创建的原生对象，原型上的属性会被忽略。大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象。\n' +
          '\n' +
          '一旦观察过，不需要再次在数据对象上添加响应式属性。因此推荐在创建实例之前，就声明所有的根级响应式属性。',
      },
      {
        name: "props",
        path: '',
        label: 'props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。',
      },
      {
        name: "propsData",
        path: '',
        label: '创建实例时传递 props。主要作用是方便测试。',
      },
      {
        name: "computed",
        path: '',
        label: '计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。（注意如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。）',
      },
      {
        name: "methods ",
        path: '',
        label: 'methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。(不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.xxx 将是 undefined。)',
      },
      {
        name: "watch",
        path: '',
        label: '一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。(不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。)',
      },
    ]
  },
  {
    title: "选项/DOM",
    list: [
      {
        name: "el",
        path: '',
        label: '提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。------在实例挂载之后，元素可以用 vm.$el 访问。--------如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 vm.$mount() 手动开启编译。',
      },
      {
        name: "template",
        path: '',
        label: '一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。如果值以 # 开始，则它将被用作选择符，并使用匹配元素的 innerHTML 作为模板。常用的技巧是用 < script type="x-template" > 包含模板。',
      },
      {
        name: "renderError",
        path: '',
        label: '当 render 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 renderError。这个功能配合 hot-reload 非常实用。',
      },
      {
        name: "render",
        path: '',
        label: '字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。如果组件是一个函数组件，渲染函数还会接收一个额外的 context 参数，为没有实例的函数组件提供上下文信息。',
      },
    ]
  },
  {
    title: "选项/生命周期钩子",
    list: [
      {
        name: "beforeCreate",
        path: '',
        label: ''
      },
      {
        name: "created",
        path: '',
        label: ''
      },
      {
        name: "beforeMount",
        path: '',
        label: ''
      },
      {
        name: "mounted",
        path: '',
        label: ''
      },
      {
        name: "beforeUpdate",
        path: '',
        label: ''
      },
      {
        name: "updated",
        path: '',
        label: ''
      },
      {
        name: "activated",
        path: '',
        label: ''
      },
      {
        name: "deactivated",
        path: '',
        label: ''
      },
      {
        name: "beforeDestroy",
        path: '',
        label: ''
      },
      {
        name: "destroyed",
        path: '',
        label: ''
      },
      {
        name: "errorCaptured",
        path: '',
        label: ''
      },
    ]
  },
  {
    title: "选项/资源",
    list: {}
  },
  {
    title: "选项/组合",
    list: {}
  },
  {
    title: "实例属性",
    list: [{
      name: 'vm.$data',
      path: '',
      label: '',
    },
      {
        name: 'vm.$props',
        path: '',
        label: '',
      },
      {
        name: 'vm.$el',
        path: '',
        label: '',
      },
      {
        name: 'Vm.$options',
        path: 'demo',
        label: '用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处',
      },
      {
        name: 'vm.$parent',
        path: '',
        label: '',
      },
      {
        name: 'vm.$root',
        path: '',
        label: '',
      },
      {
        name: 'vm.$children',
        path: '',
        label: '',
      },
      {
        name: 'vm.$slots',
        path: '',
        label: '',
      },
      {
        name: 'vm.$scopedSlots',
        path: '',
        label: '',
      },
      {
        name: 'vm.$refs',
        path: '',
        label: '',
      },
      {
        name: 'vm.$isServer',
        path: '',
        label: '',
      },
      {
        name: 'vm.$attrs',
        path: '',
        label: '',
      },
      {
        name: 'vm.$listeners',
        path: '',
        label: '',
      }
    ],
  },
  {
    title: "实例方法/数据",
    list: {}
  },
  {
    title: "实例方法/事件",
    list: {}
  },
  {
    title: "实例方法/生命周期",
    list: {}
  },
  {
    title: "指令",
    list: {}
  },
  {
    title: "特殊特性",
    list: {},
    "特殊特性": {}
  },
  {
    title: "内置的组件",
    list: {}
  }
]


export default config
