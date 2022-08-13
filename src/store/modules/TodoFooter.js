export default {
  namespaced: true,
  state: {
    // 0 全部 1未完成 2 已完成
    condition:0 
  },
  mutations: {
    changeNum(state, num) {
      state.condition = num
     }
  },
  actions: {}
}