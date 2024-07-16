---
title: Exceljs
icon: exceljs
date: 2024-07-16
description: Exceljs
---

<script setup>
  import Ts from "@source/components/Icons/Ts.vue"
  import Vue from "@source/components/Icons/Vue.vue"
</script>

## 单元格样式

单元格可以设置的样式。

```ts
interface Style {
  // 字体
	font: Partial<Font>
  	
  // 对齐
  alignment: Partial<Alignment>
  
  // 边框
  border: Partial<Borders>
  
  // 填充模式
	fill: Fill
  
  // 数字格式
	numFmt: string
	
  // 单元格保护
	protection: Partial<Protection>
}
```

### 字体样式

```ts
interface Font {
  // 字体族 'Arial', 'Calibri' ...
	name: string
  
  // 备用字体族 1 - Serif, 2 - Sans Serif, 3 - Mono, Others - unknown
	family: number
  
  // 字体大小
	size: number
  
  // 字体颜色
	color: { argb: string; theme: number }
  
  // 字体加粗
	bold: boolean
  
  // 字体倾斜
	italic: boolean
  
  // 下划线
	underline: boolean | 'none' | 'single' | 'double' | 'singleAccounting' | 'doubleAccounting'
  
  // 删除线
	strike: boolean
  
  // 字体轮廓
	outline: boolean
  
  // 垂直对齐
	vertAlign: 'superscript' | 'subscript'
  
  // 字体方案
	scheme: 'minor' | 'major' | 'none'
  
  // 字符集
	charset: number
}
```

### 文本对齐

```ts
interface Alignment {
  // 水平对齐
	horizontal: 'left' | 'center' | 'right' | 'fill' | 'justify' | 'centerContinuous' | 'distributed'
  
  // 垂直对齐
	vertical: 'top' | 'middle' | 'bottom' | 'distributed' | 'justify'
  
  // 文本换行
	wrapText: boolean
  
  // 自适应
	shrinkToFit: boolean
  
  // 缩进
	indent: number
  
  // 阅读顺序
	readingOrder: 'rtl' | 'ltr'
  
  // 文本旋转
	textRotation: number | 'vertical'
}
```

### 边框样式

```ts
interface Borders {
  // 对角线
	diagonal: Partial<BorderDiagonal>
  
	top: Partial<Border>
	left: Partial<Border>
	bottom: Partial<Border>
	right: Partial<Border>
}

interface Border {
  // 边框样式
	style: 
    | 'thin' | 'dotted' | 'hair' | 'medium' | 'double' | 'thick' | 'dashDot'
	  | 'dashDotDot' | 'slantDashDot' | 'mediumDashed' | 'mediumDashDotDot' | 'mediumDashDot'
  
  // 边框颜色
	color: { argb: string; theme: number }
}

interface BorderDiagonal extends Border {
	up: boolean
	down: boolean
}
```

### 填充

```ts
type Fill = FillPattern | FillGradientAngle | FillGradientPath

interface FillPattern {
  // 普通模式
	type: 'pattern'
  
  // 模式类型
	pattern: 
    | 'none' | 'solid'
	  | 'darkVertical' | 'darkHorizontal' | 'darkGrid' | 'darkTrellis' | 'darkDown' | 'darkUp'
	  | 'lightVertical' | 'lightHorizontal' | 'lightGrid' | 'lightTrellis' | 'lightDown'
    | 'lightUp'
	  | 'darkGray' | 'mediumGray' | 'lightGray' | 'gray125' | 'gray0625'
  
  // 图案前景色
	fgColor?: { argb: string; theme: number }
  
  // 图案背景色
	bgColor?: { argb: string; theme: number }
}

interface FillGradientAngle {
  // 渐变模式
	type: 'gradient'
  
  // 线性渐变
	gradient: 'angle'
  
  // 旋转角度
	degree: number
  
  // 渐变颜色序列
	stops: { position: number; color: { argb: string; theme: number } }[]
}

interface FillGradientPath {
  // 渐变模式
	type: 'gradient'
  
  // 径向渐变
	gradient: 'path'
  
  // 中心点
	center: { left: number; top: number }
  
  // 渐变颜色序列
	stops: { position: number; color: { argb: string; theme: number } }[]
}
```

## 导出函数

::: tabs#useExport

@tab <Ts /> useExport.ts

导出表格，第一列为序号，第二列为图片。

```ts
import { ref } from "vue"
import Exceljs from "exceljs"
import FileSaver from "file-saver"

// 进度
const progress = ref(0)

const worker = new Worker("worker.js")

const listener = ref<((event: MessageEvent) => void) | null>(null)

export default function useExport<T, K>() {
  const toExcel = async ({ data, headers }: {
    data: T
    headers: K
  }) => {
    progress.value = data.length
    
    const workbook = new Exceljs.Workbook()
    const sheet = workbook.addWorksheet("sheet")
    sheet.columns = headers
    sheet.addRows(data)
    for (let i = 1; i <= headers.length; i++) { // 列
      for (let j = 1; j <= data.length + 1; j++) { // 行
        // 设置单元格样式
      }
      // 设置行样式
    }
    // [empty, "图片", url, url, url ...]
    const urls = sheet.getColumn(2).values.slice(2)
    
    worker.postMessage({ workbook, sheet, urls })
    
    listener.value = async (event: MessageEvent) => {
      const { row, base64 } = event.data
      
      progress.value--
      
      const imageId = workbook.addImage({
        base64: base64.toString(),
        extension: "jpeg"
      })
      // 清空 url 文本，只显示图片
      sheet.getCell(`B${row + 1}`).value = ""
      sheet.addImage(imageId, {
        tl: { row, col: 1 },
        ext: { width: 120, height: 120 }
      })
      if (row === urls.length) {
        await workbook.xlsx.writeBuffer().then(buffer => {
          const _file = new Blob([buffer], { type: "application/octet-stream" })
          FileSaver.saveAs(_file, "Excel.xlsx")
        })
        
        worker.removeEventListener("message", listener.value!)
      }
    }
    
    worker.addEventListener("message", listener.value)
  }
  
  return { progress, toExcel }
}
```

@tab <Ts /> worker.ts

```ts
self.addEventListener("message", async event => {
  const { urls } = event.data
  for (let row = 1; row <= urls.length; row++) {
    const base64 = await urlToBase64(urls[row - 1])
    self.postMessage({ row, base64 })
  }
})
```

@tab <Vue /> *.vue

传入配置，表头的 key 必须与表格数据的字段一一对应。

```js
const { progress, toExcel } = useExport()

await toExcel({
  data: [
    {
      index: 1,
      banner: "https://avatars.githubusercontent.com/u/88796382?v=4",
      title: "【AKI】四轴飞行器智能航拍无人机气压定高儿童遥控飞机玩具",
      sku: "黑单+单电池",
      price: 69.99,
      ratio: 12.00,
      url: "https://app.kwaixiaodian.com/merchant/shop/detail?id=21585967581834",
      place: "48小时内从广东省发货，包邮",
      id: "3646387021733308549",
      quality: 97,
      service: 100,
      logistics: 94
    },
    {
      // ...
    }
  ],
  headers: [
    { header: "序号", key: "index", width: 10 },
    { header: "图片", key: "banner", width: 20 },
    { header: "产品名称", key: "title", width: 35 },
    { header: "产品规格", key: "sku", width: 50 },
    { header: "产品价格", key: "price", width: 32 },
    { header: "佣金比例", key: "ratio", width: 32 },
    { header: "佣金链接", key: "url", width: 40 },
    { header: "发货地点", key: "place", width: 32 },
    { header: "商品ID", key: "id", width: 32 },
    { header: "商品体验分", key: "quality", width: 32 },
    { header: "商家服务分", key: "service", width: 32 },
    { header: "物流体验分", key: "logistics", width: 32 }
  ]
})
```

:::
