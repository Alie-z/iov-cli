
const myPlugin = {
  install(Vue) {
    Vue.mixin({
      filters: {
        $_discount: function (value) {
          return value > 26 ? value : '免费';
        },}
    })
  }
}

export default myPlugin
