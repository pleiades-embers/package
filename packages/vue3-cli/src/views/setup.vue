<template>
  <h2>setup和ref的基本数据</h2>
  <h3>{{count}}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue';

export default defineComponent({
  name: 'setup',
  //vue2的方式实现
  // data(){
  //   return{
  //     count:0  
  //   }
  // },
  // methods:{
  //   updateCount(){
  //     this.count++
  //   }
  // },
  //vue3的方式实现
  setup(){
    //ref 一般用来定义一个基本类型的响应式数据
    const count=ref(0)

    function updateCount(){
      count.value++
    }
    return{
      count,
      updateCount
    }
  },
  
  components: {
  },
});
</script>
