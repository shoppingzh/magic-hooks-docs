<template>
  <div ref="el" style="width: 100%; height: 300px;" />
</template>

<script setup lang="ts">
import { useChart } from 'magic-hooks/lib/chart';
import { computed } from 'vue';
import * as echarts from 'echarts'

const data = [
  { province: '安徽', count: 300 },
  { province: '广东', count: 165 },
  { province: '北京', count: 640 },
  { province: '上海', count: 790 },
  { province: '甘肃', count: 400 },
  { province: '内蒙古', count: 189 },
]
const option = computed<echarts.EChartsOption>(() => ({
  xAxis: {
    type: 'category',
    data: data.map(o => o.province)
  },
  yAxis: {},
  tooltip: {},
  series: {
    type: 'bar',
    data: data.map(o => o.count),
  }
}))
const { el } = useChart({
  option
})
</script>
