# useChart

<Example title="useChart" class="mt-4">
  <chart-useChart />
</Example>

## 特性

- 自动渲染/销毁图表资源
- 配置项变化，自动重绘图表
- 图表容器尺寸发生变化时，自动重绘图表
- 加载态切换与样式调整
- 动态切换主题

## 使用方法

<chart-useChart-2 />

```vue
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
```

## Type Declarations

```ts
export interface UseChartOptions {
  el?: MaybeRef<HTMLElement>
  loading?: MaybeRef<boolean>
  option?: Ref<echarts.EChartsOption>
  resizeDuration?: number
}

export interface UseChartReturn {
  el: Ref<HTMLElement>
  loading: Ref<boolean>
  instance: ShallowRef<echarts.EChartsType>
  option: Ref<echarts.EChartsOption>
}

```