<template>
  <div>
    <div class="flex items-center">
      <div class="text-sm text-gray-400">自动选择：</div>
      <ElSwitch v-model="autoSelect" />
    </div>
    <ElRadioGroup v-model="activeValue" class="mt-4">
      <ElRadio v-for="item in items" :key="item.value" :label="item.value">{{ item.label }}({{ item.description }})</ElRadio>
    </ElRadioGroup>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect';
import { ref } from 'vue';

const autoSelect = ref(false)
const { activeValue, items, } = useSelect({
  items: [
    { value: 1, label: '北京', description: '中国首都' },
    { value: 2, label: '深圳', description: '科技之都', },
    { value: 3, label: '武汉', description: '新兴一线', },
    { value: 4, label: '长沙', description: '美食之城', },
  ],
  autoSelect,
})
</script>
