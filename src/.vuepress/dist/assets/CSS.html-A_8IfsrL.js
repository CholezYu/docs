import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c,a as n,b as a,e,d as t}from"./app-81GkaQ8O.js";const o={},u=t(`<h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><h3 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h3><p>link &gt; visited &gt; hover &gt; active</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 未访问过的链接 */</span>
<span class="token punctuation">:</span>link

<span class="token comment">/* 已访问过的链接 */</span>
<span class="token punctuation">:</span>visited

<span class="token comment">/* 鼠标悬停的链接 */</span>
<span class="token punctuation">:</span>hover

<span class="token comment">/* 鼠标点击的链接 */</span>
<span class="token punctuation">:</span>active
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 获取焦点的表单元素 */</span>
<span class="token punctuation">:</span>focus


<span class="token comment">/* 未被禁用的表单元素 */</span>
<span class="token punctuation">:</span>enabled

<span class="token comment">/* 被禁用的表单元素 */</span>
<span class="token punctuation">:</span>disabled

<span class="token comment">/* 被选中的表单元素 */</span>
<span class="token punctuation">:</span>checked
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* &lt;ul&gt; 中的 &lt;li&gt;，且该元素是第一个子元素 */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span>first-child

<span class="token comment">/* &lt;ul&gt; 中的 &lt;li&gt;，且该元素是最后一个子元素 */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span>last-child

<span class="token comment">/* &lt;ul&gt; 中的 &lt;li&gt;，且该元素是第 n 个子元素 */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>


<span class="token comment">/* &lt;ul&gt; 中的第一个 &lt;li&gt; */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span>first-of-type

<span class="token comment">/* &lt;ul&gt; 中的最后一个 &lt;li&gt; */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span>last-of-type

<span class="token comment">/* &lt;ul&gt; 中的第 n 个 &lt;li&gt; */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>


<span class="token comment">/* &lt;ul&gt; 中的唯一一个 &lt;li&gt; */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span>only-child
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 偶数元素 */</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>even<span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>2n<span class="token punctuation">)</span>

<span class="token comment">/* 奇数元素 */</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>odd<span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>2n+1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 不匹配的元素 */</span>
<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>.active<span class="token punctuation">)</span>

<span class="token comment">/* 没有后代节点元素的元素 */</span>
<span class="token punctuation">:</span>empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 在元素内部的最前面插入内容（必须设置 content 属性） */</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>before

<span class="token comment">/* 在元素内部的最后面插入内容（必须设置 content 属性） */</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>after


<span class="token comment">/* 元素的首字母 */</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>first-letter

<span class="token comment">/* 元素的首行 */</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>first-line


<span class="token comment">/* 元素中被选中的部分 */</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>selection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本样式" tabindex="-1"><a class="header-anchor" href="#文本样式" aria-hidden="true">#</a> 文本样式</h2><h3 id="文本装饰-text-decoration" tabindex="-1"><a class="header-anchor" href="#文本装饰-text-decoration" aria-hidden="true">#</a> 文本装饰 text-decoration</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 无装饰线（默认） */</span>
<span class="token property">text-decoration-line</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

<span class="token comment">/* 下划线 */</span>
<span class="token property">text-decoration-line</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>

<span class="token comment">/* 上划线 */</span>
<span class="token property">text-decoration-line</span><span class="token punctuation">:</span> overline<span class="token punctuation">;</span>

<span class="token comment">/* 删除线 */</span>
<span class="token property">text-decoration-line</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>


<span class="token comment">/* 装饰线颜色 */</span>
<span class="token property">text-decoration-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>


<span class="token comment">/* 实线 */</span>
<span class="token property">text-decoration-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>

<span class="token comment">/* 双实线 */</span>
<span class="token property">text-decoration-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>

<span class="token comment">/* 虚线 */</span>
<span class="token property">text-decoration-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>

<span class="token comment">/* 断续点 */</span>
<span class="token property">text-decoration-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span>

<span class="token comment">/* 波浪线 */</span>
<span class="token property">text-decoration-style</span><span class="token punctuation">:</span> wavy<span class="token punctuation">;</span>


<span class="token comment">/* 复合属性 */</span>
<span class="token property">text-decoration</span><span class="token punctuation">:</span> underline red solid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本阴影-text-shadow" tabindex="-1"><a class="header-anchor" href="#文本阴影-text-shadow" aria-hidden="true">#</a> 文本阴影 text-shadow</h3><p>offset-x &gt; offset-y &gt; blur-radius &gt; color</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">text-shadow</span><span class="token punctuation">:</span> 1px 1px 2px black<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>offset-x：水平方向的偏移量（必要），正数向右，负数向左</p></li><li><p>offset-y：垂直方向的偏移量（必要），正数向下，负数向上</p></li><li><p>blur-radius：模糊距离</p></li><li><p>color：阴影颜色</p></li></ul><h3 id="文本换行-white-space" tabindex="-1"><a class="header-anchor" href="#文本换行-white-space" aria-hidden="true">#</a> 文本换行 white-space</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 将连续的多个空格变成一个空格，文本溢出则换行（默认） */</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>

<span class="token comment">/* 禁止文本换行 */</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>

<span class="token comment">/* 保留空格 */</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本转换-text-transform" tabindex="-1"><a class="header-anchor" href="#文本转换-text-transform" aria-hidden="true">#</a> 文本转换 text-transform</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 所有字母大写 */</span>
<span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>

<span class="token comment">/* 所有字母小写 */</span>
<span class="token property">text-transform</span><span class="token punctuation">:</span> lowercase<span class="token punctuation">;</span>

<span class="token comment">/* 首字母大写 */</span>
<span class="token property">text-transform</span><span class="token punctuation">:</span> capitalize<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="背景样式" tabindex="-1"><a class="header-anchor" href="#背景样式" aria-hidden="true">#</a> 背景样式</h2><h3 id="背景定位-background-position" tabindex="-1"><a class="header-anchor" href="#背景定位-background-position" aria-hidden="true">#</a> 背景定位 background-position</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 位于左上角（默认） */</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>

<span class="token comment">/* 水平坐标, 垂直坐标 */</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> 20px 50px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景填充-background-repeat" tabindex="-1"><a class="header-anchor" href="#背景填充-background-repeat" aria-hidden="true">#</a> 背景填充 background-repeat</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 填充整个页面（默认） */</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat<span class="token punctuation">;</span>

<span class="token comment">/* 横向填充 */</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>

<span class="token comment">/* 纵向填充 */</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-y<span class="token punctuation">;</span>

<span class="token comment">/* 不填充 */</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景大小-background-size" tabindex="-1"><a class="header-anchor" href="#背景大小-background-size" aria-hidden="true">#</a> 背景大小 background-size</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 数值 */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 300px 200px<span class="token punctuation">;</span>

<span class="token comment">/* 等比例缩放到完全覆盖容器 */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>

<span class="token comment">/* 等比例缩放到与容器宽高相等 */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景原点-background-origin" tabindex="-1"><a class="header-anchor" href="#背景原点-background-origin" aria-hidden="true">#</a> 背景原点 background-origin</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 背景原点在内边距左上角（默认） */</span>
<span class="token property">background-origin</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>

<span class="token comment">/* 背景原点在边框左上角 */</span>
<span class="token property">background-origin</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>

<span class="token comment">/* 背景原点在内容区左上角 */</span>
<span class="token property">background-origin</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景裁剪-background-clip" tabindex="-1"><a class="header-anchor" href="#背景裁剪-background-clip" aria-hidden="true">#</a> 背景裁剪 background-clip</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 背景图在边框以内（默认） */</span>
<span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>

<span class="token comment">/* 背景图在内边距以内 */</span>
<span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>

<span class="token comment">/* 背景图在内容区以内 */</span>
<span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表样式" tabindex="-1"><a class="header-anchor" href="#列表样式" aria-hidden="true">#</a> 列表样式</h2><h3 id="标号类型-list-style-type" tabindex="-1"><a class="header-anchor" href="#标号类型-list-style-type" aria-hidden="true">#</a> 标号类型 list-style-type</h3><p>无序列表</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 实心圆（默认） */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> disc<span class="token punctuation">;</span>

<span class="token comment">/* 无标记 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

<span class="token comment">/* 空心圆 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> circle<span class="token punctuation">;</span>

<span class="token comment">/* 实心方块 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> square<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有序列表</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 阿拉伯数字（默认） */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> decimal<span class="token punctuation">;</span>

<span class="token comment">/* 小写罗马数字 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-roman<span class="token punctuation">;</span>

<span class="token comment">/* 大写罗马数字 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-roman<span class="token punctuation">;</span>

<span class="token comment">/* 小写英文字母 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-alpha<span class="token punctuation">;</span>

<span class="token comment">/* 大写英文字母 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-alpha<span class="token punctuation">;</span>

<span class="token comment">/* 小写希腊字母 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-Greek<span class="token punctuation">;</span>

<span class="token comment">/* 大写拉丁字母 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-latin<span class="token punctuation">;</span>

<span class="token comment">/* 小写拉丁字母 */</span>
<span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-latin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标号位置-list-style-position" tabindex="-1"><a class="header-anchor" href="#标号位置-list-style-position" aria-hidden="true">#</a> 标号位置 list-style-position</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 标号在列表区域内（默认） */</span>
<span class="token property">list-style-position</span><span class="token punctuation">:</span> inside<span class="token punctuation">;</span>

<span class="token comment">/* 标号在列表区域外 */</span>
<span class="token property">list-style-position</span><span class="token punctuation">:</span> outside<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标号图像-list-style-image" tabindex="-1"><a class="header-anchor" href="#标号图像-list-style-image" aria-hidden="true">#</a> 标号图像 list-style-image</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">list-style-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;http://baidu.baike.com&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="过渡动画" tabindex="-1"><a class="header-anchor" href="#过渡动画" aria-hidden="true">#</a> 过渡动画</h2><h3 id="过渡-transition" tabindex="-1"><a class="header-anchor" href="#过渡-transition" aria-hidden="true">#</a> 过渡 transition</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 单个属性写法 */</span>
<span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s ease 0.2s<span class="token punctuation">;</span>

<span class="token comment">/* 多个属性写法 */</span>
<span class="token property">transition</span><span class="token punctuation">:</span> width 0.5s ease 0.2s<span class="token punctuation">,</span> height 0.5s ease 0.2s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>transition-property：设置需要过渡的 CSS 属性</p></li><li><p>transition-duration：过渡执行时间</p></li><li><p>transition-timing-function：速度曲线函数</p><ul><li><p>ease：逐渐变慢（默认）</p></li><li><p>linear：匀速</p></li><li><p>ease-in：加速</p></li><li><p>ease-out：减速</p></li><li><p>ease-in-out：先加速，再减速</p></li></ul></li><li><p>transition-delay：过渡延迟时间</p></li></ul><h3 id="动画-animation" tabindex="-1"><a class="header-anchor" href="#动画-animation" aria-hidden="true">#</a> 动画 animation</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> move 2s linear 1s infinite alternate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>animation-name：动画（关键帧）名称</p></li><li><p>animation-duration：动画执行时间</p></li><li><p>animation-timing-function：速度曲线函数</p></li><li><p>animation-delay：动画延迟时间</p></li><li><p>animation-iteration-count：动画执行次数</p><ul><li>infinite：无限次</li></ul></li><li><p>animation-direction：动画方向</p><ul><li>alternate：来回播放</li></ul></li><li><p>animation-play-state：动画的播放和暂停</p><ul><li><p>running：播放动画</p></li><li><p>paused：暂停动画</p></li></ul></li><li><p>animation-fill-mode：动画开始和结束状态</p><ul><li><p>none：动画等待时和动画结束后，不会对元素的样式产生改变</p></li><li><p>forwards：动画结束后，元素的样式为动画的最后一帧</p></li><li><p>backwards：在动画等待时间内，元素的样式为动画的第一帧</p></li><li><p>both：在动画等待时和动画结束后，元素的样式分别为动画第一帧和最后一帧</p></li></ul></li></ul><h2 id="弹性布局" tabindex="-1"><a class="header-anchor" href="#弹性布局" aria-hidden="true">#</a> 弹性布局</h2><h3 id="主轴方向-flex-direction" tabindex="-1"><a class="header-anchor" href="#主轴方向-flex-direction" aria-hidden="true">#</a> 主轴方向 flex-direction</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 水平向右 */</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>

<span class="token comment">/* 水平向左 */</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> row-reverse<span class="token punctuation">;</span>

<span class="token comment">/* 垂直向下 */</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>

<span class="token comment">/* 垂直向上 */</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> column-reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主轴对齐-justify-content" tabindex="-1"><a class="header-anchor" href="#主轴对齐-justify-content" aria-hidden="true">#</a> 主轴对齐 justify-content</h3><p>弹性元素在主轴的排列方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 弹性元素从主轴起始位置开始排列（默认） */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素居中对齐 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素从主轴结束位置开始排列 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素均匀排列, 首个弹性元素位于主轴起始位置, 最后一个弹性元素位于主轴结束位置 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素均匀排列, 每个弹性元素周围分配相同的空间 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素均匀排列, 每个弹性元素之间的间隔相同 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侧轴对齐-align-items" tabindex="-1"><a class="header-anchor" href="#侧轴对齐-align-items" aria-hidden="true">#</a> 侧轴对齐 align-items</h3><p>弹性元素在侧轴的排列方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 弹性元素未设置宽高时, 在侧轴方向上拉伸至撑满弹性容器（默认） */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素从侧轴起始位置开始排列 */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素居中排列 */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素从侧轴结束位置开始排列 */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素以基线对齐 */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侧轴对齐-align-content" tabindex="-1"><a class="header-anchor" href="#侧轴对齐-align-content" aria-hidden="true">#</a> 侧轴对齐 align-content</h3><p>换行的弹性元素在侧轴的排列方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 弹性元素从侧轴起始位置开始排列（默认） */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素居中排列 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素从侧轴结束位置开始排列 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素均匀排列, 首个弹性元素位于侧轴起始位置, 最后一个弹性元素位于侧轴结束位置 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素均匀排列, 每个弹性元素周围分配相同的空间 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素均匀排列, 每个弹性元素之间的间隔相同 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="换行排列-flex-wrap" tabindex="-1"><a class="header-anchor" href="#换行排列-flex-wrap" aria-hidden="true">#</a> 换行排列 flex-wrap</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 不换行（默认） */</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>

<span class="token comment">/* 溢出换行 */</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>

<span class="token comment">/* 换行并使侧轴反向 */</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap-reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合属性-flex-flow" tabindex="-1"><a class="header-anchor" href="#复合属性-flex-flow" aria-hidden="true">#</a> 复合属性 flex-flow</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 主轴方向 换行排列 */</span>
<span class="token property">flex-flow</span><span class="token punctuation">:</span> column wrap<span class="token punctuation">;</span>

<span class="token comment">/* 等价于 */</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侧轴对齐-align-self" tabindex="-1"><a class="header-anchor" href="#侧轴对齐-align-self" aria-hidden="true">#</a> 侧轴对齐 align-self</h3><p>单个弹性元素在侧轴的排列方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 弹性元素未设置宽高时, 在侧轴方向上拉伸至撑满弹性容器（默认） */</span>
<span class="token property">align-self</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素从侧轴起始位置开始排列 */</span>
<span class="token property">align-self</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素居中排列 */</span>
<span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素从侧轴结束位置开始排列 */</span>
<span class="token property">align-self</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>

<span class="token comment">/* 弹性元素以基线对齐 */</span>
<span class="token property">align-self</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="富余空间-flex-grow" tabindex="-1"><a class="header-anchor" href="#富余空间-flex-grow" aria-hidden="true">#</a> 富余空间 flex-grow</h3><p>给弹性元素按比例分配富余空间，默认为 0，表示不分配。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* 100px */</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> <span class="token comment">/* 200px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="收缩规则-flex-shrink" tabindex="-1"><a class="header-anchor" href="#收缩规则-flex-shrink" aria-hidden="true">#</a> 收缩规则 flex-shrink</h3><p>按比例压缩弹性元素，默认为 1，表示等比例压缩。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 默认等比例压缩 */</span>
<span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

<span class="token comment">/* 不压缩 */</span>
<span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基准宽度-flex-basis" tabindex="-1"><a class="header-anchor" href="#基准宽度-flex-basis" aria-hidden="true">#</a> 基准宽度 flex-basis</h3><p>弹性元素被压缩时的基准宽度，默认为 auto。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container div:nth-child(1)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">/* 125px */</span>
<span class="token punctuation">}</span>

<span class="token selector">.container div:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">/* 250px */</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container div:nth-child(3)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">/* 125px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合属性-flex" tabindex="-1"><a class="header-anchor" href="#复合属性-flex" aria-hidden="true">#</a> 复合属性 flex</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 弹性元素等比例分配富余空间或等比例压缩，且被压缩时的基准宽度为 0 */</span>
<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

<span class="token comment">/* 等价于 */</span>
<span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token property">flex-basis</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本居中" tabindex="-1"><a class="header-anchor" href="#文本居中" aria-hidden="true">#</a> 文本居中</h2><h3 id="单行文本垂直居中" tabindex="-1"><a class="header-anchor" href="#单行文本垂直居中" aria-hidden="true">#</a> 单行文本垂直居中</h3><p>将容器的 <code>line-height</code> 设置与 <code>height</code> 相等。</p><p>原理：给块元素设置 <code>line-height</code> 就是设置该元素内部每个行框的高度。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>单行文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将容器内部的行内元素的 <code>line-height</code> 设置与容器的 <code>height</code> 相等。</p><p>原理：给行内元素设置 <code>line-height</code> 就是设置该元素所在的行框的高度。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token selector">.box span</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>单行文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行文本垂直居中" tabindex="-1"><a class="header-anchor" href="#多行文本垂直居中" aria-hidden="true">#</a> 多行文本垂直居中</h3><p>将容器的 <code>line-height</code> 设置与 <code>height</code> 相等；</p><p>将容器内的行内元素转换为行内块元素，并为其设置 <code>line-height</code> 与 <code>vertical-align: middle;</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.box .content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    据央视《新闻联播》报道，当地时间2月21日中午.......
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元素居中" tabindex="-1"><a class="header-anchor" href="#元素居中" aria-hidden="true">#</a> 元素居中</h2><h3 id="块元素水平居中" tabindex="-1"><a class="header-anchor" href="#块元素水平居中" aria-hidden="true">#</a> 块元素水平居中</h3><p>给块元素设置宽度，并将水平方向的 margin 设置为 auto。</p><p>原理：浏览器会将 <code>margin-right</code> 设置为 auto，使 <code>margin-left</code> = <code>margin-right</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 设置宽度 */</span>
<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>

<span class="token comment">/* 使元素的左右外边距相等 */</span>
<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素水平垂直居中-定位" tabindex="-1"><a class="header-anchor" href="#元素水平垂直居中-定位" aria-hidden="true">#</a> 元素水平垂直居中（定位）</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.inner</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.inner</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素水平垂直居中-弹性布局" tabindex="-1"><a class="header-anchor" href="#元素水平垂直居中-弹性布局" aria-hidden="true">#</a> 元素水平垂直居中（弹性布局）</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.outer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本溢出" tabindex="-1"><a class="header-anchor" href="#文本溢出" aria-hidden="true">#</a> 文本溢出</h2><h3 id="单行文本溢出" tabindex="-1"><a class="header-anchor" href="#单行文本溢出" aria-hidden="true">#</a> 单行文本溢出</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 文本在一行内显示 */</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>

<span class="token comment">/* 隐藏溢出部分 */</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

<span class="token comment">/* 用省略号代替溢出文本 */</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行文本溢出" tabindex="-1"><a class="header-anchor" href="#多行文本溢出" aria-hidden="true">#</a> 多行文本溢出</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 隐藏溢出部分 */</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  
<span class="token comment">/* 用省略号代替溢出文本 */</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  
<span class="token comment">/* 非汉字强制换行 */</span>
<span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
  
<span class="token comment">/* 设置为弹性容器 */</span>
<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  
<span class="token comment">/* 弹性容器的排列方式: 垂直排列 */</span>
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  
<span class="token comment">/* 控制多行文本的显示行数 */</span>
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h2><h3 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 在屏幕上, 并且最小宽度为 900px 时（屏幕宽度大于 900px）的样式 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem 3rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>type：媒体类型</p><ul><li><p>all：用于所有设备</p></li><li><p>print：用于打印机</p></li><li><p>screen：用于屏幕</p></li></ul></li><li><p>feature：媒体特性</p><ul><li><p>width：宽度</p></li><li><p>min-width：最小宽度</p></li><li><p>max-width：最大宽度</p></li></ul></li></ul><h3 id="引入资源" tabindex="-1"><a class="header-anchor" href="#引入资源" aria-hidden="true">#</a> 引入资源</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 在屏幕上, 并且最小宽度为 320px 时（屏幕宽度大于 320px）引入资源 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen and (min-width: 320px)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动端适配" tabindex="-1"><a class="header-anchor" href="#移动端适配" aria-hidden="true">#</a> 移动端适配</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/* PC */</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">@part<span class="token punctuation">:</span></span> 10<span class="token punctuation">;</span>

<span class="token comment">/* 320 iPhone 5 */</span>
<span class="token atrule">@media screen and <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 320px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 320px <span class="token operator">/</span> <span class="token variable">@part</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 375 iPhone 6/7/8 */</span>
<span class="token atrule">@media screen and <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 375px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 375px <span class="token operator">/</span> <span class="token variable">@part</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ...</span>

<span class="token atrule">@media screen and <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 750px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 750px <span class="token operator">/</span> <span class="token variable">@part</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用阈值" tabindex="-1"><a class="header-anchor" href="#常用阈值" aria-hidden="true">#</a> 常用阈值</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 超小屏幕 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 小屏幕 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 540px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 中等屏幕 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 720px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 大屏幕 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 超大屏幕 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1140px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a> Bootstrap</h2><h3 id="栅格系统" tabindex="-1"><a class="header-anchor" href="#栅格系统" aria-hidden="true">#</a> 栅格系统</h3>`,117),d={href:"https://v5.bootcss.com/docs/layout/containers/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://v5.bootcss.com/docs/layout/grid/",target:"_blank",rel:"noopener noreferrer"},v=t(`<table><thead><tr><th style="text-align:center;">xs</th><th style="text-align:center;">sm</th><th style="text-align:center;">md</th><th style="text-align:center;">lg</th><th style="text-align:center;">xl</th><th style="text-align:center;">xxl</th></tr></thead><tbody><tr><td style="text-align:center;">&lt;576px</td><td style="text-align:center;">&gt;=576px</td><td style="text-align:center;">≥768px</td><td style="text-align:center;">≥992px</td><td style="text-align:center;">≥1200px</td><td style="text-align:center;">≥1400px</td></tr><tr><td style="text-align:center;">None</td><td style="text-align:center;">540px</td><td style="text-align:center;">720px</td><td style="text-align:center;">960px</td><td style="text-align:center;">1140px</td><td style="text-align:center;">1320px</td></tr><tr><td style="text-align:center;"><code>.col-</code></td><td style="text-align:center;"><code>.col-sm-</code></td><td style="text-align:center;"><code>.col-md-</code></td><td style="text-align:center;"><code>.col-lg-</code></td><td style="text-align:center;"><code>.col-xl-</code></td><td style="text-align:center;"><code>.col-xxl-</code></td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-lg-3 col-md-4 col-sm-6 col-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-lg-3 col-md-4 col-sm-6 col-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-lg-3 col-md-4 col-sm-6 col-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-lg-3 col-md-4 col-sm-6 col-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h2><h3 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h3><p>使用 Less 提供的嵌套语法代替 CSS 层叠。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>

  &amp;<span class="token punctuation">:</span>hover <span class="token comment">/* &amp; =&gt; container */</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.inner</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>Less 可以定义变量。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@w<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token variable">@h<span class="token punctuation">:</span></span> <span class="token variable">@w</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插值语法。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@my-selector<span class="token punctuation">:</span></span> .container<span class="token punctuation">;</span>
<span class="token variable">@my-url<span class="token punctuation">:</span></span> <span class="token string">&quot;1.png&quot;</span><span class="token punctuation">;</span>

<span class="token selector">@{my-selector}</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./img/@{my-url}&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加法运算，算术运算符在加法运算之前会进行单位转换。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@a<span class="token punctuation">:</span></span> 100<span class="token punctuation">;</span>
<span class="token variable">@b<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@a</span> <span class="token operator">+</span> <span class="token variable">@b</span><span class="token punctuation">;</span> <span class="token comment">/* 120px */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>减法运算，算术运算符在减法运算之前会进行单位转换。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@a<span class="token punctuation">:</span></span> 100<span class="token punctuation">;</span>
<span class="token variable">@b<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@a</span> <span class="token operator">-</span> <span class="token variable">@b</span><span class="token punctuation">;</span> <span class="token comment">/* 80px */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>乘法运算。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@a<span class="token punctuation">:</span></span> 100<span class="token punctuation">;</span>
<span class="token variable">@b<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@a</span> <span class="token operator">*</span> <span class="token variable">@b</span><span class="token punctuation">;</span> <span class="token comment">/* 2000px */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除法运算。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@a<span class="token punctuation">:</span></span> 100<span class="token punctuation">;</span>
<span class="token variable">@b<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@a</span> <span class="token operator">/</span> <span class="token variable">@b</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 5px */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> 混入</h3><p>混入可以将一组定义属性运用在选择器中。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.common()</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>携带参数的混入。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>.<span class="token function">common</span><span class="token punctuation">(</span><span class="token variable">@w</span><span class="token punctuation">,</span> <span class="token variable">@h</span><span class="token punctuation">,</span> <span class="token variable">@c<span class="token punctuation">:</span></span> red <span class="token comment">/* 默认参数 */</span><span class="token selector">)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@c</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 200px<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问其他作用域中的混入函数。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token selector">.common()</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.container .common</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模式匹配，可以根据传递不同的参数更改 mixin 函数。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.common(<span class="token variable">@_</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.common(b)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.common(r)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载，可以根据传递参数的个数更改 mixin 函数。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.common(<span class="token variable">@a</span>, <span class="token variable">@b</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@a</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@b</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.common(<span class="token variable">@a</span>, <span class="token variable">@b</span>, <span class="token variable">@c</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@a</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@b</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@c</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 200px<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="守卫" tabindex="-1"><a class="header-anchor" href="#守卫" aria-hidden="true">#</a> 守卫</h3><p>类似于 if...else 判断。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>.<span class="token function">common</span><span class="token punctuation">(</span><span class="token variable">@num</span><span class="token punctuation">)</span> when <span class="token punctuation">(</span><span class="token variable">@num</span>&gt;=100<span class="token punctuation">)</span> and <span class="token punctuation">(</span><span class="token variable">@num</span>&lt;=200<span class="token punctuation">)</span> <span class="token comment">/* 与 */</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

.<span class="token function">common</span><span class="token punctuation">(</span><span class="token variable">@num</span><span class="token punctuation">)</span> when <span class="token punctuation">(</span><span class="token variable">@num</span>&lt;100<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">@num</span>&gt;200<span class="token punctuation">)</span> <span class="token comment">/* 或 */</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>120<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span>210<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p>Less 提供了预定义函数。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@flag<span class="token punctuation">:</span></span> <span class="token function">boolean</span><span class="token punctuation">(</span>5 &gt; 3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">@flag</span><span class="token punctuation">)</span> 100px<span class="token punctuation">,</span> 200px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 100px */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">@a<span class="token punctuation">:</span></span> 200px<span class="token punctuation">;</span>
<span class="token variable">@b<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">ceil</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">@a</span> <span class="token operator">/</span> <span class="token variable">@b</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 67px */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">@a</span> <span class="token operator">/</span> <span class="token variable">@b</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 66px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://necolas.github.io/normalize.css/8.0.1/normalize.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,38);function k(m,b){const s=i("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[n("a",d,[a("Containers · Bootstrap v5 中文文档 v5.3 | Bootstrap 中文网 (bootcss.com)"),e(s)])]),n("p",null,[n("a",r,[a("Grid system · Bootstrap v5 中文文档 v5.3 | Bootstrap 中文网 (bootcss.com)"),e(s)])]),v])}const x=p(o,[["render",k],["__file","CSS.html.vue"]]);export{x as default};
