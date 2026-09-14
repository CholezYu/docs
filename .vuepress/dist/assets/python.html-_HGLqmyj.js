import{_ as n,o as s,c as a,a as e}from"./app-jpoMalHI.js";const t={},i=e(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 参数说明
    Args:
        a (int): 位置参数
        b (int): 位置参数
        args (int): 可变位置参数
        kwargs (str | int): 可变关键字参数
    &quot;&quot;&quot;</span>

    args  <span class="token comment"># (3, 4, 5)</span>
    kwargs  <span class="token comment"># {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 22}</span>


func<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="global-关键字" tabindex="-1"><a class="header-anchor" href="#global-关键字" aria-hidden="true">#</a> global 关键字</h3><p>用于在函数中修改全局变量。</p><h3 id="nonlocal关键字" tabindex="-1"><a class="header-anchor" href="#nonlocal关键字" aria-hidden="true">#</a> nonlocal关键字</h3><p>声明在内层函数中使用外层函数定义的变量</p><p>在内层函数仅获取外层函数中定义变量的值,可以省略nonlocal声明</p><p>在内层函数中需要修改外层函数中定义变量的值,必须使用nonlocal关键字</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  x<span class="token operator">=</span><span class="token number">10</span>
  <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token operator">=</span><span class="token number">20</span>  <span class="token comment"># 定义一个新的局部变量并赋值为20</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  inner<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
outer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
  20  10
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  x<span class="token operator">=</span><span class="token number">10</span>
  <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">nonlocal</span> x  <span class="token comment"># 声明在inner函数中使用outer函数中的变量</span>
    x<span class="token operator">=</span><span class="token number">20</span>  <span class="token comment"># 将outer函数中的变量x的值改为20</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  inner<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
outer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
  20  20
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归函数" tabindex="-1"><a class="header-anchor" href="#递归函数" aria-hidden="true">#</a> 递归函数</h3><p>在一个函数内部通过调用自己来完成一个问题的求解</p><p>必须要有结束递归的条件</p><p>适合当问题规模较小时求解</p><h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h3><p>把函数作为参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">FunAdd</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> f<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">+</span>f<span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">Square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> x<span class="token operator">**</span><span class="token number">2</span>
<span class="token keyword">def</span> <span class="token function">Cube</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> x<span class="token operator">**</span><span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>FunAdd<span class="token punctuation">(</span>Square<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 计算3^2+(-5)^2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>FunAdd<span class="token punctuation">(</span>Cube<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 计算3^3+(-5)^3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambda函数" tabindex="-1"><a class="header-anchor" href="#lambda函数" aria-hidden="true">#</a> lambda函数</h3><p>匿名函数,不适用def定义函数的形式</p><p>实现比较简单的功能</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">FunAdd</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> f<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">+</span>f<span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>FunAdd<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 计算3^2+(-5)^2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>FunAdd<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token operator">**</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 计算3^3+(-5)^3</span>

fun<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token operator">**</span><span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fun<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><p>声明在一个函数中的函数,叫做闭包函数</p><p>定义在外层函数中但由内层函数使用的变量称为自由变量</p><p>外层函数必须返回内层函数的引用,这样每调用一次外层函数才会形成一个闭包</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
  y<span class="token operator">=</span><span class="token number">10</span>
  <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">:</span>
    nonloal x<span class="token punctuation">,</span>y
    <span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token operator">+</span>z
  <span class="token keyword">return</span> inner
f<span class="token operator">=</span>outer<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 闭包函数</span>
g<span class="token operator">=</span>outer<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>  <span class="token comment"># 闭包函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 即print(outer(5)(20))</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>g<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 即print(outer(50)(20))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h3><p>可以在不修改已有函数的情况下向已有函数中注入代码</p><p>一个装饰器可为多个函数注入代码,一个函数也可注入多个装饰器代码</p><p>实例: exercise/装饰器</p><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><h3 id="append" tabindex="-1"><a class="header-anchor" href="#append" aria-hidden="true">#</a> .append</h3><p>向列表尾部添加元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
ls  <span class="token comment"># =&gt; [2, 3, 4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> .extend</h3><p>扩展列表，将一个可迭代对象中的元素添加到列表中。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ls  <span class="token comment"># =&gt; [2, 3, 4, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> .insert</h3><p>在列表指定位置插入元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
ls  <span class="token comment"># =&gt; [2, 5, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pop" tabindex="-1"><a class="header-anchor" href="#pop" aria-hidden="true">#</a> .pop</h3><p>删除列表指定位置的元素，默认删除最后一个元素，返回被删除的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
ls  <span class="token comment"># =&gt; [2, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> .remove</h3><p>移除列表中首次匹配的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
ls  <span class="token comment"># =&gt; [3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> .clear</h3><p>清空列表。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
ls  <span class="token comment"># =&gt; []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> .reverse</h3><p>反转列表中的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>
ls  <span class="token comment"># =&gt; [4, 3, 2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> .sort</h3><p>将元素按 Unicode 升序排列，可以指定比较函数进行排序。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span>


ls <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Charlie&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

ls<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span>cmp_to_key<span class="token punctuation">(</span>compare<span class="token punctuation">)</span><span class="token punctuation">)</span>
ls  <span class="token comment">#  =&gt; [{&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 18}, {&#39;name&#39;: &#39;Bob&#39;, &#39;age&#39;: 25}, {&#39;name&#39;: &#39;Charlie&#39;, &#39;age&#39;: 16}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h2><p>元组是不可变类型，只能访问元素，不能进行修改。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

t<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span>  <span class="token comment"># TypeError: &#39;tuple&#39; object does not support item assignment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果元组中的元素是可变类型，那么可以对其进行修改。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

t<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
t  <span class="token comment"># =&gt; ([1, 2, 3], [1, 2, 3])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h2><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> .add</h3><p>向集合中添加一个元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span> <span class="token punctuation">}</span>

s<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span>
s  <span class="token comment"># =&gt; {&#39;2&#39;, &#39;4&#39;, &#39;5&#39;, &#39;3&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> .update</h3><p>将一个可迭代对象中的元素添加到集合中。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span> <span class="token punctuation">}</span>

s<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
s  <span class="token comment"># =&gt; {&#39;3&#39;, &#39;2&#39;, &#39;6&#39;, &#39;5&#39;, &#39;4&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove-1" tabindex="-1"><a class="header-anchor" href="#remove-1" aria-hidden="true">#</a> .remove</h3><p>移除集合中的指定元素，不存在则报错。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span> <span class="token punctuation">}</span>

s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># KeyError: 5</span>

s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
s  <span class="token comment"># =&gt; {&#39;2&#39;, &#39;4&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="discard" tabindex="-1"><a class="header-anchor" href="#discard" aria-hidden="true">#</a> .discard</h3><p>移除集合中的指定元素，不存在不会报错。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span> <span class="token punctuation">}</span>

s<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 不会报错</span>
s  <span class="token comment"># =&gt; {&#39;3&#39;, &#39;4&#39;, &#39;2&#39;}</span>

s<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
s  <span class="token comment"># =&gt; {&#39;2&#39;, &#39;4&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pop-1" tabindex="-1"><a class="header-anchor" href="#pop-1" aria-hidden="true">#</a> .pop</h3><p>随机删除集合中的一个元素，返回被删除的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span> <span class="token punctuation">}</span>

r <span class="token operator">=</span> s<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
r  <span class="token comment"># =&gt; &#39;4&#39;</span>
s  <span class="token comment"># =&gt; {&#39;2&#39;, &#39;3&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear-1" tabindex="-1"><a class="header-anchor" href="#clear-1" aria-hidden="true">#</a> .clear</h3><p>清空集合。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span> <span class="token punctuation">}</span>

s<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
s  <span class="token comment"># =&gt; set()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intersection" tabindex="-1"><a class="header-anchor" href="#intersection" aria-hidden="true">#</a> .intersection</h3><p>计算两个集合的交集，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span>

s1<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># =&gt; {3, 4}</span>
s1 <span class="token operator">&amp;</span> s1  <span class="token comment"># =&gt; {3, 4}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> .union</h3><p>计算两个集合的并集，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span>

s1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># =&gt; {1, 2, 3, 4, 5, 6}</span>
s1 <span class="token operator">|</span> s2  <span class="token comment"># =&gt; {1, 2, 3, 4, 5, 6}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> .difference</h3><p>计算两个集合的差集，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span>

s1<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># =&gt; {1, 2}</span>
s1 <span class="token operator">-</span> s2  <span class="token comment"># =&gt; {1, 2}</span>

s2<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span>  <span class="token comment"># =&gt; {5, 6}</span>
s2 <span class="token operator">-</span> s1  <span class="token comment"># =&gt; {5, 6}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symmetric-difference" tabindex="-1"><a class="header-anchor" href="#symmetric-difference" aria-hidden="true">#</a> .symmetric_difference</h3><p>计算两个集合的对称差集，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span>

s1<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># =&gt; {1, 2, 5, 6}</span>
s1 <span class="token operator">^</span> s2  <span class="token comment"># =&gt; {1, 2, 5, 6}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issubset" tabindex="-1"><a class="header-anchor" href="#issubset" aria-hidden="true">#</a> .issubset</h3><p>判断集合是否为另一个集合的子集。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span>

s1<span class="token punctuation">.</span>issubset<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># =&gt; True</span>
s1 <span class="token operator">&lt;=</span> s2  <span class="token comment"># =&gt; True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issuperset" tabindex="-1"><a class="header-anchor" href="#issuperset" aria-hidden="true">#</a> .issuperset</h3><p>判断集合是否为另一个集合的超集（父集）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span>

s1<span class="token punctuation">.</span>issuperset<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># =&gt; True</span>
s1 <span class="token operator">&gt;=</span> s2  <span class="token comment"># =&gt; True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isdisjoint" tabindex="-1"><a class="header-anchor" href="#isdisjoint" aria-hidden="true">#</a> .isdisjoint</h3><p>判断两个集合是否<strong>无</strong>交集。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span>

s1<span class="token punctuation">.</span>isdisjoint<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># =&gt; True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h2><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> .get</h3><p>访问字典中的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span> <span class="token punctuation">}</span>

person<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; 25</span>
person<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; None</span>
person<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;N/A&#39;，设置默认值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过“键”访问。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span> <span class="token punctuation">}</span>

person<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># =&gt; &#39;Alice&#39;</span>
person<span class="token punctuation">[</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># KeyError: &#39;email&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-1" tabindex="-1"><a class="header-anchor" href="#update-1" aria-hidden="true">#</a> .update</h3><p>修改字典中元素的值，如果不存在则添加元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span> <span class="token punctuation">}</span>

person<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;California&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
person  <span class="token comment"># =&gt; {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 25, &#39;city&#39;: &#39;California&#39;}</span>

person<span class="token punctuation">.</span>update<span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">27</span><span class="token punctuation">)</span>
person  <span class="token comment"># =&gt; {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 27, &#39;city&#39;: &#39;California&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过“键”访问后直接修改或添加元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span> <span class="token punctuation">}</span>

person<span class="token punctuation">[</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;California&quot;</span>
person  <span class="token comment"># =&gt; {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 25, &#39;city&#39;: &#39;California&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pop-2" tabindex="-1"><a class="header-anchor" href="#pop-2" aria-hidden="true">#</a> .pop</h3><p>删除字典中的元素，返回被删除的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;California&quot;</span> <span class="token punctuation">}</span>

age <span class="token operator">=</span> person<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span>
age  <span class="token comment"># =&gt; 25</span>
person  <span class="token comment"># =&gt; {&#39;name&#39;: &#39;Alice&#39;, &#39;city&#39;: &#39;California&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear-2" tabindex="-1"><a class="header-anchor" href="#clear-2" aria-hidden="true">#</a> .clear</h3><p>清空字典。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;California&quot;</span> <span class="token punctuation">}</span>

person<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
person  <span class="token comment"># =&gt; None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h3 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> .split</h3><p>拆分字符串，将被拆分的部分组成列表，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>

s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; [&#39;hello&#39;, &#39;world&#39;]</span>
s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># ValueError: empty separator</span>
s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; [&#39;hello&#39;, &#39;world&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> .join</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>与 JS 用法相反，<code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;].join(&quot;, &quot;)</code>。</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;, &quot;</span>

s<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;hello, world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> .find</h3><p>查找元素，返回元素首次出现的索引。若不存在，则返回 -1。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello world hello world&quot;</span>

s<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; 6</span>
s<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; 18</span>
s<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;woood&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rfind" tabindex="-1"><a class="header-anchor" href="#rfind" aria-hidden="true">#</a> .rfind</h3><p>反向查找元素，返回元素首次出现的索引。若不存在，则返回 -1。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello world hello world&quot;</span>

s<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; 18</span>
s<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; 6</span>
s<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&quot;woood&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> .replace</h3><p>替换匹配的元素，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;18-31-56&quot;</span>
 
<span class="token comment"># 默认替换所有匹配项</span>
s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;18:31：56&#39;</span>

<span class="token comment"># 指定替换的次数</span>
s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;18:31-56&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strip" tabindex="-1"><a class="header-anchor" href="#strip" aria-hidden="true">#</a> .strip</h3><p>移除字符串两边的指定字符，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;---hello world---&quot;</span>

s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;hello world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lstrip" tabindex="-1"><a class="header-anchor" href="#lstrip" aria-hidden="true">#</a> .lstrip</h3><p>移除字符串首部的指定字符，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;---hello world---&quot;</span>

s<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;hello world---&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rstrip" tabindex="-1"><a class="header-anchor" href="#rstrip" aria-hidden="true">#</a> .rstrip</h3><p>移除字符串尾部的指定字符，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;---hello world---&quot;</span>

s<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;---hello world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="upper" tabindex="-1"><a class="header-anchor" href="#upper" aria-hidden="true">#</a> .upper</h3><p>将字符串转为大写，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;I love Python&quot;</span>

s<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;I LOVE PYTHON&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lower" tabindex="-1"><a class="header-anchor" href="#lower" aria-hidden="true">#</a> .lower</h3><p>将字符串转为小写，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;I love Python&quot;</span>

s<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;i love python&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swapcase" tabindex="-1"><a class="header-anchor" href="#swapcase" aria-hidden="true">#</a> .swapcase</h3><p>将字符串大写转为小写，小写转为大写，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;I love Python&quot;</span>

s<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;i LOVE pYTHON&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="capitalize" tabindex="-1"><a class="header-anchor" href="#capitalize" aria-hidden="true">#</a> .capitalize</h3><p>将字符串首字符转为大写，其他字符转为小写，并返回。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;I love Python&quot;</span>

s<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; &#39;I love python&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><p><code>import 模块名</code> 导入模块</p><p><code>模块名.函数名</code> 调用模块中的函数</p><h3 id="全局变量-name" tabindex="-1"><a class="header-anchor" href="#全局变量-name" aria-hidden="true">#</a> 全局变量 _<em>name</em>_</h3><p><code>print(__name__)</code></p><p>如果当前模块单独执行,则输出 _<em>main</em>_</p><p>如果作为模块导入,则输出模块名</p><p>实例: exercise/模块调用</p><h3 id="from-import" tabindex="-1"><a class="header-anchor" href="#from-import" aria-hidden="true">#</a> from ... import ...</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> 模块名 <span class="token keyword">import</span> 函数名
<span class="token keyword">from</span> 模块名 <span class="token keyword">import</span><span class="token operator">*</span> <span class="token comment">#导入所有标识符</span>
  <span class="token comment"># 在第一行定义__all__=[&#39;函数名&#39;],则只导入括号中的函数</span>
<span class="token keyword">import</span> fibo <span class="token keyword">as</span> f <span class="token comment"># 用f代替模块名fibo</span>
  <span class="token comment"># f.PrintFib(5) # 表示fibo.PrintFib(5)</span>
<span class="token keyword">from</span> fibo <span class="token keyword">import</span> PrintFib <span class="token keyword">as</span> pf <span class="token comment"># 用pf代替函数名PrintFib</span>
  <span class="token comment"># pf(5) # 表示PrintFib(5)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> A<span class="token punctuation">.</span>B <span class="token keyword">import</span> C
  <span class="token comment"># 从A包的B子包中导入C模块,通过C.d()调用C模块中的函数d</span>
<span class="token keyword">from</span> A<span class="token punctuation">.</span>B<span class="token punctuation">.</span>C <span class="token keyword">import</span> d
  <span class="token comment"># 直接导入函数d,通过d()调用该函数</span>
<span class="token keyword">import</span> A<span class="token punctuation">.</span>B<span class="token punctuation">.</span>C
  <span class="token comment"># 导入A包的B子包的C模块,用A.B.C.d调用函数d</span>
<span class="token keyword">import</span> A<span class="token punctuation">.</span>B<span class="token punctuation">.</span>C<span class="token punctuation">.</span>d
  <span class="token comment"># 报错,无法通过import直接导入一个标识符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="猴子补丁" tabindex="-1"><a class="header-anchor" href="#猴子补丁" aria-hidden="true">#</a> 猴子补丁</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">Sum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token keyword">def</span> <span class="token function">NewSum</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
Sum<span class="token operator">=</span>NewSum <span class="token comment"># 将NewSum赋给Sum,再调用Sum函数则执行NewSum函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 面向对象
　　　　面向对象方法的基本观点所是一切系统都是由对象构成,通过对象之间的交互完成系统的运行

 类的定义
　　　　class 类名　定义类
　　　　类中包括属性和方法
　　　　　　　　属性对应一个类的对象可以用来保存哪些数据;
　　　　　　　　方法对应可以对一个类的对象做哪些操作
　　　　类的封装性是指将一个数据相关的属性和方法封装在一起

 类属性定义及其访问
　　　　在定义时指定该类的属性(类属性)
　　　　　　class Student:  # 定义Student类
　　　　　　　　name=&#39;Unknown&#39;  # 定义Student类的name属性
　　　　既可通过类名访问,也可通过该类对象访问
　　　　　　类名/对象名.属性名
　　　　　　class Student:
　　　　　　　　name=&#39;Unknown&#39;
　　　　　　print(Student.name)  # 输出结果:Unknown
　　　　　　stu1=Student()  # 创建Student类的stu1对象
　　　　　　stu2=Student()  # 创建Student类的stu2对象
　　　　　　print(&#39;stu1%s,stu2%s&#39;%(stu1.name,stu2.name))
　　　　　　　　# 输出结果:stu1Unknown,stu2Unknown
　　　　修改类属性,该类对象属性也会随之发生改变
　　　　　　Student.name=&#39;未知&#39;  # 将Student的类属性name改为&#39;未知&#39;
　　　　　　print(Student.name)  # 输出结果:未知
　　　　　　print(&#39;stu1%s,stu2%s&#39;%(stu1.name,stu2.name))
　　　　　　　　# 输出结果:stu1未知,stu2未知
　　　　修改对象属性,该类属性不会发生改变
　　　　　　stu1.name=&#39;李晓明&#39;  # 将stu1的name属性赋为&#39;李晓明&#39;
　　　　　　stu2.name=&#39;马红&#39;  # 将stu2的name属性赋为&#39;马红&#39;
　　　　　　print(Student.name)  # 输出结果:未知
　　　　　　print(&#39;stu1%s,stu2%s&#39;%(stu1.name,stu2.name))
　　　　　　　　# 输出结果:stu1李晓明,stu2马红
　　　　若对象属性已赋值,则修改类属性,该类对象属性不会发生改变
　　　　　　Student.name=&#39;学生&#39;  # 将Student的类属性name改为&#39;学生&#39;
　　　　　　print(Student.name)  # 输出结果:学生
　　　　　　print(&#39;stu1%s,stu2%s&#39;%(stu1.name,stu2.name))
　　　　　　　　# 输出结果:stu1李晓明,stu2马红
　　　　为已创建对象绑定新属性
　　　　　　class Student:
　　　　　　　　name=&#39;Unknown&#39;
　　　　　　stu1=Student()
　　　　　　stu2=Student()
　　　　　　stu1.age=19
　　　　　　print(stu1.name,stu1.age)  # 输出结果:Unknown,19
　　　　　　print(stu2.age)  # 报错,stu2对象没有age属性
　　　　　　print(Student.age)  # 报错,Student没有age类属性

 类中普通方法定义及调用
　　　　实例对象名.方法名(实参列表)
　　　　定义类的普通方法时,要求第一个参数需要对应调用方法时所使用的实例对象(一般命名为self)
　　　　在通过类的实例对象调用类中的普通方法时,不需要传入self参数的值,
　　　　　　self会自动对应调用该方法时所使用的对象
　　　　类的普通方法必须通过实例对象调用,不能通过类名直接调用
　　　　　　class Student:
    　　　　　　name=&#39;Unknown&#39;  # 定义Student类中的name属性
    　　　　　　def SetName(self,newname):  # 定义类的普通方法SetName
        　　　　　　self.name=newname  # 将self对应实例对象的name属性赋为newname
        　　　　　　print(self.name)  # 输出self对应实例对象的name属性值
    　　　　　　def PrintName(self):  # 定义类的普通方法PrintName
        　　　　　　print(&#39;姓名:%s&#39;%self.name)  # 输出self对应实例对象的name属性
　　　　　　stu1=Student()  # 定义Student类的对象stu1
　　　　　　stu2=Student()  # 定义Student类的对象stu2
　　　　　　stu1.SetName(&#39;李晓明&#39;)  # 通过stu1对象调用SetName方法,输出:李晓明
　　　　　　stu2.SetName(&#39;马红&#39;)  # 通过stu2对象调用SetName方法,输出:马红
　　　　　　stu1.PrintName()  # 通过stu1对象调用PrintName方法,输出:姓名:李晓明
　　　　　　stu2.PrintName()  # 通过stu2对象调用PrintName方法,输出:姓名:马红

 私有属性
　　　　__(双下划线)开头
　　　　在类内可以直接访问,在类外无法直接访问  # 对象名.__私有属性名
　　　　在私有属性名前加上&quot;_类名&quot;就能在类外访问  # 对象名._类名__私有属性名
　　　　类中的方法也可以有默认参数值(与函数一样)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用内置方法" tabindex="-1"><a class="header-anchor" href="#常用内置方法" aria-hidden="true">#</a> 常用内置方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 构造方法
　　　　__init__
　　　　创建对象时会自动执行构造方法(普通方法需调用时才会执行)

 析构方法
　　　　__del__
　　　　销毁对象时会自动执行,负责完成待销毁对象的资源清理工作,(如关闭文件)
　　　　类对象销毁
　　　　　　局部变量作用域结束(函数执行结束)
　　　　　　使用del关键字删除对象
　　　　　　程序结束时,程序中所有对象都将被销毁
　　　　　　　　(用pycharm运行)
　　　　　　　　class Student:
    　　　　　　　　def __init__(self,name):  # 定义构造方法
        　　　　　　　　self.Name=name
        　　　　　　　　print(&#39;姓名为%s的对象被创建&#39;%self.Name)
    　　　　　　　　def __del__(self):  # 定义析构方法
        　　　　　　　　print(&#39;姓名为%s的对象被销毁&#39;%self.Name)
　　　　　　　　def func(name):  # 定义func函数
    　　　　　　　　stu=Student(name)  # 创建Student类对象stu
　　　　　　　　stu1=Student(&#39;李晓明&#39;)  # 创建Student类对象stu1
　　　　　　　　　　　　# 姓名为李晓明的对象被创建
　　　　　　　　stu2=Student(&#39;马红&#39;)  # 创建Student类对象stu2
　　　　　　　　　　　　# 姓名为马红的对象被创建
　　　　　　　　stu3=stu2
　　　　　　　　del stu2  # 删除stu2对象
　　　　　　　　　　　　# stu3对象未被删除,不执行析构方法
　　　　　　　　func(&#39;张刚&#39;)  # 调用func函数
　　　　　　　　　　　　# 姓名为张刚的对象被创建
　　　　　　　　　　　　# 姓名为张刚的对象被销毁
　　　　　　　　del stu3  # 删除stu3对象
　　　　　　　　　　　　# 姓名为马红的对象被销毁
　　　　　　　　stu4=Student(&#39;刘健&#39;)  # 创建Student类对象stu4
　　　　　　　　　　　　# 姓名为刘健的对象被创建
　　　　　　　　&quot;&quot;&quot;程序结束&quot;&quot;&quot;
　　　　　　　　　　　　# 姓名为李晓明的对象被销毁
　　　　　　　　　　　　# 姓名为刘健的对象被销毁
　　　　　　　　若多个变量对应同一内存空间,则这些变量都删除才会销毁此内存空间(执行析构方法)

 __str__方法
　　　　调用str()函数对类对象进行处理或调用format()函数和print()函数时自动执行
　　　　返回值是字符串
　　　　str()函数  # 将参数转换成字符串

 __gt__(self,other)
　　　　进行self&gt;other运算时自动执行
 __lt__(self,other)
　　　　进行self&lt;other运算时自动执行
 __ge__(self,other)
　　　　进行self&gt;=other运算时自动执行
 __le__(self,other)
　　　　进行self&lt;=other运算时自动执行
 __eq__(self,other)
　　　　进行self==other运算时自动执行
 __ne__(self,other)
　　　　进行self!=other运算时自动执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承与多态" tabindex="-1"><a class="header-anchor" href="#继承与多态" aria-hidden="true">#</a> 继承与多态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 继承
　　　　子类继承父类所有属性和方法,也能增加新的属性和方法
　　　　一个子类只有一个父类,称为单继承;一个子类有多个父类,称为多重继承

 子类的定义
　　　　class 子类名(父类名,父类名,...):

 方法重写
　　　　子类对父类中继承过来的方法进行重新定义

 多态
　　　　执行同样的代码时,系统会根据对象所属的类去调用相应类中的方法

 鸭子类型
　　　　传递实参前参数类型不确定,使用形参进行操作时只要传入对象支持该操作程序就能正常执行

 super方法
　　　　super方法用于获取父类的代理对象,以执行已在子类中被重写的父类方法(调用父类的方法)
　　　　super(类名,对象名或类名)
　　　　　　若第二个参数为对象名,则该对象所属类必须是第一个参数的类或其子类
　　　　　　若第二个参数为类名,则该类必须是第一个参数的类的子类
　　　　在一个类A的定义中调用super方法时,可将两个参数省略,super()==super(A,self)
　　　　　　class Person:
    　　　　　　def __init__(self,name):
　　　　　　　　　　print(&#39;Person类构造方法被调用&#39;)
　　　　　　　　　　self.name=name
　　　　　　　　　　print(&#39;Person类构造方法结束调用&#39;)
　　　　　　class Student(Person):
    　　　　　　def __init__(self,sno,name):
　　　　　　　　　　print(&#39;Student类构造方法被调用&#39;)
　　　　　　　　　　super().__init__(name)  # 调用父类构造方法
　　　　　　　　　　self.sno=sno
　　　　　　　　　　print(&#39;Student类构造方法结束调用&#39;)
　　　　　　class Postgraduate(Student):
    　　　　　　def __init__(self,sno,name,tutor):
　　　　　　　　　　print(&#39;Postgraduate类构造方法被调用&#39;)
　　　　　　　　　　super().__init__(sno,name)  # 调用父类构造方法
　　　　　　　　　　self.tutor=tutor
　　　　　　　　　　print(&#39;Postgraduate类构造方法结束调用&#39;)
　　　　　　pg=Postgraduate(&#39;181&#39;,&#39;李晓明&#39;,&#39;马红&#39;)
　　　　　　print(&#39;学号:%s,姓名:%s,导师:%s&#39;%(pg.sno,pg.name,pg.tutor))
　　　　　　输出结果:Postgraduate类构造方法被调用
　　　　　　　　　　 Student类构造方法被调用
　　　　　　　　　　 Person类构造方法被调用
　　　　　　　　　　 Person类构造方法结束调用
　　　　　　　　　　 Student类构造方法结束调用
　　　　　　　　　　 Postgraduate类构造方法结束调用
　　　　　　　　　　 学号:181,姓名:李晓明,导师:马红
　　　　　　详例: exercise/super()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向对象的高级应用" tabindex="-1"><a class="header-anchor" href="#面向对象的高级应用" aria-hidden="true">#</a> 面向对象的高级应用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 内置函数isinstance(对象名,类名)
　　　　判断一个对象是否为指定类或其子类的对象

 内置函数issubclass(类名,类名)
　　　　判断一个类是否为另一个类的子类

 内置函数type(对象名)
　　　　获取一个对象所属的类

 类方法
　　　　用@classmethod修饰
　　　　第一个参数为调用该方法所使用的类(不是类的实例对象)
　　　　既可通过类名调用,也可通过实例对象调用

 静态方法
　　　　用@staticmethod修饰
　　　　静态方法没有类方法中的第一个参数
　　　　既可通过类名调用,也可通过实例对象调用

 动态扩展类
　　　　在给对象绑定方法时,需使用types模块中的MethodType方法
　　　　MethodType(a,b)  # a为要绑定的函数名(方法名),b为绑定的对象名，给b对象绑定a方法

 __slots__变量
　　　　若一个类中有__slots__定义,则该类可动态扩展的属性包括__slots__列出的属性及其父类
　　　　　　可以动态扩展的属性
　　　　若一个类中没有__slots__定义,则其可以扩展任意属性
　　　　　　class Person:
    　　　　　　__slots__=(&#39;name&#39;)  # Person类可动态扩展的属性有name
　　　　　　class Student(Person):
    　　　　　　__slots__=(&#39;sno&#39;)  # Student类可动态扩展的属性有name,sno
　　　　　　class Postgraduate(Student):
    　　　　　　pass  # Postgraduate可扩展任意属性

 @property装饰器
　　　　使用@property定义一个用于获取属性值的方法(getter)
　　　　使用@属性名.setter定义一个设置属性值的方法(setter)
　　　　在类的setter和getter方法中使用self访问属性值时,需要在属性名前加上下划线
　　　　　　(如self._score)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="序列的高级应用" tabindex="-1"><a class="header-anchor" href="#序列的高级应用" aria-hidden="true">#</a> 序列的高级应用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 切片
　　　　从一个序列对象中取部分元素形成一个新的序列对象
　　　　列表名[begin:end:步长]
　　　　ls2=ls1[3:10:2]  # 从ls1下标从3至9的元素中以步长为2取元素生成一个新列表赋给ls2

 列表生成表达式
　　　　ls=[x*x for x in range(10)]   # [0,1,4,9,16,25,36,49,64,81]
　　　　ls=[x*x for x in range(10) if x%2!=0]  # [1,9,25,49,81]
　　　　ls=[sno+name for sno in snolist for name in namelist]
　　　　　　将snolist和namelist中的元素组合生成新元素并组成列表

 生成器(generator)
　　　　当内存不足时,使用生成器
　　　　列表生成表达式最外层是[],一次性生成所有元素保存在列表中,占用大量内存;
　　　　　　生成器最外层是(),根据需要获取元素,占用较小内存
　　　　yield关键字  # 暂停函数执行,并将yield后面的数据返回

 可迭代对象
　　　　可直接通过for循环遍历的对象

 迭代器
　　　　有__iter__()和__next__()方法的对象
　　　　可通过next()函数不断获取下一个值(在有效范围内)
　　　　isinstance(对象名,Iterable)  # 判断对象是否为可迭代对象
　　　　isinstance(对象名,Iterator)  # 判断对象是否为迭代器
　　　　iter()函数可根据可迭代对象获取迭代器
　　　　　　it=iter(ls)  # 利用iter()函数获取列表ls的迭代器
　　　　自定义迭代器,定义一个类,类中必须有__iter__()和__next__()方法
　　　　　　from collections.abc import Iterator
　　　　　　class Faclist:
    　　　　　　def __init__(self):
        　　　　　　self.n=1
        　　　　　　self.fac=1
    　　　　　　def __next__(self):
        　　　　　　self.fac*=self.n
        　　　　　　self.n+=1　　　  # 依次得到n的阶乘 
        　　　　　　return self.fac
    　　　　　　def __iter__(self):
        　　　　　　return self
　　　　　　facs=Faclist()
　　　　　　print(isinstance(facs,Iterator))
　　　　　　for i in range(1,6):　　 # i=1,2,3,4,5 
　　　　　　　　print(&#39;第%d个元素:&#39;%i,next(facs))
　　　　　　输出结果:True  # facs是迭代器
　　　　　　　　　　 第1个元素:1
　　　　　　　　　　 第2个元素:2
　　　　　　　　　　 第3个元素:6
　　　　　　　　　　 第4个元素:24
　　　　　　　　　　 第5个元素:120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="turtle" tabindex="-1"><a class="header-anchor" href="#turtle" aria-hidden="true">#</a> turtle</h2><p><code>turtle.setup(width,height,startx,starty)</code></p><p>#设置窗体的宽度,高度,起始点X坐标,起始点Y坐标</p><p><code>turtle.fd()</code></p><p>#向海龟的正前方向运行</p><p><code>turtle.bk()</code></p><p>#向海龟的反方向运行</p><p><code>turtle.circle(r,range)</code></p><p>#以海龟当前位置左侧某一点为圆心进行曲线运行</p><p><code>turtle.seth(angle)</code></p><p>#改变海龟行进方向但不行进,angle为绝对度数</p><p><code>turtle.left(angle)</code></p><p>#让海龟向左改变运行方向</p><p><code>turtle.right(angle)</code></p><p>#让海龟向右改变运行方向</p>`,194),p=[i];function l(o,c){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","python.html.vue"]]);export{d as default};
