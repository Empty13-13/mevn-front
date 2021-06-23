import { getEventDay,getEventDays, createEventDays, editEventDay, deleteEventDay } from '@/services/eventDays.service'
import { editCalendar } from '@/services/calendars.service'

const state = () => ({
  eventDay: {},
  eventDays: [],
  eventDayError: null
})

const mutations = {
  setEventDay(state, eventDay) {
    state.eventDay = eventDay
  },
  setEventDays(state, eventDays) {
    state.eventDays = eventDays
  },
  setProductError(state, error) {
    state.eventDayError = error
  },
}

const actions = {
  async fetchEventDay({ commit }, id) {
    try {
      const eventDay = await getEventDay(id)
      commit('setEventDay', eventDay)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async fetchEventDays({ commit }) {
    try {
      const eventDays = await getEventDays()
      commit('setEventDays', eventDays)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async createEventDay({ commit }, body) {
    try {
      let res = await createEventDays(body)
      await commit('setEventDay', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async editEventDay({ commit }, {body,id}) {
    try {
      let res = await editEventDay({body,id})
      commit('setEventDay', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async deleteEventDay({ commit }, {id, idCal, body}) {
    try {
      await deleteEventDay(id)
      await editCalendar({body:body,id: idCal})
    } catch (error) {
      commit('setProductError', error)
    }
  },

}

const getters = {
  eventDay: ({ eventDay }) => eventDay,
  eventDays: ({ eventDays }) => eventDays,
  eventDayError: ({ eventDayError }) => eventDayError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
