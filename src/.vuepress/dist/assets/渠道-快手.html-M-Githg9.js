import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as n,b as s,e as c,d as l}from"./app-mJH2tz0N.js";const i={},u=n("h2",{id:"项目详情",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目详情","aria-hidden":"true"},"#"),s(" 项目详情")],-1),r={href:"http://ks-channel.shangboyx.com/",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>账号：快手渠道测试001</p><p>密码：123456</p><h2 id="封装-usepagination" tabindex="-1"><a class="header-anchor" href="#封装-usepagination" aria-hidden="true">#</a> 封装 usePagination</h2><p>分页器 hooks，为了方便管理 <code>el-pagination</code> 组件需要用到的 total, current-page, page-size 数据，以及 current-change, size-change 事件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 总条数</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// 当前页</span>
<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// 每页条数</span>
<span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">usePagination</span><span class="token punctuation">(</span>
  handle<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  initTotal<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  initCurrent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  initSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>initTotal<span class="token punctuation">)</span> total<span class="token punctuation">.</span>value <span class="token operator">=</span> initTotal
  <span class="token keyword">if</span> <span class="token punctuation">(</span>initCurrent<span class="token punctuation">)</span> current<span class="token punctuation">.</span>value <span class="token operator">=</span> initCurrent
  <span class="token keyword">if</span> <span class="token punctuation">(</span>initSize<span class="token punctuation">)</span> size<span class="token punctuation">.</span>value <span class="token operator">=</span> initSize
  
  <span class="token comment">// 当前页改变时</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleCurrentChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>nowCurrent<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    current<span class="token punctuation">.</span>value <span class="token operator">=</span> nowCurrent <span class="token comment">// 更新当前页</span>
    
    <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 每页条数改变时</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>nowSize<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    size<span class="token punctuation">.</span>value <span class="token operator">=</span> nowSize <span class="token comment">// 更新每页条数</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>total<span class="token punctuation">.</span>value <span class="token operator">/</span> size<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current<span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>total<span class="token punctuation">.</span>value <span class="token operator">/</span> size<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    pagination<span class="token operator">:</span> <span class="token punctuation">{</span> total<span class="token punctuation">,</span> current<span class="token punctuation">,</span> size <span class="token punctuation">}</span><span class="token punctuation">,</span>
    handleCurrentChange<span class="token punctuation">,</span>
    handleSizeChange
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中使用。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> usePagination <span class="token keyword">from</span> <span class="token string">&quot;@/hooks/usePagination&quot;</span>
  
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pagination</span><span class="token operator">:</span> <span class="token punctuation">{</span> total <span class="token comment">/* 总条数 */</span><span class="token punctuation">,</span> current <span class="token comment">/* 当前页 */</span><span class="token punctuation">,</span> size <span class="token comment">/* 每页条数 */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    handleCurrentChange<span class="token punctuation">,</span>
    handleSizeChange
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePagination</span><span class="token punctuation">(</span>
    getMasterInfo <span class="token comment">/* 获取达人列表 */</span>
  <span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-pagination</span>
    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total, sizes, prev, pager, next, jumper<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCurrentChange<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@size-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSizeChange<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(v,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("在线地址："),n("a",r,[s("http://ks-channel.shangboyx.com/"),c(a)])]),k])}const h=t(i,[["render",d],["__file","渠道-快手.html.vue"]]);export{h as default};
