<template>
  <h2>App</h2>

  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>

  <button @click="update">更新</button>
</template>

<script lang="ts">
import {
  reactive,
  ref,
  shallowReactive,
  shallowRef,
  readonly,
  isReactive,
} from "vue";
/* 
shallowReactive与shallowRef
  shallowReactive: 只处理了对象内最外层属性的响应式(也就是浅响应式)
  shallowRef: 只处理了value的响应式, 不进行对象的reactive处理
总结:
  reactive与ref实现的是深度响应式, 而shallowReactive与shallowRef是浅响应式
  什么时候用浅响应式呢?
    一般情况下使用ref和reactive即可,
    如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/
/* readonly:
    深度只读数据
    获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
    只读代理是深层的：访问的任何嵌套 property 也是只读的。
    shallowReadonly
    浅只读数据
    创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
    应用场景:
    在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除 */
export default {
  setup() {
    const m1 = reactive({ a: 1, b: { c: 2 } });
    const m2 = shallowReactive({
      foo: 1,
      nested: {
        bar: 2,
      },
    });

    const m3 = ref({ a: 1, b: { c: 2 } });
    const m4 = shallowRef({ a: 1, b: { c: 2 } });

    console.log(isReactive(m2));

    //有 bug  浅响应式数据照样可以改
    const update = () => {
      m1.b.c += 1;
      m2.nested.bar += 1;

      m3.value.a += 1;
      m4.value.b.c += 1;
    };

    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
};
</script>
