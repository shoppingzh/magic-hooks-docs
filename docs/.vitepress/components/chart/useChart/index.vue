<template>
  <div>
    <div ref="el" class="w-full" :style="{ height: `${height}px` }" />
    <el-form class="mt-4">
      <el-form-item label="图表高度">
        <el-input-number v-model="height" :step="50" />
      </el-form-item>
      <el-form-item label="加载中">
        <el-switch v-model="loading" />
      </el-form-item>
      <el-form-item label="配置变化">
        <el-button type="primary" @click="addSeries">随机加一个序列</el-button>
      </el-form-item>
      <el-form-item label="暗黑模式">
        <!-- <el-switch v-model="theme" active-value="dark" :inactive-value="null" /> -->
        点击右上角切换
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import useChart from 'magic-hooks/lib/useChart'
import { computed, ref } from 'vue';
import * as echarts from 'echarts'
import { useData } from 'vitepress';

const height = ref(300)
const provinces = ['安徽', '广东', '福建', '辽宁', '河南', '河北', '广西', '甘肃', '陕西']
const series = ref<echarts.SeriesOption[]>([])

const option = computed<echarts.EChartsOption>(() => ({
  backgroundColor: 'transparent',
  grid: {
    top: 40,
    bottom: 40,
  },
  xAxis: {
    type: 'category',
    data: provinces,
  },
  yAxis: {},
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  series: series.value
}))

const { isDark } = useData()

const theme = computed({
  get() {
    return isDark.value ? 'dark' : 'light'
  },
  set(newVal) {
    isDark.value = newVal === 'dark'
  }
})
const {
  el,
  loading,
} = useChart({
  option,
  theme,
})

function addSeries() {
  loading.value = true
  setTimeout(() => {
    series.value.push({
      name: `系列${series.value.length + 1}`,
      type: Math.random() > 0.5 ? 'bar' : 'line',
      data: provinces.map(o => Math.random() * 500),
    })
    loading.value = false
  }, 1000)
}

new Array(3).fill(null).forEach(addSeries)

</script>
