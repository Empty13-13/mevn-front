import { getSong,getSongs } from '@/services/songs.service'

const state = () => ({
  song: {},
  songs: [],
  songError: null
})

const mutations = {
  setSong(state, song) {
    state.song = song
  },
  setSongs(state, songs) {
    state.songs = songs
  },
  setProductError(state, error) {
    state.songError = error
  },
}

const actions = {
  async fetchSong({ commit }, id) {
    try {
      const song = await getSong(id)
      commit('setSong', song)
    } catch (error) {
      commit('setProductError', error)
    }
  },
  async fetchSongs({ commit }) {
    try {
      const songs = await getSongs()
      commit('setSongs', songs)
    } catch (error) {
      commit('setProductError', error)
    }
  },

}

const getters = {
  song: ({ song }) => song,
  songs: ({ songs }) => songs,
  songError: ({ songError }) => songError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
