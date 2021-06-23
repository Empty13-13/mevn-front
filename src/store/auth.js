import { login,logout,refreshToken,user,verify } from '@/services/auth.service'

const state = () => ({
  id: "",
  accessToken: "",
  refreshToken: "",
  username: "",
  rulLevel:[],
  message: "",
  authError: null,
})

const mutations = {
  setAccesToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken
  },
  setUsername(state, username) {
    state.username = username
  },
  setRulLevel(state, rulLevel) {
    state.rulLevel = rulLevel
  },
  setMessage(state, message) {
    state.message = message
  },
  setId(state, id) {
    state.id = id
  },
    setAuthError(state, authError) {
    state.authError = authError
  },
}

function setCookie(name, value, options = {}) {
  try {
    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  } catch (error) {
  }

}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

const actions = {
  async login({ commit }, body) {
    try {
      const {accessToken,refreshToken,username, rulLevel,id} = await login(body)
      commit('setAccesToken', accessToken)
      commit('setRefreshToken', refreshToken)
      commit('setUsername', username)
      commit('setRulLevel', rulLevel)
      commit('setId', id)

      //!Работа с куки
      await setCookie('refreshToken',refreshToken,{secure: true, 'max-age': 360000})
      await setCookie('accessToken',accessToken,{secure: true, 'max-age': 3600})
    } catch(error) {
      commit('setError', error )
      throw error;
    }

  },
  async logout({commit}, refreshToken){
    try{
    const message = await logout({refreshToken})
    commit('setMessage', message)
    deleteCookie('refreshToken')
    deleteCookie('accessToken')
    } catch(error){
      commit('setError', error )
      throw error;
    }
  },
  async refreshToken({dispatch, commit},token){
    try {
      const {accessToken,id} = await refreshToken({refreshToken:token});
      commit('setAccesToken', accessToken)
      await setCookie('accessToken',accessToken,{secure: true, 'max-age': 3600})

      await dispatch('fetchUser',id)
    } catch (error) {
      commit('setError', error )
      throw error;
    }
  },
  async verify({dispatch, commit}, accessToken){
    try {
      const {id} = await verify({accessToken});
      await dispatch('fetchUser',id)
    } catch (error) {
      commit('setError', error )
      throw error;
    }
  },
  async fetchUser({commit}, id){
    try {
      const {username,rulLevel} = await user(id);
      commit('setUsername', username)
      commit('setRulLevel', rulLevel)
      commit('setId', id)
    } catch (error) {
      commit('setError', error )
      throw error;
    }
  }
}

const getters = {
  accessToken: ({ accessToken }) => accessToken,
  refreshToken: ({ refreshToken }) => refreshToken,
  id: ({ id }) => id,
  username: ({ username }) => username,
  rulLevel: ({ rulLevel }) => rulLevel,
  message: ({ message }) => message,
  authError: ({ authError }) => authError,
}

export default {
  mutations,
  getters,
  actions,
  state
}
