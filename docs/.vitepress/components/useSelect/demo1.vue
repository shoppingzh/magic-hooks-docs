<template>
  <div class="flex items-center">
    <div class="flex-1 w-0 overflow-auto">
      <ElRadioGroup v-model="activeValue">
        <ElRadioButton
          v-for="item in items"
          :key="item.value"
          :label="item.value"
          :disabled="item.disabled"
          size="small">{{ item.label }}</ElRadioButton>
      </ElRadioGroup>
    </div>
    <ElDivider direction="vertical" />
    <div class="ml-2 select-none">
      <ElLink :underline="false" @click="add">添加</ElLink>
      <ElLink :underline="false" class="ml-2" @click="disable">禁用</ElLink>
      <ElLink :underline="false" class="ml-2" @click="enableAll">全部启用</ElLink>
      <!-- <ElLink :underline="false" class="ml-2" @click="clear">清空</ElLink> -->
      <ElLink type="danger" class="ml-2" @click="remove">删除</ElLink>
    </div>
  </div>



  <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
    <component v-if="activeItem" :key="activeValue" :is="activeItem.component" />
    <div v-else class="py-4 text-center text-sm text-gray-700">空空如也</div>
  </div>
</template>

<script setup lang="ts">
import { ElNotification, NotificationHandle } from 'element-plus';
import useSelect from 'magic-hooks/lib/useSelect'
import { ref, watch } from 'vue';
import { random } from 'lodash'

const { activeValue, activeItem, items } = useSelect({
  items: [
    { value: 1, label: '页面1', component: 'useChart' },
    { value: 2, label: '页面2', component: 'useChart-2' },
    { value: 3, label: '页面3', component: 'useChart-5' },
  ],
  autoSelect: true,
})

function add() {
  const value = random(1, 10000, false)
  items.value.push({
    value,
    label: `页面${value}`,
    component: 'useChart',
  })
}
function disable() {
  if (!activeItem.value) return
  activeItem.value.disabled = !activeItem.value.disabled
}
function enableAll() {
  items.value.forEach(o => o.disabled = false)
}
function clear() {
  activeValue.value = null
}
function remove() {
  const idx = items.value.findIndex(o => o.value === activeValue.value)
  idx >= 0 && items.value.splice(idx, 1)
}

let handler: NotificationHandle
watch(activeItem, () => {
  if (!activeItem.value) return
  handler && handler.close()
  handler = ElNotification.success({
    title: '已选择：',
    message: JSON.stringify(activeItem.value),

  })
}, { immediate: true })
</script>
