export const state = () => ({
  isMenuActive: false,
  isModalActive: false,
  skill: {
    name: "",
    stars: 0,
    color: "",
    period: ""
  },
  work: {
    name: "",
    url: "",
    technology: "",
    thumbnail: "",
    teg: "",
    period: "",
    detail: ""
  }
})

export const mutations = {
  changeSkillDetail(state, payload) {
    state.skill = payload
  },
  changeWorkDetail(state, payload) {
    state.work = payload
  },
  toggleMenu(state) {
    state.isMenuActive = !state.isMenuActive
  },
  resetMenu(state) {
    state.isMenuActive = false
  },
  toggleModal(state) {
    state.isModalActive = !state.isModalActive
  },
  resetModalContent(state) {
    state.isModalActive = false
  }
}
