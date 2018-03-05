import { Commit } from 'vuex'

// 实现state接口
interface State {
  state_1: string
}

// 实现state的数据
const state: State = {
  state_1: 'state_1'
}

// 实现getters
const getters: {} = {
  getter_1 (state: State): string {
    return state.state_1
  }
}

// 实现mutations
const mutations: {} = {
  changeState1 (state: State, payload: {state: string}): void {
    state.state_1 = payload.state
  }
}

// 实现actions
const actions = {
  changeState1 (context: { commit: Commit, state: State }, payload: {state: string}): void {
    context.commit('changeState1', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
