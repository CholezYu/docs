<template><div><h1 id="数据结构与算法" tabindex="-1"><a class="header-anchor" href="#数据结构与算法" aria-hidden="true">#</a> 数据结构与算法</h1>
<h2 id="算法概述" tabindex="-1"><a class="header-anchor" href="#算法概述" aria-hidden="true">#</a> 算法概述</h2>
<h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3>
<p>比较次数与数组长度 n 的关系。</p>
<p>$O(1)$ &lt; $O(log_2n)$ &lt; $O(n)$ &lt; $O(nlog_2n)$ &lt; $O(n^2)$ &lt; $O(n^3)$ &lt; $O(2^n)$ &lt; $O(n!)$ &lt; $O(n^n)$</p>
<h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h3>
<p>消耗内存与数组长度 n 的关系。</p>
<h3 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性" aria-hidden="true">#</a> 稳定性</h3>
<p>如果 A 和 B 的值相等，但排序后 A、B 的次序保持不变，则这种算法是稳定的</p>
<h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h2>
<table>
<thead>
<tr>
<th>排序方式</th>
<th>时间复杂度（平均）</th>
<th>时间复杂度（最坏）</th>
<th>时间复杂度（最好）</th>
<th>空间复杂度</th>
<th>稳定性</th>
</tr>
</thead>
<tbody>
<tr>
<td>插入排序</td>
<td>$O(n^2)$</td>
<td>$O(n^2)$</td>
<td>$O(n)$</td>
<td>$O(1)$</td>
<td>稳定</td>
</tr>
<tr>
<td>希尔排序</td>
<td>$O(n^{1.3})$</td>
<td>$O(n^2)$</td>
<td>$O(n)$</td>
<td>$O(1)$</td>
<td>不稳定</td>
</tr>
<tr>
<td>选择排序</td>
<td>$O(n^2)$</td>
<td>$O(n^2)$</td>
<td>$O(n^2)$</td>
<td>$O(1)$</td>
<td>不稳定</td>
</tr>
<tr>
<td>堆排序</td>
<td>$O(nlog_2n)$</td>
<td>$O(nlog_2n)$</td>
<td>$O(nlog_2n)$</td>
<td>$O(1)$</td>
<td>不稳定</td>
</tr>
<tr>
<td>冒泡排序</td>
<td>$O(n^2)$</td>
<td>$O(n^2)$</td>
<td>$O(n)$</td>
<td>$O(1)$</td>
<td>稳定</td>
</tr>
<tr>
<td>快速排序</td>
<td>$O(nlog_2n)$</td>
<td>$O(n^2)$</td>
<td>$O(nlog_2n)$</td>
<td>$O(nlog_2n)$</td>
<td>不稳定</td>
</tr>
<tr>
<td>归并排序</td>
<td>$O(nlog_2n)$</td>
<td>$O(nlog_2n)$</td>
<td>$O(nlog_2n)$</td>
<td>$O(n)$</td>
<td>稳定</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>计数排序</td>
<td>$O(n+k)$</td>
<td>$O(n+k)$</td>
<td>$O(n+k)$</td>
<td>$O(n+k)$</td>
<td>稳定</td>
</tr>
<tr>
<td>桶排序</td>
<td>$O(n+k)$</td>
<td>$O(n^2)$</td>
<td>$O(n)$</td>
<td>$O(n+k)$</td>
<td>稳定</td>
</tr>
<tr>
<td>基数排序</td>
<td>$O(n*k)$</td>
<td>$O(n*k)$</td>
<td>$O(n*k)$</td>
<td>$O(n+k)$</td>
<td>稳定</td>
</tr>
</tbody>
</table>
<h3 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">84</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">67</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
      
      flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h3>
</div></template>


