import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-5ZILX7nX.js";const t={},e=p(`<h2 id="单元格样式" tabindex="-1"><a class="header-anchor" href="#单元格样式" aria-hidden="true">#</a> 单元格样式</h2><p>单元格可以设置的样式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Style</span> <span class="token punctuation">{</span>
  <span class="token comment">// 字体</span>
	font<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Font<span class="token operator">&gt;</span>
  	
  <span class="token comment">// 对齐</span>
  alignment<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Alignment<span class="token operator">&gt;</span>
  
  <span class="token comment">// 边框</span>
  border<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Borders<span class="token operator">&gt;</span>
  
  <span class="token comment">// 填充模式</span>
	fill<span class="token operator">:</span> Fill
  
  <span class="token comment">// 数字格式</span>
	numFmt<span class="token operator">:</span> <span class="token builtin">string</span>
	
  <span class="token comment">// 单元格保护</span>
	protection<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Protection<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Font</span> <span class="token punctuation">{</span>
  <span class="token comment">// 字体族 &#39;Arial&#39;, &#39;Calibri&#39; ...</span>
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
	underline<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token string">&#39;none&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;single&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;double&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;singleAccounting&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;doubleAccounting&#39;</span>
  
  <span class="token comment">// 删除线</span>
	strike<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 字体轮廓</span>
	outline<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 垂直对齐</span>
	vertAlign<span class="token operator">:</span> <span class="token string">&#39;superscript&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;subscript&#39;</span>
  
  <span class="token comment">// 字体方案</span>
	scheme<span class="token operator">:</span> <span class="token string">&#39;minor&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;major&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;none&#39;</span>
  
  <span class="token comment">// 字符集</span>
	charset<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本对齐" tabindex="-1"><a class="header-anchor" href="#文本对齐" aria-hidden="true">#</a> 文本对齐</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alignment</span> <span class="token punctuation">{</span>
  <span class="token comment">// 水平对齐</span>
	horizontal<span class="token operator">:</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;fill&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;justify&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;centerContinuous&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;distributed&#39;</span>
  
  <span class="token comment">// 垂直对齐</span>
	vertical<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;middle&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;distributed&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;justify&#39;</span>
  
  <span class="token comment">// 文本换行</span>
	wrapText<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 自适应</span>
	shrinkToFit<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token comment">// 缩进</span>
	indent<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token comment">// 阅读顺序</span>
	readingOrder<span class="token operator">:</span> <span class="token string">&#39;rtl&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;ltr&#39;</span>
  
  <span class="token comment">// 文本旋转</span>
	textRotation<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token string">&#39;vertical&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="边框样式" tabindex="-1"><a class="header-anchor" href="#边框样式" aria-hidden="true">#</a> 边框样式</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Borders</span> <span class="token punctuation">{</span>
  <span class="token comment">// 对角线</span>
	diagonal<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>BorderDiagonal<span class="token operator">&gt;</span>
  
	top<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">&gt;</span>
	left<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">&gt;</span>
	bottom<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">&gt;</span>
	right<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Border<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Border</span> <span class="token punctuation">{</span>
  <span class="token comment">// 边框样式</span>
	style<span class="token operator">:</span> 
    <span class="token operator">|</span> <span class="token string">&#39;thin&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dotted&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hair&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;medium&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;double&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;thick&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dashDot&#39;</span>
	  <span class="token operator">|</span> <span class="token string">&#39;dashDotDot&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;slantDashDot&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mediumDashed&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mediumDashDotDot&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mediumDashDot&#39;</span>
  
  <span class="token comment">// 边框颜色</span>
	color<span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BorderDiagonal</span> <span class="token keyword">extends</span> <span class="token class-name">Border</span> <span class="token punctuation">{</span>
	up<span class="token operator">:</span> <span class="token builtin">boolean</span>
	down<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="填充" tabindex="-1"><a class="header-anchor" href="#填充" aria-hidden="true">#</a> 填充</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Fill</span> <span class="token operator">=</span> FillPattern <span class="token operator">|</span> FillGradientAngle <span class="token operator">|</span> FillGradientPath

<span class="token keyword">interface</span> <span class="token class-name">FillPattern</span> <span class="token punctuation">{</span>
  <span class="token comment">// 普通模式</span>
	type<span class="token operator">:</span> <span class="token string">&#39;pattern&#39;</span>
  
  <span class="token comment">// 模式类型</span>
	pattern<span class="token operator">:</span> 
    <span class="token operator">|</span> <span class="token string">&#39;none&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;solid&#39;</span>
	  <span class="token operator">|</span> <span class="token string">&#39;darkVertical&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;darkHorizontal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;darkGrid&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;darkTrellis&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;darkDown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;darkUp&#39;</span>
	  <span class="token operator">|</span> <span class="token string">&#39;lightVertical&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lightHorizontal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lightGrid&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lightTrellis&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lightDown&#39;</span>
    <span class="token operator">|</span> <span class="token string">&#39;lightUp&#39;</span>
	  <span class="token operator">|</span> <span class="token string">&#39;darkGray&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mediumGray&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lightGray&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;gray125&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;gray0625&#39;</span>
  
  <span class="token comment">// 图案前景色</span>
	fgColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  
  <span class="token comment">// 图案背景色</span>
	bgColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FillGradientAngle</span> <span class="token punctuation">{</span>
  <span class="token comment">// 渐变模式</span>
	type<span class="token operator">:</span> <span class="token string">&#39;gradient&#39;</span>
  
  <span class="token comment">// 线性渐变</span>
	gradient<span class="token operator">:</span> <span class="token string">&#39;angle&#39;</span>
  
  <span class="token comment">// 旋转角度</span>
	degree<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token comment">// 渐变颜色序列</span>
	stops<span class="token operator">:</span> <span class="token punctuation">{</span> position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> color<span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FillGradientPath</span> <span class="token punctuation">{</span>
  <span class="token comment">// 渐变模式</span>
	type<span class="token operator">:</span> <span class="token string">&#39;gradient&#39;</span>
  
  <span class="token comment">// 径向渐变</span>
	gradient<span class="token operator">:</span> <span class="token string">&#39;path&#39;</span>
  
  <span class="token comment">// 中心点</span>
	center<span class="token operator">:</span> <span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> top<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  
  <span class="token comment">// 渐变颜色序列</span>
	stops<span class="token operator">:</span> <span class="token punctuation">{</span> position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> color<span class="token operator">:</span> <span class="token punctuation">{</span> argb<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> theme<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h2><h3 id="封装函数" tabindex="-1"><a class="header-anchor" href="#封装函数" aria-hidden="true">#</a> 封装函数</h3><p>导出表格，第一列为序号，第二列为图片。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Workbook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;src/tools/Exceljs&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;file-saver/dist/FileSaver&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> urlToBase64 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/urlToBase64&quot;</span>


<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">toExcel</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> workbook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Workbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> sheet <span class="token operator">=</span> workbook<span class="token punctuation">.</span><span class="token function">addWorksheet</span><span class="token punctuation">(</span><span class="token string">&quot;sheet&quot;</span><span class="token punctuation">)</span>
  
  sheet<span class="token punctuation">.</span>columns <span class="token operator">=</span> headers
  sheet<span class="token punctuation">.</span><span class="token function">addRows</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> headers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 列</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> data<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 行</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">120</span>
      
      sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>alignment <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">vertical</span><span class="token operator">:</span> <span class="token string">&quot;middle&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">horizontal</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">wrapText</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
      
      sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Arial Unicode MS&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>font<span class="token punctuation">.</span>bold <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// [empty, &quot;图片&quot;, url, url, url ...]</span>
  <span class="token keyword">const</span> urls <span class="token operator">=</span> sheet<span class="token punctuation">.</span><span class="token function">getColumn</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>values<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  
  <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> row <span class="token operator">&lt;=</span> urls<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> base64 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">urlToBase64</span><span class="token punctuation">(</span>urls<span class="token punctuation">[</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      
      <span class="token keyword">const</span> imageId <span class="token operator">=</span> workbook<span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">base64</span><span class="token operator">:</span> base64<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">extension</span><span class="token operator">:</span> <span class="token string">&quot;jpeg&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      
      <span class="token comment">// 清空 url 文本，只显示图片</span>
      sheet<span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">B</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> row <span class="token operator">+</span> <span class="token number">1</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
      
      sheet<span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span>imageId<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tl</span><span class="token operator">:</span> <span class="token punctuation">{</span> row<span class="token punctuation">,</span> <span class="token literal-property property">col</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token keyword">await</span> workbook<span class="token punctuation">.</span>xlsx<span class="token punctuation">.</span><span class="token function">writeBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">buffer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>buffer<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;application/octet-stream&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">saveAs</span><span class="token punctuation">(</span>_file<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> title <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.xlsx</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>传入配置，表头的 key 必须与表格数据的字段一一对应。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> toExcelData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">banner</span><span class="token operator">:</span> <span class="token string">&quot;https://avatars.githubusercontent.com/u/88796382?v=4&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;【AKI】四轴飞行器智能航拍无人机气压定高儿童遥控飞机玩具&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sku</span><span class="token operator">:</span> <span class="token string">&quot;黑单+单电池&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">69.99</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ratio</span><span class="token operator">:</span> <span class="token number">12.00</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://app.kwaixiaodian.com/merchant/shop/detail?id=21585967581834&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">place</span><span class="token operator">:</span> <span class="token string">&quot;48小时内从广东省发货，包邮&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;3646387021733308549&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">97</span><span class="token punctuation">,</span>
    <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">logistics</span><span class="token operator">:</span> <span class="token number">94</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;序号&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;图片&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;banner&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;产品名称&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">35</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;产品规格&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;sku&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;产品价格&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;佣金比例&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;ratio&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;佣金链接&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;发货地点&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;place&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;商品ID&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;商品体验分&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;quality&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;商家服务分&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&quot;物流体验分&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;logistics&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">await</span> <span class="token function">toExcel</span><span class="token punctuation">(</span>toExcelData<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> <span class="token string">&quot;产品信息表&quot;</span><span class="token punctuation">)</span>

<span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;导出成功&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showClose</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(t,[["render",l],["__file","Exceljs.html.vue"]]);export{k as default};
