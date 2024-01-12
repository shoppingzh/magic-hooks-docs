<template>
  <div ref="scrollEl" class="h-[500px] overflow-auto">
    <div v-for="x in 500" :key="x" class="mb-4">
      <useChart-4 />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const scrollEl = ref<HTMLElement>()
</script>
