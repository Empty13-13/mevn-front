
const state = () => ({
  data: {},
  datas: [],
  dataError: null
})

const mutations = {
  setData(state, data) {
    state.data = data
  },
  setDataError(state, error) {
    state.dataError = error
  },
}

const actions = {
  async fetchData({ commit }, data) {
    try {
      commit('setData', data)
    } catch (error) {
      commit('setDataError', error)
    }
  },
}

const getters = {
  data: ({ data }) => data,
  datas: ({ datas }) => datas,
  dataError: ({ dataError }) => dataError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
