<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="checkAll" @change="checkDone" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="value"
      @keyup.enter="keyupFn"
    />
  </header>
</template>

<script>
import {mapMutations,mapGetters} from "vuex"
export default {
  data() {
    return {
      value:this.$store.state.TodoHeader.inputValue
    }
  },
  methods: {
    // 第一种
    // ...mapMutations("TodoHeader/",["setInputValue"]),

    // 第二种
    ...mapMutations(['TodoHeader/setInputValue']),

    ...mapMutations("TodoMain",["addList","changeAll","setId"]),
    keyupFn(){
      if(!this.value.trim()){
        this.value = ''
        return alert('请输入内容')
      }
      // 第一种
      // this.setInputValue(this.value)
      this.addList({
        name:this.value,
        done:false
      })
      this.value = ''
    },
     // 全选
    checkDone() {
      // 获得全选按钮的状态调用changeAll
      const all = this.checkAll
      // console.log(!all);
     this.changeAll(!all)
    }
  },
  computed: {
    ...mapGetters(["checkAll"])
  }
  
}
</script>
