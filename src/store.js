import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    userSkills: null,
  },
  plugins: [createPersistedState()],
  mutations: {
    setCurrentTab: (state, tabNumber) => state.currentTab = tabNumber,
    setUserSkills: (state, userSkills) => state.userSkills = userSkills,
  },
  getters: {
    currentTab: state => state.currentTab,
    userSkills: state => state.userSkills
  }
})
