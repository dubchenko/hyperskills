import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 1,
    userSkills: null,
    isApproved: false,
    isLoading: false,
    isSended: false,
  },
  plugins: [createPersistedState()],
  mutations: {
    setCurrentStep: (state, tabNumber) => {
      if (!state.isSended) {
        state.currentStep = tabNumber
      }
    },
    setUserSkills: (state, userSkills) => state.userSkills = userSkills,
    setApproved: state => state.isApproved = true,
    setLoading: (state, loadingStatus) => state.isLoading = loadingStatus,
    setSended: state => state.isSended = true,
  },
  getters: {
    currentStep: state => state.currentStep,
    userSkills: state => state.userSkills,
    isApproved: state => state.isApproved,
    isLoading: state => state.isLoading,
    isSended: state => state.isSended,
  }
})
