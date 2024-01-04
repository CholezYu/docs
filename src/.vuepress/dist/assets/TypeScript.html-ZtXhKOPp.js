import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-mJUQYOcc.js";const t={},p=e(`<h2 id="常用类型" tabindex="-1"><a class="header-anchor" href="#常用类型" aria-hidden="true">#</a> 常用类型</h2><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3><p>定义一个 Type。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><p>定义一个 Interface。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承一个 Interface，并扩展一些属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  subject<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> student<span class="token operator">:</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  subject<span class="token operator">:</span> <span class="token string">&quot;TypeScript&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元组类型" tabindex="-1"><a class="header-anchor" href="#元组类型" aria-hidden="true">#</a> 元组类型</h3><p>元组类似于数组类型，并且它可以确切地知道包含多少个元素，以及这些元素的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> tup<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> tup<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span> <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> ResponseCode <span class="token punctuation">{</span>
  <span class="token constant">OK</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token constant">NOT_FOUND</span> <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">,</span>
  <span class="token constant">PASSWORD_ERROR</span> <span class="token operator">=</span> <span class="token number">10001</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

ResponseCode<span class="token punctuation">[</span><span class="token constant">OK</span><span class="token punctuation">]</span> <span class="token comment">// 100</span>
ResponseCode<span class="token punctuation">[</span><span class="token constant">NOT_FOUND</span><span class="token punctuation">]</span> <span class="token comment">// 404</span>
ResponseCode<span class="token punctuation">[</span><span class="token constant">PASSWORD_ERROR</span><span class="token punctuation">]</span> <span class="token comment">// 10001</span>

ResponseCode<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token comment">// OK</span>
ResponseCode<span class="token punctuation">[</span><span class="token number">404</span><span class="token punctuation">]</span> <span class="token comment">// NOT_FOUND</span>
ResponseCode<span class="token punctuation">[</span><span class="token number">10001</span><span class="token punctuation">]</span> <span class="token comment">// PASSWORD_ERROR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h3><p>由多个类型组成的一个组合类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> timer<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
timer <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h3><p>合并两个类型，得到一个新类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Student</span> <span class="token operator">=</span> Person <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
  subject<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-vs-interface" tabindex="-1"><a class="header-anchor" href="#type-vs-interface" aria-hidden="true">#</a> Type vs Interface</h2><h3 id="合并或继承" tabindex="-1"><a class="header-anchor" href="#合并或继承" aria-hidden="true">#</a> 合并或继承</h3><p>通过交叉类型合并一个 Type。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Student</span> <span class="token operator">=</span> Person <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
  subject<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过接口继承一个 Interface。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  subject<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可扩展性" tabindex="-1"><a class="header-anchor" href="#可扩展性" aria-hidden="true">#</a> 可扩展性</h3><p>Type 定义后不能更改。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// Error: Duplicate identifier &#39;Person&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  subject<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Interface 可以扩展新字段（并不是覆盖）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  subject<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><h3 id="函数泛型" tabindex="-1"><a class="header-anchor" href="#函数泛型" aria-hidden="true">#</a> 函数泛型</h3><p>我们希望一个函数可以支持多种类型的数据，但是又不想使用 any，那么我们可以使用泛型来创建这样可复用的函数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装一个 axios 函数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">axios</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token generic-function"><span class="token function">axios</span><span class="token generic class-name"><span class="token operator">&lt;</span>Data<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:8888&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口泛型" tabindex="-1"><a class="header-anchor" href="#接口泛型" aria-hidden="true">#</a> 接口泛型</h3><p>如果类型需要在使用接口的时候传递，可以定义接口泛型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ResponseResult<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  data<span class="token operator">:</span> <span class="token constant">T</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Info</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  nickname<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> response<span class="token operator">:</span> ResponseResult<span class="token operator">&lt;</span>Info<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    nickname<span class="token operator">:</span> <span class="token string">&quot;cholez&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> response<span class="token operator">:</span> ResponseResult<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token number">5001</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">&quot;权限错误&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h3><p>约束传递的泛型必须是数组</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="工具类型" tabindex="-1"><a class="header-anchor" href="#工具类型" aria-hidden="true">#</a> 工具类型</h2><h3 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> Record</h3><p>定义对象类型时，指定其 key 和 value 的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Status</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;info&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;warning&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;danger&quot;</span>
  value<span class="token operator">:</span> <span class="token string">&quot;待审核&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;已上架&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;已拒绝&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;已下架&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token constant">STATUS</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> Status<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  inReview<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;待审核&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  onShelf<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;已上架&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  offShelf<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;danger&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;已拒绝&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  rejected<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;danger&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;已下架&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="omit" tabindex="-1"><a class="header-anchor" href="#omit" aria-hidden="true">#</a> Omit</h3><p>根据原有类型，生成一个新的类型，并删除某些字段。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  completed<span class="token operator">:</span> <span class="token builtin">boolean</span>
  createdAt<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&quot;description&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Clean room&quot;</span><span class="token punctuation">,</span>
  completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  createdAt<span class="token operator">:</span> <span class="token number">1615544252770</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承父类型，并修改某字段。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GoodsInfoItem</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  identity<span class="token operator">:</span> <span class="token builtin">number</span>
  contacts<span class="token operator">:</span> <span class="token builtin">string</span>
  skuList<span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// Interface GoodsInfoDetails incorrectly extends interface GoodsInfoItem.</span>
<span class="token comment">// Types of property skuList are incompatible.</span>
<span class="token comment">// Type object is not assignable to type null.</span>
<span class="token comment">// error: skuList 类型不兼容</span>
<span class="token keyword">interface</span> <span class="token class-name">GoodsInfoDetails</span> <span class="token keyword">extends</span> <span class="token class-name">GoodsInfoItem</span> <span class="token punctuation">{</span>
  skuList<span class="token operator">:</span> object
<span class="token punctuation">}</span>

<span class="token comment">// 使用 Omit 工具类型删除并重新声明 skuList 类型，然后继承</span>
<span class="token keyword">interface</span> <span class="token class-name">GoodsInfoDetails</span> <span class="token keyword">extends</span> <span class="token class-name">Omit<span class="token operator">&lt;</span>GoodsInfoItem<span class="token punctuation">,</span> <span class="token string">&quot;skuList&quot;</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  skuList<span class="token operator">:</span> <span class="token punctuation">{</span>
    skuId<span class="token operator">:</span> <span class="token builtin">number</span>
    skuPrice<span class="token operator">:</span> <span class="token builtin">number</span>
    skuStock<span class="token operator">:</span> <span class="token builtin">number</span>
    specification<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","TypeScript.html.vue"]]);export{d as default};
