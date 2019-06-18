import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0,
    user: 'aaa'
  },
  mutations: {
    subCount(state) {
      state.count += 1
      state.user = 'bbb'
    }
  },
  actions: {},
  plugins: [
    ...(debug ? [createLogger()] : []),
    createPersistedState({
      reducer(val) {
        return {
          count: val.count
        }
      }
    })]
})
