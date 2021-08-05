<template>
  <div>
    <h2>子组件</h2>
    <hr>
    <Son />
  </div>
</template>

<script lang="ts">
import Son from './Son.vue'
export default {
  components: {
    Son
  },
}
</script>