import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './common/flexible'
// import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
import './common/vant-ui'
import './common/vconsole'


import vMessage from './views/Message/message'
Vue.use(vMessage)

import myPlugin from './views/Demo/vue_mixin'
Vue.use(myPlugin)

// Vue.prototype.Cookies = Cookies
// Vue.use(VueI18n)
Vue.config.productionTip = false


// const i18n = new VueI18n({
//   locale: 'cn', // 语言标识
//   messages: {
//     'cn': require('./common/lang/zh'),
//     'en': require('./common/lang/en'),
//     'vn': require('./common/lang/vn'),
//     'id': require('./common/lang/id')
//   }
// })

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: from.name == 'detail' ? from.fullPath : to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
