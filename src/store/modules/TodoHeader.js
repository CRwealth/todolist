
export default {
  namespaced: true,
  state: {
    inputValue:"",

  },
  mutations: {
    setInputValue(state,value){
      state.inputValue = value;
    },
  },

};
