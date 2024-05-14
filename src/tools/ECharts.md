---
title: ECharts
icon: typescript
---

## 基本配置

```ts
// 引入核心
import * as charts from "echarts/core"

// 引入图表
import {
  BarChart,  // 柱状图
  LineChart, // 折线图
  PieChart,  // 扇形图
  MapChart,  // 地图
  EffectScatterChart
} from "echarts/charts"

// 图表类型
import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  MapSeriesOption,
  EffectScatterSeriesOption
} from "echarts/charts"

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

// 布局组件和过渡组件
import { LabelLayout, UniversalTransition } from "echarts/features"

// 渲染器
import { CanvasRenderer } from "echarts/renderers"

import type { ComposeOption } from "echarts/core"

// 注册类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | MapSeriesOption
  | EffectScatterSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | GridComponentOption
>

// 注册组件
charts.use([
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  EffectScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default charts
```

## 组件封装

```vue
<script setup lang="ts">
  import { ref, watch, onMounted } from "vue"
  import charts, { type ECOption } from "@/utils/charts"
  import { merge, cloneDeep } from "lodash"
  
  const props = withDefaults(defineProps<{
    option: ECOption
    width?: string
    height?: string
  }>(), {
    width: "100%",
    height: "100%"
  })
  
  const initOption: ECOption = {
    title: {},
    xAxis: {},
    yAxis: {
      axisLine: {
        show: true // 显示轴线
      },
      axisTick: {
        show: true // 显示刻度线
      }
    },
    tooltip: {}, // 提示框
    legend: {}, // 图例
    grid: {
      left: 10, // 左侧距离
      right: 10, // 右侧距离
      containLabel: true // 是否包含标签
    }
  }
  
  const chartRef = ref<HTMLDivElement>()
  
  const chart = ref<charts.ECharts>()
  
  onMounted(() => {
    // 初始化 charts 实例
    chart.value = charts.init(chartRef.value)
  })
  
  watch(() => props.option, (option: ECOption) => {
    // 渲染图表
    chart.value?.setOption(merge(cloneDeep(initOption), option))
  }, {
    deep: true
  })
  
  defineExpose({
    name: "Chart",
    chart
  })
</script>

<template>
  <div ref="chartRef" :style="{ width, height }" />
</template>
```

## 柱状图

```vue
<script setup lang="ts">
  const option: ECOption = {
    title: {
      text: "柱状图" // 标题
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"] // 数据
    },
    series: [
      {
        name: "柱状图",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20] // 对应 x 轴数量
      }
    ]
  }
</script>

<template>
  <Chart :option="option" width="400px" height="300px" />
</template>
```

## 折线图

```vue
<script setup lang="ts">
  const option: ECOption = {
    title: {
      text: "折线图" // 标题
    },
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] // 数据
    },
    series: [
      {
        name: "折线图",
        type: "line",
        data: [150, 230, 224, 218, 135, 147, 260] // 对应 x 轴数量
      }
    ]
  }
</script>

<template>
  <Chart :option="option" width="400px" height="300px" />
</template>
```

## 饼图

```vue
<script setup lang="ts">
  const option: ECOption = {
    title: {
      text: "饼图" // 标题
    },
    series: [
      {
        name: "饼图",
        type: "pie", // 饼图
        data: [
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" }
        ],
        radius: ["10%", "30%"], // 半径
        center: ["50%", 150] // 位置
      }
    ]
  }
</script>

<template>
  <Chart :option="option" width="400px" height="300px" />
</template>
```

## 中国地图

```vue
<script setup lang="ts">
  import Chart from "@/components/Chart/index.vue"
  import charts, { type ECOption } from "@/utils/charts.ts"
  import china from "@/china.json" // https://github.com/yezongyang/china-geojson
  
  charts.registerMap("china", china as any)
  
  const option: ECOption = {
    title: {
      show: false
    },
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    legend: {
      show: false
    },
    tooltip: {
      show: false
    },
    geo: {
      map: "china", // 中国地图
      itemStyle: {
        areaColor: "rgba(104, 216, 254, .5)", // 地图颜色
        borderColor: "rgba(104, 216, 254, .8)" // 描边颜色
      },
      label: {
        color: "#fff" // 文本颜色
      },
      emphasis: {
        itemStyle: {
          areaColor: "rgba(104, 216, 254)" // 高亮地图颜色
        },
        label: {
          color: "#fff" // 高亮文本颜色
        }
      }
    },
    series: [
      {
        type: "effectScatter", // 散点
        coordinateSystem: "geo", // 经纬坐标系
        data: [
          { value: [116, 40], name: "北京" }, // 北京坐标
          { value: [121, 31], name: "上海" }, // 上海坐标
          { value: [114, 30], name: "武汉" } // 武汉坐标
        ],
        itemStyle: {
          color: "#5470c6" // 散点颜色
        },
        label: {
          show: true, // 是否显示文本
          formatter: "{b}", // 显示字段 (name)
          color: "#5470c6", // 文本颜色
          position: "left", // 文本位置
          fontSize: 10 // 文本大小
        }
      },
      {
        type: "lines", // 散点连线
        coordinateSystem: "geo", // 经纬坐标系
        data: [
          {
            // 北京飞上海
            coords: [
              [116, 40],
              [121, 31]
            ]
          },
          {
            // 北京飞武汉
            coords: [
              [116, 40],
              [114, 30]
            ]
          }
        ],
        lineStyle: {
          color: "#5470c6", // 线的颜色
          width: 2,
          curveness: 0.2
        },
        effect: {
          show: true,
          symbol: "arrow", // 线的特效 (箭头)
          symbolSize: 5
        }
      }
    ]
  }
</script>

<template>
  <Chart :option="option" width="600px" height="400px" />
</template>
```
