const state = () => ({
  selectedDay: {},
  selectedMonth: {},
  selectedYear: {},
  selectedDateError: {}
})

const mutations = {
  setSelectedDay(state, selectedDay) {
    state.selectedDay = selectedDay
  },
  setSelectedMonth(state, selectedMonth) {
    state.selectedMonth = selectedMonth
  },
  setSelectedYear(state, selectedYear) {
    state.selectedYear = selectedYear
  },
  setSelectedDateError(state, selectedDateError) {
    state.selectedDateError = selectedDateError
  },
}

const actions = {
  async fetchSelectedDate({ commit }, {day,month,year}) {
    try {
      commit('setSelectedDay', day)
      commit('setSelectedMonth', month)
      commit('setSelectedYear', year)
    } catch (error) {
      commit('setSelectedDateError', error)
    }
  },
}

const getters = {
  selectedDay: ({ selectedDay }) => selectedDay,
  selectedMonth: ({ selectedMonth }) => selectedMonth,
  selectedYear: ({ selectedYear }) => selectedYear,
  selectedDateError: ({ selectedDateError }) => selectedDateError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
