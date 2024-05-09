import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-8K1XkiCW.js";const p={},e=t(`<h2 id="uniqwith" tabindex="-1"><a class="header-anchor" href="#uniqwith" aria-hidden="true">#</a> uniqWith</h2><p>合并数组对象并去重。可以根据对象的某个字段去重，也就是去除数组中重复字段值的对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span>

<span class="token keyword">type</span> <span class="token class-name">ForUniq</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> forUniq1<span class="token operator">:</span> ForUniq<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> forUniq2<span class="token operator">:</span> ForUniq<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// 合并 forUniq1 和 forUniq2，并去除重复 ID 的项，返回去重后的结果</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">uniqWith</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token operator">...</span>forUniq1<span class="token punctuation">,</span> <span class="token operator">...</span>forUniq2<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>id <span class="token operator">===</span> b<span class="token punctuation">.</span>id
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","Lodash.html.vue"]]);export{d as default};
