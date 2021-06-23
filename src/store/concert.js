import { getConcert,getConcerts,createConсerts,editConсert,deleteConсert } from '@/services/concerts.service'
import { editCalendar } from '@/services/calendars.service'

const state = () => ({
  concert: {},
  concerts: [],
  concertError: null
})

const mutations = {
  setConcert(state, concert) {
    state.concert = concert
  },
  setConcerts(state, concerts) {
    state.concerts = concerts
  },
  setProductError(state, error) {
    state.concertError = error
  },
}

const actions = {
  async fetchConcert({ commit }, id) {
    try {
      const concert = await getConcert(id)
      commit('setConcert', concert)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async fetchConcerts({ commit }) {
    try {
      const concerts = await getConcerts()
      commit('setConcerts', concerts)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async createConсert({ commit }, body) {
    try {
      let res = await createConсerts(body)
      await commit('setConcert', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async editConсert({ commit }, {body,id}) {
    try {
      let res = await editConсert({body,id})
      commit('setConсert', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async deleteConсert({ commit }, {id, idCal, body}) {
    try {
      await deleteConсert(id)
      await editCalendar({body:body,id: idCal})
    } catch (error) {
      commit('setProductError', error)
    }
  },

}

const getters = {
  concert: ({ concert }) => concert,
  concerts: ({ concerts }) => concerts,
  concertError: ({ concertError }) => concertError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
