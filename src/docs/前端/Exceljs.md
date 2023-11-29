---
title: Exceljs
icon: javascript
---

# Exceljs

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
	  | 'lightVertical' | 'lightHorizontal' | 'lightGrid' | 'lightTrellis' | 'lightDown' | 'lightUp'
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

## 导出

### 封装函数

导出表格，第一列为序号，第二列为图片。

```js
import { Workbook } from "exceljs"
import { saveAs } from "file-saver/dist/FileSaver"
import { urlToBase64 } from "@/utils/urlToBase64" // 百度搜


export function excelExport(data, headers, title) {
  return new Promise(async (resolve, reject) => {
    const workbook = new Workbook()
    
    const sheet = workbook.addWorksheet("sheet")
    
    sheet.columns = headers
    
    sheet.addRows(data)
    
    for (let i = 1; i <= headers.length; i++) { // 列
      for (let j = 1; j <= data.length + 1; j++) { // 行
        // 除表头外所有单元格高度
        if (j > 1) sheet.getRow(j).height = 140
        
        // 所有单元格水平垂直居中
        sheet.getRow(j).getCell(i).alignment = {
          vertical: "middle",
          horizontal: "center",
          wrapText: true
        }
        
        // 所有单元格字体样式
        sheet.getRow(j).getCell(i).font = {
          name: "Arial Unicode MS",
          size: 10
        }
      }
      
      // 表头字体加粗
      sheet.getRow(1).getCell(i).font.bold = true
    }
    
    // [empty, "图片", url, url, url ...]
    const urls = sheet.getColumn(2).values.slice(2)
    
    await (async function () {
      for (let row = 1; row <= urls.length; row++) {
        // url => base64
        const base64 = await urlToBase64(urls[row - 1])
        
        // 创建图片
        const imageId = workbook.addImage({
          base64: base64.toString(),
          extension: "jpeg"
        })
        
        // 清空 url 文本，只显示图片
        sheet.getCell(`B${ row + 1 }`).value = ""
        
        // 添加图片
        sheet.addImage(imageId, {
          tl: { row, col: 1 },
          ext: { width: 120, height: 120 }
        })
      }
    })()
    
    // 导出 Excel
    await workbook.xlsx.writeBuffer().then(buffer => {
      const _file = new Blob([buffer], { type: "application/octet-stream" })
      saveAs(_file, `${ title }.xlsx`)
    })
    
    resolve()
  })
}
```

### 配置

传入配置，表头的 key 必须与表格数据的字段一一对应。

```js
const toExcelData = [
  {
    index: 1,
    banner: "",
    title: "vmagiccare丝绒抗静电梳气囊梳子气垫梳女士梳头蓬松头皮按摩",
    goods_sku: "朱砂红\n咖啡色\n藏蓝色",
    bottom_price: "9.90",
    max_price: "9.90",
    commission_ratio: "12.00",
    partner_url: "",
    delivery_place: "48小时内从广东省发货，包邮",
    platform_product_id: "3646387021733308549",
    creadit_goods: 97,
    creadit_service: 100,
    creadit_logistics: 94
  },
  {
    // ...
  }
]

const headers = [
  { header: "序号", key: "index", width: 11 },
  { header: "图片", key: "banner", width: 18.5 },
  { header: "产品名称", key: "title", width: 34 },
  { header: "产品规格", key: "goods_sku", width: 50 },
  { header: "SKU最低价", key: "bottom_price", width: 33 },
  { header: "SKU最高价", key: "max_price", width: 33 },
  { header: "佣金比例", key: "commission_ratio", width: 33 },
  { header: "佣金链接", key: "partner_url", width: 40 },
  { header: "发货地点", key: "delivery_place", width: 33 },
  { header: "商品编号", key: "platform_product_id", width: 33 },
  { header: "商品体验分", key: "creadit_goods", width: 33 },
  { header: "商家服务分", key: "creadit_service", width: 33 },
  { header: "物流体验分", key: "creadit_logistics", width: 33 }
]

loading = true

excelExport(toExcelData, headers, "产品信息表").then(() => {
  loading = false
  
  Message({
    type: "success",
    message: "导出成功"
  })
})
```
