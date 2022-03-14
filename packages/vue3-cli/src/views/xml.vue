<template>
  <div class="help">
    <doxygen-xml  />
  </div>
</template>

<script lang="ts">
import { DoxygenXml } from 'vue-doxygen-xml'
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
   name: 'Help',
  components: {
    DoxygenXml
  },
  setup() {

  },
});
</script>

<style scoped lang="scss"></style>
