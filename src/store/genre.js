import { getGenre, getGenres } from '@/services/genres.service'

const state = () => ({
  genre: {},
  genres: [],
  genreError: null
})

const mutations = {
  setGenre(state, genre) {
    state.genre = genre
  },
  setGenres(state, genres) {
    state.genres = genres
  },
  setProductError(state, error) {
    state.genreError = error
  },
}

const actions = {
  async fetchGenre({ commit }, id) {
    try {
      const genre = await getGenre(id)
      commit('setGenre', genre)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async fetchGenres({ commit }) {
    try {
      const genres = await getGenres()
      commit('setGenres', genres)
    } catch (error) {
      commit('setProductError', error)
    }
  },

}

const getters = {
  genre: ({ genre }) => genre,
  genres: ({ genres }) => genres,
  genreError: ({ genreError }) => genreError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
