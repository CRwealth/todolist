import Vue from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/index.css'
import store from "@/store";

Vue.config.productionTip = false

const vm = new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
console.log(vm);