// 实现state的数据
const state = {
  state_1: 'state_1'
}

// 实现getters
const getters = {
  getter_1 (state) {
    return state.state_1
  }
}

// 实现mutations
const mutations = {
  changeState1 (state, payload) {
    state.state_1 = payload.state
  }
}

// 实现actions
const actions = {
  changeState1 (context, payload) {
    context.commit('changeState1', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
