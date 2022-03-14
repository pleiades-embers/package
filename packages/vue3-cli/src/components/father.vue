<template>
  <h2>父级组件</h2>
  <h3>{{msg}}</h3>
  <button @click="msg+='==='">点击传值</button>
  <hr>
  <Child :msg="msg"/>
</template>

<script lang="ts">
import Child from "./Child.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const msg = ref("aaaaaaaaaaaaaaaaaa");

    return {
        msg,
    }
  },
  components: {
    Child,
  },
});
</script>

<style scoped lang="scss"></style>
