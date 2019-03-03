import * as types from '../types'

const state = {
  currentStep: 1,
  form: {
    skills: {},
    biography: '',
  },
  isApproved: false,
  isLoading: false,
  isSended: false,
  isError: false,
}

const getters = {
  currentStep: state => state.currentStep,
  skills: state => state.form.skills,
  biography: state => state.form.biography,
  isApproved: state => state.isApproved,
  isLoading: state => state.isLoading,
  isSended: state => state.isSended,
  isError: state => state.isError,
}

const actions = {
  setCurrentStep({ commit, state }, step) {
    if (state.isSended || state.currentStep == step)
      return

    if (state.isApproved)
      commit(types.APPROVED, false)

    commit(types.SET_STEP, { step })
  },
  setSkills({ commit }, skills) {
    commit(types.SET_SKILLS, { skills })
  },
  setBiography({ commit }, biography) {
    commit(types.SET_BIOGRAPHY, { biography })
  },
  setApproved({ commit }, status) {
    commit(types.APPROVED, { status })
  },
  setLoading({ commit }, loadingStatus) {
    commit(types.LOADING, { loadingStatus })
  },
  setSended({ commit }) {
    commit(types.SENDED)
  },
  setError({ commit }, error) {
    commit(types.ERROR, { error })
  }
}

const mutations = {
  [types.SET_STEP] (state, { step }) {
    state.currentStep = step
  },
  [types.SET_SKILLS] (state, { skills }) {
    state.form.skills = skills
  },
  [types.SET_BIOGRAPHY] (state, { biography }) {
    state.form.biography = biography
  },
  [types.APPROVED] (state, { status }) {
    state.isApproved = status
  },
  [types.LOADING] (state, { loadingStatus }) {
    state.isLoading = loadingStatus
  },
  [types.SENDED] (state) {
    state.isSended = true
  },
  [types.ERROR] (state, { error }) {
    state.isError = error
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
