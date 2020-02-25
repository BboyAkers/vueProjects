import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  },
  mutations: {
    SET_USER_DATA (state, userData){
      state.user = userData
      localStorage.setItem('user',JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA(state) {
      // state.user = null
      localStorage.removeItem('user')
      //refreshes the current page and forces a refresh so headers don't survive refresh
      location.reload()
      // axios.defaults.headers.common['Authorization'] = null
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post('http://localhost:3000/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    login({ commit }, credentials) {
      return axios.post('http://localhost:3000/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  }
})
