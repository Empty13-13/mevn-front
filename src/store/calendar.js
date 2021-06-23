import { getCalendar, getCalendars, getCalendarByTitle, createCalendar, editCalendar, deleteCalendar } from '@/services/calendars.service'

const state = () => ({
  calendar: {},
  calendars: [],
  calendarError: null
})

const mutations = {
  setCalendar(state, calendar) {
    state.calendar = calendar
  },
  setCalendars(state, calendars) {
    state.calendars = calendars
  },
  setProductError(state, error) {
    state.calendarError = error
  },
}

const actions = {
  async fetchCalendar({ commit }, id) {
    try {
      const calendar = await getCalendar(id)
      commit('setCalendar', calendar)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async fetchCalendars({ commit }) {
    try {
      const calendars = await getCalendars()
      commit('setCalendars', calendars)
    } catch (error) {
      console.log(error);
    }
  },
  async fetchCalendarByTitle({ commit }, title) {
    try {
      const calendar = await getCalendarByTitle(title.trim())
      commit('setCalendar', calendar)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async createCalendar({ commit }, body) {
    try {
      let res = await createCalendar(body)
      commit('setCalendar', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async editCalendar({ commit }, {body,id}) {
    try {
      let res = await editCalendar({body,id})
      commit('setCalendar', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async deleteCalendar({ commit }, id) {
    try {
      let res = await deleteCalendar(id)
      commit('setCalendar', res)
    } catch (error) {
      commit('setProductError', error)
    }
  },
}

const getters = {
  calendar: ({ calendar }) => calendar,
  calendars: ({ calendars }) => calendars,
  calendarError: ({ calendarError }) => calendarError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
