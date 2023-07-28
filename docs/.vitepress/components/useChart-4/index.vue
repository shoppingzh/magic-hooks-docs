<template>
  <div ref="el" style="width: 100%; height: 300px;" />
  
  <div class="text-xs text-gray-500">点击柱子选中</div>
</template>

<script setup lang="ts">
import useChart from 'magic-hooks/lib/useChart';
import { ref, computed, watch } from 'vue';
import * as echarts from 'echarts'
import { useData } from 'vitepress';

const { isDark } = useData()
const data = [
  { province: '安徽', count: 300 },
  { province: '广东', count: 165 },
  { province: '北京', count: 640 },
  { province: '上海', count: 790 },
  { province: '甘肃', count: 400 },
  { province: '内蒙古', count: 189 },
]
const active = ref()
const option = computed<echarts.EChartsOption>(() => ({
  backgroundColor: 'transparent',
  xAxis: {
    data: data.map(o => o.province)
  },
  yAxis: {},
  series: {
    type: 'bar',
    data: data.map(o => ({
      value: o.count,
      itemStyle: {
        color: o.province === active.value ? 'green' : undefined
      }
    })),
  }
}))
const { el, instance } = useChart({
  option,
  theme: computed(() => isDark.value ? 'dark' : null)
})

watch(instance, () => {
  if (!instance.value) return
  instance.value.on('click', e => {
    active.value = e.name
  })
})
</script>
