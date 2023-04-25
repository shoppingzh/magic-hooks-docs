<template>
  <div v-if="show" ref="el" style="width: 100%; height: 300px;" />
  <el-button type="primary" @click="show = !show">
    {{ show ? '销毁DOM' : '生成DOM' }}
  </el-button>
</template>

<script setup lang="ts">
import { useChart } from 'magic-hooks/lib/chart';
import { ref, computed } from 'vue';
import * as echarts from 'echarts'

const show = ref(false)
const data = [
  { province: '安徽', count: 300 },
  { province: '广东', count: 165 },
  { province: '北京', count: 640 },
  { province: '上海', count: 790 },
  { province: '甘肃', count: 400 },
  { province: '内蒙古', count: 189 },
]
const option = computed<echarts.EChartsOption>(() => ({
  series: {
    type: 'pie',
    data: data.map(o => ({
      name: o.province,
      value: o.count,
    })),
  }
}))
const { el } = useChart({
  option
})
</script>
