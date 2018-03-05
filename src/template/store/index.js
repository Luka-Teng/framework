import Vue from 'vue'
import Vuex from 'vuex'

// 手动引入各个模块
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test
  }
})
