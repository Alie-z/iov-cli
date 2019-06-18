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
        label: '',
      },
      {
        name: "Vue.observable",
        path: '',
        label: '',
      },
      {
        name: "Vue.version",
        path: '',
        label: '',
      },
    ]
  },
  {
    title: "选项/数据",
    list: {}
  },
  {
    title: "选项/DOM",
    list: {}
  },
  {
    title: "选项/生命周期钩子",
    list: {}
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
