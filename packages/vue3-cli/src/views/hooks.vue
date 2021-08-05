<template>
  <h2>x: {{ x }}, y: {{ y }}</h2>
  <h3 v-if="loading">正在加载中</h3>
  <h3 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h3>
  <template v-else>
    <ul v-for="(item,index) in result">
        <li>{{item.name}}</li>
    </ul>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
/* 
在组件中引入并使用自定义hook
自定义hook的作用类似于vue2中的mixin技术
自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
*/
import useMousePosition from "./../hooks/useMousePosition";
import useRequest from "./../hooks/useRequest";



// 产品数据接口
interface ProductResult {
  id: number;
  name: string;
}


export default defineComponent({
  name: "",
  setup() {
    const { x, y } = useMousePosition();

    const { loading, result, errorMsg } = useRequest<ProductResult>("/api/course.json");
    return {
      x,
      y,
      loading,
      result,
      errorMsg,
    };
  },
});
</script>

<style scoped lang="scss"></style>
