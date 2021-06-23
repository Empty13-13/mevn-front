const state = () => ({
  error: null,
  errorMsg: null,
})

const mutations = {
  setError(state, error) {
    state.error = error
    //commit('setErrorMsg',error.response.data.message)
  },
  setErrorMsg(state, errorMsg){
    state.errorMsg = errorMsg
  },
  clearError(state) {
    state.error = null
    state.errorMsg = null
  },
}

const actions = {
}

const getters = {
  error: ({ error }) => error,
}

export default {
  mutations,
  getters,
  actions,
  state
}
