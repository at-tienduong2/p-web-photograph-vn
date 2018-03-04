import * as types from '../types'
import Vue from 'vue'

const state = {
  link: ''
}

const getters = {
  [types.LINK]: state => {
    return state.link
  }
}

const mutations = {
  [types.MUTATE_UPLOAD_IMG]: (state, payload) => {
  }
}

const actions = {
  [types.TEST]: ({commit}, payload) => {
    Vue.http.get('')
      .then(response => {
        console.log(response)
      })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
