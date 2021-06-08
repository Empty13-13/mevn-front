import { getPlace, getPlaces } from '@/services/places.service'

const state = () => ({
  place: {},
  places: [],
  placeError: null
})

const mutations = {
  setPlace(state, place) {
    state.place = place
  },
  setPlaces(state, places) {
    state.places = places
  },
  setProductError(state, error) {
    state.placeError = error
  },
}

const actions = {
  async fetchPlace({ commit }, id) {
    try {
      const place = await getPlace(id)
      commit('setPlace', place)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async fetchPlaces({ commit }) {
    try {
      const places = await getPlaces()
      commit('setPlaces', places)
    } catch (error) {
      commit('setProductError', error)
    }
  },

}

const getters = {
  place: ({ place }) => place,
  places: ({ places }) => places,
  placeError: ({ placeError }) => placeError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
