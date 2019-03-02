import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

import applyForm from './modules/apply-form'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    applyForm,
  },
  plugins: [createPersistedState()],
  strict: true
})
