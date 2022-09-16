import {createStore}from 'vuex'

export const store = createStore({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
})
export default store
