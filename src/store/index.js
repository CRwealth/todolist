// 1. 安装vuex
// 2. 引入vuex
// 3. 注册vuex
// 4. 实例化 vuex 对象
// 5. 根实例配置 store 选项指向 store 实例对象

import Vue from "vue";
import Vuex from "vuex";

import TodoHeader from "./modules/TodoHeader"
import TodoMain from "./modules/TodoMain"
import TodoFooter from "./modules/TodoFooter"
// 仓库
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },
  getters: {
    list(state) {
      // 如果点击的是未完成1，就筛选出done为false的列表
      if (state.TodoFooter.condition === 1) {
        return state.TodoMain.listMain.filter(item => !item.done)
      }
      // 如果点击的是完成，就筛选出done为true的列表
      if (state.TodoFooter.condition === 2) {
        return state.TodoMain.listMain.filter(item => item.done)
      }
      // 如果是全部那就直接返回 todolist 列表
      return state.TodoMain.listMain
    },
    // 剩余数量
    sum(state,getter) {
       return getter.list.length
    },
    // 单选影响全选
    checkAll(state, getter) { 
      return getter.list.every(item => item.done === true)
    }
  },
  plugins: [createPersistedState({
    key: "myToDoList",
    paths: ["TodoMain"],
    reducer(state) { // 可以指定缓存 具体到摸一个字段
        return {
          // 只储存state中的token
          TodoMain: {
            listMain: state.TodoMain.listMain,
          }
        };
      },
  })]
});
