# ECharts

## 按需引入

```ts
/* echarts.ts */

// 引入核心
import * as echarts from "echarts/core"

// 引入图表
import { BarChart, LineChart, PieChart } from "echarts/charts"

// 图表类型
import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from "echarts/charts"

// 引入组件
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components"

// 组件类型
import type {
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
  GridComponentOption
} from "echarts/components"

// 固定引入
import { LabelLayout, UniversalTransition } from "echarts/features"

// 渲染器
import { CanvasRenderer } from "echarts/renderers"

import type { ComposeOption } from "echarts/core"

// 注册类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | GridComponentOption
>

// 注册组件
echarts.use([
  BarChart,
  LineChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default echarts
```

## 基本使用

```ts
/* App.vue */

import echarts, { type ECOption } from "@/utils/echarts.ts"

const chartRef = ref<HTMLDivElement>()

onMounted(() => {
  // 初始化 echarts 实例
  const chart = echarts.init(chartRef.value)
  
  const option: ECOption = {
    title: {
      text: "ECharts", // 标题
      left: "center" // 居中
    },
    tooltip: {}, // 提示框
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"] // 数据
    },
    yAxis: {
      axisLine: {
        show: true // 显示轴线
      },
      axisTick: {
        show: true // 显示刻度线
      }
    },
    legend: {
      data: ["柱状图", "折线图", "饼状图"] // 控制图表的显示与隐藏
    },
    series: [
      {
        name: "柱状图",
        type: "bar", // 柱状图
        data: [5, 20, 36, 10, 10, 20] // 对应 x 轴数量
      },
      {
        name: "折线图",
        type: "line", // 折线图
        data: [5, 20, 36, 10, 10, 20] // 对应 x 轴数量
      },
      {
        name: "饼状图",
        type: "pie", // 饼状图
        data: [
          { name: "衬衫", value: 5 },
          { name: "羊毛衫", value: 36 },
          { name: "雪纺衫", value: 10 },
          { name: "裤子", value: 10 },
          { name: "高跟鞋", value: 20 }
        ],
        radius: [0, 50], // 半径
        center: ["70%", 120] // 位置
      }
    ],
    grid: {
      left: 10, // 左侧距离
      right: 10, // 右侧距离
      containLabel: true // 是否包含标签
    }
  }
  
  // 渲染图表
  chart.setOption(option)
})
```

## 封装组件

```vue
<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import echarts, { type ECOption } from "@/utils/echarts.ts"
  
  const chartRef = ref<HTMLDivElement>()
  
  const props = withDefaults(
    defineProps<{
      width?: string
      height?: string
      option: ECOption
    }>(),
    {
      width: "100%",
      height: "100%"
    }
  )
  
  onMounted(() => {
    const chart = echarts.init(chartRef.value)
    
    chart.setOption(props.option)
  })
</script>

<template>
  <div ref="chartRef" :style="{ width, height }"></div>
</template>
```

```vue
<!-- App -->

<script setup lang="ts">
  import type { ECOption } from "@/utils/echarts.ts"
  import Chart from "@/components/Chart.vue"
  
  const option: ECOption = {
    // ...
  }
</script>

<template>
  <div>
    <Chart :option="option" width="800px" height="400px" />
  </div>
</template>
```

## 适配

```ts
onMounted(() => {
  const chart = echarts.init(chartRef.value)
  
  chart.setOption(props.option)
  
  window.addEventListener("resize", () => {
    chart.resize() // 当窗口发生变化时，改变图表大小
  })
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    chart.resize() // 解绑
  })
})
```