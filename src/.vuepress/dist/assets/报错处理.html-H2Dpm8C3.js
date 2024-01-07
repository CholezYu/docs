import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-OwZzTjtF.js";const e={},p=t(`<h2 id="开启立即监听-响应式数据的引用问题" tabindex="-1"><a class="header-anchor" href="#开启立即监听-响应式数据的引用问题" aria-hidden="true">#</a> 开启立即监听，响应式数据的引用问题</h2><h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h3><p>我的需求是监听 tab 栏的变化，去请求不同的列表。并且需要在初始阶段就请求一次列表，所以需要开启立即监听。</p><blockquote><p>想省去 onMounted</p></blockquote><p>但是开启立即监听后，出现了 <code>Cannot access &#39;searchForm&#39; before initialization</code> 的报错。</p><p>这是因为在 watch hook 函数中引用了 searchForm 这个响应式数据，而该数据定义在 watch 后面，如果不开立即监听就没关系，一旦开启立即监听后，就会报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> tabName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;ON_SHELF&quot;</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> tabName<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  tabName <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>tabName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;ON_SHELF&quot;</span><span class="token operator">:</span>
        <span class="token function">getGoodsInfoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&quot;OFF_SHELF&quot;</span><span class="token operator">:</span>
        <span class="token comment">// 请求下架列表</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&quot;REJECTED&quot;</span><span class="token operator">:</span>
        <span class="token comment">// 请求拒绝列表</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&quot;IN_REVIEW&quot;</span><span class="token operator">:</span>
        <span class="token comment">// 请求审核列表</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> searchForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getGoodsInfoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">reqKSGoodsInfoList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>searchForm<span class="token punctuation">.</span>value <span class="token comment">// Cannot access &#39;searchForm&#39; before initialization</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    goodsInfoList<span class="token punctuation">.</span>value <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>这里将代码简化，做一个测试。响应式数据 a 定义在 watch 的下方，当在 watch hook 中引用该数据并开启立即监听时，出现了 <code>Cannot access &#39;a&#39; before initialization</code> 的报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> forListen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> forListen<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Cannot access &#39;a&#39; before initialization, </span>
  <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而将响应式数据 a 定义在 watch 的上方时，就不会出现这个报错，并打印了 a 的值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> forListen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> forListen<span class="token punctuation">.</span>value<span class="token punctuation">,</span> 
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 1</span>
  <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 a 是一个普通数据，而不是响应式数据。我们测试发现，即使将 a 定义在 watch 的下方，也没有出现报错，并且也打印了 a 的值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> forListen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> forListen<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 1</span>
  <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><p>使用 watch 的立即监听时，不能在 watch hook 中引用定义在其之后的响应式数据（ref，reactive）；</p><p>但是可以引用定义在该 watch 之后的普通数据。</p><p>如果 watch 不开启立即监听，那么就可以引用定义在该 watch 之后的响应式数据和普通数据。</p>`,18),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","报错处理.html.vue"]]);export{d as default};
