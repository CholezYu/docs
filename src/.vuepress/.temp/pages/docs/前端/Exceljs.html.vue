<template><div><h1 id="exceljs" tabindex="-1"><a class="header-anchor" href="#exceljs" aria-hidden="true">#</a> Exceljs</h1>
<h2 id="单元格样式" tabindex="-1"><a class="header-anchor" href="#单元格样式" aria-hidden="true">#</a> 单元格样式</h2>
<p>单元格可以设置的样式。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Style</span> <span class="token punctuation">{</span>
  <span class="token comment">// 字体</span>
	font<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Font<span class="token operator">></span>
  	
  <span class="token comment">// 对齐</span>
  alignment<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Alignment<span class="token operator">></span>
  
  <span class="token comment">// 边框</span>
  border<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Borders<span class="token operator">></span>
  
  <span class="token comment">// 填充模式</span>
	fill<span class="token operator">:</span> Fill
  
  <span class="token comment">// 数字格式</span>
	numFmt<span class="token operator">:</span> <span class="token builtin">string</span>
	
  <span class="token comment">// 单元格保护</span>
	protection<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Protection<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Font</span> <span class="token punctuation">{</span>
  <span class="token comment">// 字体族 'Arial', 'Calibri' ...</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token comment">// 备用字体族 1 - Serif, 2 - Sans Serif, 3 - Mono, Others - unknown</span>
	family<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token comment">// 字体大小</span>
	size<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token comment">// 字体颜色</span>
	color<span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  
  <span class="token comment">// 字体加粗</span>
	bold<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 字体倾斜</span>
	italic<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 下划线</span>
	underline<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token string">'none'</span> <span class="token operator">|</span> <span class="token string">'single'</span> <span class="token operator">|</span> <span class="token string">'double'</span> <span class="token operator">|</span> <span class="token string">'singleAccounting'</span> <span class="token operator">|</span> <span class="token string">'doubleAccounting'</span>
  
  <span class="token comment">// 删除线</span>
	strike<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 字体轮廓</span>
	outline<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 垂直对齐</span>
	vertAlign<span class="token operator">:</span> <span class="token string">'superscript'</span> <span class="token operator">|</span> <span class="token string">'subscript'</span>
  
  <span class="token comment">// 字体方案</span>
	scheme<span class="token operator">:</span> <span class="token string">'minor'</span> <span class="token operator">|</span> <span class="token string">'major'</span> <span class="token operator">|</span> <span class="token string">'none'</span>
  
  <span class="token comment">// 字符集</span>
	charset<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本对齐" tabindex="-1"><a class="header-anchor" href="#文本对齐" aria-hidden="true">#</a> 文本对齐</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alignment</span> <span class="token punctuation">{</span>
  <span class="token comment">// 水平对齐</span>
	horizontal<span class="token operator">:</span> <span class="token string">'left'</span> <span class="token operator">|</span> <span class="token string">'center'</span> <span class="token operator">|</span> <span class="token string">'right'</span> <span class="token operator">|</span> <span class="token string">'fill'</span> <span class="token operator">|</span> <span class="token string">'justify'</span> <span class="token operator">|</span> <span class="token string">'centerContinuous'</span> <span class="token operator">|</span> <span class="token string">'distributed'</span>
  
  <span class="token comment">// 垂直对齐</span>
	vertical<span class="token operator">:</span> <span class="token string">'top'</span> <span class="token operator">|</span> <span class="token string">'middle'</span> <span class="token operator">|</span> <span class="token string">'bottom'</span> <span class="token operator">|</span> <span class="token string">'distributed'</span> <span class="token operator">|</span> <span class="token string">'justify'</span>
  
  <span class="token comment">// 文本换行</span>
	wrapText<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 自适应</span>
	shrinkToFit<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 缩进</span>
	indent<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token comment">// 阅读顺序</span>
	readingOrder<span class="token operator">:</span> <span class="token string">'rtl'</span> <span class="token operator">|</span> <span class="token string">'ltr'</span>
  
  <span class="token comment">// 文本旋转</span>
	textRotation<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token string">'vertical'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="边框样式" tabindex="-1"><a class="header-anchor" href="#边框样式" aria-hidden="true">#</a> 边框样式</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Borders</span> <span class="token punctuation">{</span>
  <span class="token comment">// 对角线</span>
	diagonal<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>BorderDiagonal<span class="token operator">></span>
  
	top<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">></span>
	left<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">></span>
	bottom<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">></span>
	right<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Border</span> <span class="token punctuation">{</span>
  <span class="token comment">// 边框样式</span>
	style<span class="token operator">:</span> 
    <span class="token operator">|</span> <span class="token string">'thin'</span> <span class="token operator">|</span> <span class="token string">'dotted'</span> <span class="token operator">|</span> <span class="token string">'hair'</span> <span class="token operator">|</span> <span class="token string">'medium'</span> <span class="token operator">|</span> <span class="token string">'double'</span> <span class="token operator">|</span> <span class="token string">'thick'</span> <span class="token operator">|</span> <span class="token string">'dashDot'</span>
	  <span class="token operator">|</span> <span class="token string">'dashDotDot'</span> <span class="token operator">|</span> <span class="token string">'slantDashDot'</span> <span class="token operator">|</span> <span class="token string">'mediumDashed'</span> <span class="token operator">|</span> <span class="token string">'mediumDashDotDot'</span> <span class="token operator">|</span> <span class="token string">'mediumDashDot'</span>
  
  <span class="token comment">// 边框颜色</span>
	color<span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BorderDiagonal</span> <span class="token keyword">extends</span> <span class="token class-name">Border</span> <span class="token punctuation">{</span>
	up<span class="token operator">:</span> <span class="token builtin">boolean</span>
	down<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="填充" tabindex="-1"><a class="header-anchor" href="#填充" aria-hidden="true">#</a> 填充</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Fill</span> <span class="token operator">=</span> FillPattern <span class="token operator">|</span> FillGradientAngle <span class="token operator">|</span> FillGradientPath

<span class="token keyword">interface</span> <span class="token class-name">FillPattern</span> <span class="token punctuation">{</span>
  <span class="token comment">// 普通模式</span>
	type<span class="token operator">:</span> <span class="token string">'pattern'</span>
  
  <span class="token comment">// 模式类型</span>
	pattern<span class="token operator">:</span> 
    <span class="token operator">|</span> <span class="token string">'none'</span> <span class="token operator">|</span> <span class="token string">'solid'</span>
	  <span class="token operator">|</span> <span class="token string">'darkVertical'</span> <span class="token operator">|</span> <span class="token string">'darkHorizontal'</span> <span class="token operator">|</span> <span class="token string">'darkGrid'</span> <span class="token operator">|</span> <span class="token string">'darkTrellis'</span> <span class="token operator">|</span> <span class="token string">'darkDown'</span> <span class="token operator">|</span> <span class="token string">'darkUp'</span>
	  <span class="token operator">|</span> <span class="token string">'lightVertical'</span> <span class="token operator">|</span> <span class="token string">'lightHorizontal'</span> <span class="token operator">|</span> <span class="token string">'lightGrid'</span> <span class="token operator">|</span> <span class="token string">'lightTrellis'</span> <span class="token operator">|</span> <span class="token string">'lightDown'</span> <span class="token operator">|</span> <span class="token string">'lightUp'</span>
	  <span class="token operator">|</span> <span class="token string">'darkGray'</span> <span class="token operator">|</span> <span class="token string">'mediumGray'</span> <span class="token operator">|</span> <span class="token string">'lightGray'</span> <span class="token operator">|</span> <span class="token string">'gray125'</span> <span class="token operator">|</span> <span class="token string">'gray0625'</span>
  
  <span class="token comment">// 图案前景色</span>
	fgColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  
  <span class="token comment">// 图案背景色</span>
	bgColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FillGradientAngle</span> <span class="token punctuation">{</span>
  <span class="token comment">// 渐变模式</span>
	type<span class="token operator">:</span> <span class="token string">'gradient'</span>
  
  <span class="token comment">// 线性渐变</span>
	gradient<span class="token operator">:</span> <span class="token string">'angle'</span>
  
  <span class="token comment">// 旋转角度</span>
	degree<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token comment">// 渐变颜色序列</span>
	stops<span class="token operator">:</span> <span class="token punctuation">{</span> position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> color<span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FillGradientPath</span> <span class="token punctuation">{</span>
  <span class="token comment">// 渐变模式</span>
	type<span class="token operator">:</span> <span class="token string">'gradient'</span>
  
  <span class="token comment">// 径向渐变</span>
	gradient<span class="token operator">:</span> <span class="token string">'path'</span>
  
  <span class="token comment">// 中心点</span>
	center<span class="token operator">:</span> <span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> top<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  
  <span class="token comment">// 渐变颜色序列</span>
	stops<span class="token operator">:</span> <span class="token punctuation">{</span> position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> color<span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h2>
<h3 id="封装函数" tabindex="-1"><a class="header-anchor" href="#封装函数" aria-hidden="true">#</a> 封装函数</h3>
<p>导出表格，第一列为序号，第二列为图片。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Workbook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"exceljs"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"file-saver/dist/FileSaver"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> urlToBase64 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/urlToBase64"</span> <span class="token comment">// 百度搜</span>


<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">excelExport</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> workbook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Workbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">const</span> sheet <span class="token operator">=</span> workbook<span class="token punctuation">.</span><span class="token function">addWorksheet</span><span class="token punctuation">(</span><span class="token string">"sheet"</span><span class="token punctuation">)</span>
    
    sheet<span class="token punctuation">.</span>columns <span class="token operator">=</span> headers
    
    sheet<span class="token punctuation">.</span><span class="token function">addRows</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> headers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 列</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> data<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 行</span>
        <span class="token comment">// 除表头外所有单元格高度</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">140</span>
        
        <span class="token comment">// 所有单元格水平垂直居中</span>
        sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>alignment <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">vertical</span><span class="token operator">:</span> <span class="token string">"middle"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">horizontal</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">wrapText</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 所有单元格字体样式</span>
        sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Arial Unicode MS"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      
      <span class="token comment">// 表头字体加粗</span>
      sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>font<span class="token punctuation">.</span>bold <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// [empty, "图片", url, url, url ...]</span>
    <span class="token keyword">const</span> urls <span class="token operator">=</span> sheet<span class="token punctuation">.</span><span class="token function">getColumn</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>values<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    
    <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> row <span class="token operator">&lt;=</span> urls<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// url => base64</span>
        <span class="token keyword">const</span> base64 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">urlToBase64</span><span class="token punctuation">(</span>urls<span class="token punctuation">[</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        
        <span class="token comment">// 创建图片</span>
        <span class="token keyword">const</span> imageId <span class="token operator">=</span> workbook<span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">base64</span><span class="token operator">:</span> base64<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">extension</span><span class="token operator">:</span> <span class="token string">"jpeg"</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        <span class="token comment">// 清空 url 文本，只显示图片</span>
        sheet<span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">B</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> row <span class="token operator">+</span> <span class="token number">1</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">""</span>
        
        <span class="token comment">// 添加图片</span>
        sheet<span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span>imageId<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">tl</span><span class="token operator">:</span> <span class="token punctuation">{</span> row<span class="token punctuation">,</span> <span class="token literal-property property">col</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 导出 Excel</span>
    <span class="token keyword">await</span> workbook<span class="token punctuation">.</span>xlsx<span class="token punctuation">.</span><span class="token function">writeBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">buffer</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> _file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>buffer<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"application/octet-stream"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token function">saveAs</span><span class="token punctuation">(</span>_file<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> title <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.xlsx</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<p>传入配置，表头的 key 必须与表格数据的字段一一对应。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> toExcelData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">banner</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"vmagiccare丝绒抗静电梳气囊梳子气垫梳女士梳头蓬松头皮按摩"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">goods_sku</span><span class="token operator">:</span> <span class="token string">"朱砂红\n咖啡色\n藏蓝色"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bottom_price</span><span class="token operator">:</span> <span class="token string">"9.90"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">max_price</span><span class="token operator">:</span> <span class="token string">"9.90"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">commission_ratio</span><span class="token operator">:</span> <span class="token string">"12.00"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">partner_url</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">delivery_place</span><span class="token operator">:</span> <span class="token string">"48小时内从广东省发货，包邮"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">platform_product_id</span><span class="token operator">:</span> <span class="token string">"3646387021733308549"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">creadit_goods</span><span class="token operator">:</span> <span class="token number">97</span><span class="token punctuation">,</span>
    <span class="token literal-property property">creadit_service</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">creadit_logistics</span><span class="token operator">:</span> <span class="token number">94</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"序号"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">11</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"图片"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"banner"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">18.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"产品名称"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"title"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">34</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"产品规格"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"goods_sku"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"SKU最低价"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"bottom_price"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"SKU最高价"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"max_price"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"佣金比例"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"commission_ratio"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"佣金链接"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"partner_url"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"发货地点"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"delivery_place"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"商品编号"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"platform_product_id"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"商品体验分"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"creadit_goods"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"商家服务分"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"creadit_service"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">"物流体验分"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"creadit_logistics"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

loading <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token function">excelExport</span><span class="token punctuation">(</span>toExcelData<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> <span class="token string">"产品信息表"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading <span class="token operator">=</span> <span class="token boolean">false</span>
  
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"导出成功"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


