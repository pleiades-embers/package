<template>
  <h2>reactive的使用</h2>
  <h3>{{obj}}</h3>
  <hr>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

//需求:显示用户的相关信息

/* 作用:定义多个数据的响应式
const proxy=reactive(obj):接收一个普通对象然后返回该普通对象的响应式代理器对象
响应式转换是 "深层的": 会影响对象内部所有嵌套的属性
内部基于 ES6的 Proxy 实现,通过代理器对象操作源对象内部数据都是响应式的 */

export default defineComponent({
  name: "setup",
  setup() {
    //reactive  复杂数据响应式
    //返回的是一个Proxy的代理对象,被代理的目标对象就是obj对象
    //user 现在是代理对象,obj是目标对象
    const obj = reactive({
      name: "五浙江",
      age: 20,
      wife: {
        name: "倩倩",
        age: 18,
        cars:['🚗']
      },
    });

    //方法
    const updateUser=()=>{
      obj.wife.name+=',小熊'
    }

    return{
      obj,
      updateUser
    }
  },
});
</script>
