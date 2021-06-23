import { getRepetition,getRepetitions,createRepetitions,editRepetition,deleteRepetition } from '@/services/repetitions.service'
import { editCalendar } from '@/services/calendars.service'

const state = () => ({
  repetition: {},
  repetitions: [],
  repetitionError: null
})

const mutations = {
  setRepetition(state, repetition) {
    state.repetition = repetition
  },
  setRepetitions(state, repetitions) {
    state.repetitions = repetitions
  },
  setProductError(state, error) {
    state.repetitionError = error
  },
}

const actions = {
  async fetchRepetition({ commit }, id) {
    try {
      const repetition = await getRepetition(id)
      commit('setRepetition', repetition)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async fetchRepetitions({ commit }) {
    try {
      const repetitions = await getRepetitions()
      commit('setRepetitions', repetitions)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async createRepetition({ commit }, body) {
    try {
      let res = await createRepetitions(body)
      await commit('setRepetition', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async editRepetition({ commit }, {body,id}) {
    try {
      let res = await editRepetition({body,id})
      commit('setRepetition', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async deleteRepetition({ commit }, {id, idCal, body}) {
    try {
      await deleteRepetition(id)
      await editCalendar({body:body,id: idCal})
    } catch (error) {
      commit('setProductError', error)
    }
  },

}

const getters = {
  repetition: ({ repetition }) => repetition,
  repetitions: ({ repetitions }) => repetitions,
  repetitionError: ({ repetitionError }) => repetitionError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
