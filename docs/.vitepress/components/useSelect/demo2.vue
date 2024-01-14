<template>
  <ElRadioGroup v-model="activeValue">
    <ElRadio v-for="item in items" :key="item.value" :label="item.value">{{ item.label }}</ElRadio>
  </ElRadioGroup>
  <ElTabs v-model="activeValue">
    <ElTabPane v-for="item in items" :key="item.value" :name="item.value" :label="item.label">
      {{ item.label }}
    </ElTabPane>
  </ElTabs>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect';

const { activeValue, items, } = useSelect({
  items: [
    { value: 1, label: '选项1' },
    { value: 2, label: '选项2' },
    { value: 3, label: '选项3' },
  ]
})
</script>
