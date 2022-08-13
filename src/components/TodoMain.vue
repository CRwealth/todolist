<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="item.done ? 'completed' : ''" v-for="item,index in list" :key="index">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="item.done" @change="doneThing(index)"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="clear(index)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import { mapState,mapMutations, mapGetters} from 'vuex';
export default {
  
  computed: {
    // 获取仓库里面的数据
    // 第一种
    // ...mapState("TodoMain", ["list"]),

    // 第二种
     ...mapState(['TodoMain/list']),

    // 底部点击渲染list列表
    ...mapGetters(["list"])
  },
  methods: {
    ...mapMutations("TodoMain", ["changeTodo", "removeTodo"]),
    // 修改时间
    doneThing(index) { 
      this.changeTodo(index)
    },
    // 清除事件
    clear(index) {
      this.removeTodo(index)
    } 
  },
}
</script>