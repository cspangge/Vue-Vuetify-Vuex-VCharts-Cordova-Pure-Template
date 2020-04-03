import Vue from 'vue'
import Vuex from 'vuex'
import Sample from '@/store/modules/sample'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Sample,
  },
})
