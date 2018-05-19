import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      isMenuActive: false
    },
    mutations: {
      toggleMenu(state) {
        state.isMenuActive = !state.isMenuActive
      },
      resetMenu(state) {
        state.isMenuActive = false
      }
    }
  })

export default store

// export const state = () => ({
//   isMenuActive: false
// })

// export const mutations = () => ({
//   toggleMenu(state) {
//     state.isMenuActive = !state.isMenuActive
//   },
//   resetMenu(state) {
//     state.isMenuActive = false
//   }
// })

// export const actions = () => ({
//   toggleMenu ({commit}) {
//     commit('toggleMenu')
//   },
//   resetMenu({commit}) {
//     commit('resetMenu')
//   }
// })
