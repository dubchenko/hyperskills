import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 1,
    applyForm: {
      skills: null,
      biography: '',
    },
    isApproved: false,
    isLoading: false,
    isSended: false,
    isError: false,
  },
  plugins: [createPersistedState()],
  mutations: {
    setCurrentStep: (state, stepNumber) => {
      if (!state.isApproved) {
        state.currentStep = stepNumber
      }
    },
    setSkills: (state, skills) => state.applyForm.skills = skills,
    setBiography: (state, biography) => state.applyForm.biography = biography,
    setApproved: state => state.isApproved = true,
    setLoading: (state, loadingStatus) => state.isLoading = loadingStatus,
    setSended: state => state.isSended = true,
    setError: (state, error) => state.isError = error
  },
  getters: {
    currentStep: state => state.currentStep,
    skills: state => state.applyForm.skills,
    biography: state => state.applyForm.biography,
    isApproved: state => state.isApproved,
    isLoading: state => state.isLoading,
    isSended: state => state.isSended,
    isError: state => state.isError,
  }
})
