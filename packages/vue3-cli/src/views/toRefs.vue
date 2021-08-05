<template>
  <h2>toRefs的使用</h2>
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
    <h3>{{ foo2 }}</h3>
      <h3>{{ bar2 }}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const state = reactive({
      name: "自来也",
      age: 47,
    });
    const stateAsRefs = toRefs(state);
    // 定时器,更新数据,(如果数据变换了,界面也会随之变换,肯定是响应式的数据)
    setInterval(() => {
      state.name += "==";
    }, 2000);
    const { foo2, bar2 } = useReatureX();
    return {
      ...stateAsRefs,
      foo2,
      bar2,
    };
  },
});

function useReatureX() {
  const state = reactive({
    foo2: "a",
    bar2: "b",
  });

  setTimeout(() => {
    state.foo2 += "++";
    state.bar2 += "++";
  }, 2000);

  return toRefs(state);
}
</script>

<style scoped lang="scss"></style>
