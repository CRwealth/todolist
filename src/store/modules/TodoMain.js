
export default {
  namespaced: true,
  state: {
   listMain:[]
  },
  mutations: {
    // list往第一个添加
    addList(state,list){
      state.listMain.unshift(list);
    },
    // 修改选中状态
    changeTodo(state, index) { 
      state.listMain[index].done = !state.listMain[index].done
    },
     // 删除单个list列表，获得index截取
     removeTodo(state, index) {
      state.listMain.splice(index, 1)
    },
     // 清空已完成
     clearDone(state) {
      state.listMain = state.listMain.filter(item => !item.done)
     },
     // 全选影响单选按钮，将每个全选按钮的状态和全选的状态一样
     changeAll(state, isdone) {
      state.listMain.filter(item => item.done = isdone)
    },
  },
  actions: {
  
  },
};
