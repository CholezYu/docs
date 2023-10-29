# Exceljs

## Style

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

## Font

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

## Alignment

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

## Borders

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

## Fill

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
