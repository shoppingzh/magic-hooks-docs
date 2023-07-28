# useChart

<Example title="useChart">
  <chart-useChart />
</Example>

## 🚀 特性

- 配置项变化触发图表更新
- 响应式
- 加载态
- 动态切换主题
- 自动销毁资源

## 使用方法

<Example>
  <chart-useChart-2 />
</Example>

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

## API

**参数**

- `options` (UseChartOptions): 配置

**返回值**

(UseChartReturn)

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

## 经典场景复现

### 延迟的DOM

<Example>
  <chart-useChart-3 />
</Example>

hooks内部并不是在组件挂载时初始化图表，而是在给定图表容器元素存在后触发初始化。

因此，当hooks调用时即便DOM元素不存在，仍然能够正确初始化图表。

### 操作图表实例

<Example>
  <chart-useChart-4 />
</Example>