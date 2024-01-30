import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-LtsGDlwd.js";const p={},t=e(`<h2 id="常用类型" tabindex="-1"><a class="header-anchor" href="#常用类型" aria-hidden="true">#</a> 常用类型</h2><h3 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface" aria-hidden="true">#</a> 接口 Interface</h3><p><strong>继承</strong>。interface 可以继承，并可以扩展一些属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SomeType</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AType</span> <span class="token keyword">extends</span> <span class="token class-name">SomeType</span> <span class="token punctuation">{</span>
  subject<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> student<span class="token operator">:</span> AType <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Minji&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  subject<span class="token operator">:</span> <span class="token string">&quot;TypeScript&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>索引签名</strong>。如果后端返回的字段太多了，而我们只需要其中几个，那么就可以使用索引签名。</p><p>如下，ResponseType 类型中只有 name 和 age 字段是必需的，其他字段就不再强校验了。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ResponseType</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// prop 可以为任意名称</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> response<span class="token operator">:</span> ResponseType <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Minji&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  sex<span class="token operator">:</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">,</span>
  subject<span class="token operator">:</span> <span class="token string">&quot;TypeScript&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>只读属性</strong>。常用于函数类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SomeType</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token keyword">readonly</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数-function" tabindex="-1"><a class="header-anchor" href="#函数-function" aria-hidden="true">#</a> 函数 Function</h3><p><strong>函数重载</strong>。根据参数的类型执行不同的函数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> nums<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token comment">// 重载</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>param<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>param<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// 实现</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>param<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> param <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>n <span class="token operator">=&gt;</span> n <span class="token operator">===</span> param<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>param<span class="token punctuation">)</span>
    <span class="token keyword">return</span> nums
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> nums
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义 this 的类型</strong>。必须在第一个参数定义 this 的类型，调用时忽略该参数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">OType</span> <span class="token punctuation">{</span>
  nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> OType<span class="token punctuation">,</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  nums<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> OType<span class="token punctuation">,</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类-class" tabindex="-1"><a class="header-anchor" href="#类-class" aria-hidden="true">#</a> 类 Class</h3><p><strong>类型约束</strong>。对类进行约束，使该类的实例对象满足这个外部类型。implements 后面可以是 interface，也可以是一个类。</p><blockquote><p>super 原理：调用父类的 prototype.constructor.call()</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">OptionsType</span> <span class="token punctuation">{</span>
  el<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">VueType</span> <span class="token punctuation">{</span>
  options<span class="token operator">:</span> OptionsType
  <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// implements 约束 Class</span>
<span class="token keyword">class</span> <span class="token class-name">Vue</span> <span class="token keyword">implements</span> <span class="token class-name">VueType</span> <span class="token punctuation">{</span>
  options<span class="token operator">:</span> OptionsType
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>options<span class="token operator">:</span> OptionsType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化 ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>抽象类</strong>。通过 abstract 定义的类称为抽象类，抽象类不能被实例化。通过 abstract 定义的方法只能描述，不能实现。</p><p>继承抽象类的类，称为派生类，派生类可以被实例化。在派生类中需要对 abstract 定义的方法进行实现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  
  <span class="token keyword">abstract</span> <span class="token function">init</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">React</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token function">init</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元组-tuple" tabindex="-1"><a class="header-anchor" href="#元组-tuple" aria-hidden="true">#</a> 元组 Tuple</h3><p>元组类似于数组类型，并且它可以确切地知道包含多少个元素，以及这些元素的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> tup<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> tup<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span> <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举-enum" tabindex="-1"><a class="header-anchor" href="#枚举-enum" aria-hidden="true">#</a> 枚举 Enum</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> ResponseCode <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><h3 id="函数泛型" tabindex="-1"><a class="header-anchor" href="#函数泛型" aria-hidden="true">#</a> 函数泛型</h3><p>我们希望一个函数可以支持多种类型的数据，但是又不想使用 any，那么我们可以使用泛型来创建这样可复用的函数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","TypeScript.html.vue"]]);export{d as default};
