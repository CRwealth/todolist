

<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{sum}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{ selected:TodoFooter.condition === 0}" href="javascript:;" @click="changeCondition(0)" >全部</a>
      </li>
      <li>
        <a :class="{ selected:TodoFooter.condition === 1}" href="javascript:;" @click="changeCondition(1)">未完成</a>
      </li>
      <li>
        <a :class="{ selected:TodoFooter.condition === 2}" href="javascript:;" @click="changeCondition(2)">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="cleardone">清除已完成</button>
  </footer>
</template>

<script>
import { mapMutations,mapGetters,mapState} from 'vuex';
export default {
  methods: {
    ...mapMutations("TodoMain", ["clearDone"]),
   // 将已完成的清理
    cleardone() {
      this.clearDone()
    },
      ...mapMutations("TodoFooter",["changeNum"]),
    //  改变当前页面显示是全部还是完成
    changeCondition(num) {
      this.changeNum(num)
    }
  },
  computed: {
    // list长度就是剩余数
    ...mapGetters(["sum"]),
    ...mapState(["TodoFooter"])
  }
}
</script>