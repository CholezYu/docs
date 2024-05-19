import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-gvm3NMZj.js";const i={},l=e(`<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h3><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">表示形式</th><th style="text-align:left;">例</th></tr></thead><tbody><tr><td style="text-align:left;">十六进制</td><td style="text-align:left;">0x 或 0X 开头</td><td style="text-align:left;">0x15</td></tr><tr><td style="text-align:left;">八进制</td><td style="text-align:left;">0 开头</td><td style="text-align:left;">015</td></tr><tr><td style="text-align:left;">二进制</td><td style="text-align:left;">0b 或 0B 开头</td><td style="text-align:left;">0b01110101</td></tr></tbody></table><p><code>3.25e3</code> 3.25*10^3</p><p><code>complex(real, imag)</code> 复数</p><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><p><code>int(&#39;35&#39;, 8)</code> 八进制数35</p><p><code>s[start:end]</code> <code>s[index]</code> 访问或截取字符串</p><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3><p>列表中可以包含多个元素，且元素类型可以不同</p><p><code>list[index]</code> 访问或截取列表</p><h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h3><p>元组中可以包含多个元素，且元素类型可以不同</p><p><code>tuple[index]</code> 访问或截取元组</p><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3><p>集合中可以包含多个元素，且元素类型可以不同</p><p>集合中各元素无序，不允许有相同元素</p><p>集合中的元素必须是不可变类型</p><p>集合主要用于做并、交、差等集合运算，以及基于集合进行元素的快速检索</p><p><code>set()</code> 创建集合</p><p>不能使用 <code>[]</code> 访问</p><blockquote><p>创建空集合只能使用 <code>set()</code>，使用 <code>{}</code> 创建的是空字典</p></blockquote><h3 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h3><p>无序，每个元素是一个键值对</p><p>不同元素的键不能相同</p><p>键必须是不可变类型，值可以是任意类型</p><p><code>dict()</code> 创建字典</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 赋值表达式</span>
a<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span>one<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> two<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> three<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment"># zip函数(参数是多个可迭代对象)</span>
b<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 元组类型元素的列表,每个元组包含两个元素</span>
c<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 已有的字典</span>
d<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不能使用下标 <code>[]</code> 访问</p><p><code>dict[key])</code> 访问字典</p><blockquote><p>数字、字符串、元组为不可变类型(可哈希)</p><p>列表、集合、字典为可变类型(不可哈希)</p></blockquote><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="占位运算符" tabindex="-1"><a class="header-anchor" href="#占位运算符" aria-hidden="true">#</a> 占位运算符</h3><p><code>%d</code> 整型</p><p><code>%f</code> 浮点型</p><p><code>%s</code> 字符串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">%</span>5d  <span class="token comment"># 5个字符，不够则前面加空格</span>
<span class="token operator">%</span>05d <span class="token comment"># 5个字符,不够则前面补0</span>
<span class="token operator">%</span><span class="token punctuation">.</span>2f <span class="token comment"># 保留两位小数的浮点数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若字符串中已有占位符，则表示一个 <code>%</code> 须写成 <code>%%</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;优秀比例为%.2f%%&#39;</span><span class="token operator">%</span><span class="token punctuation">(</span><span class="token number">5.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 优秀比例为5.20%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h3><p><code>+ - * / // % **</code></p><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><p><code>= += -= *= /= //= %= **=</code></p><h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h3><p><code>== != &gt; &lt; &gt;= &lt;=</code></p><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><p><code>and</code> <code>or</code> <code>not</code></p><h3 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h3><p><code>&amp;</code> 按位与</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">&amp;</span>y  <span class="token comment"># 若 x 和 y 都为1，则结果为1；否则为0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>|</code> 按位或</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">|</span>y  <span class="token comment"># 若 x 和 y 都为0，则结果为0；否则为1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>^</code> 按位异或</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">^</span>y  <span class="token comment"># 若 x 和 y 不同，则结果为1；否则为0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>&lt;&lt;</code> 左移位</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">&lt;&lt;</span>y  <span class="token comment"># 将 x 左移 y 位，右侧补0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>&gt;&gt;</code> 右移位</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">&gt;&gt;</span>y  <span class="token comment"># 将 x 右移 y 位，左侧补0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>~</code> 按位取反</p><h3 id="身份运算符" tabindex="-1"><a class="header-anchor" href="#身份运算符" aria-hidden="true">#</a> 身份运算符</h3><p><code>is</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token keyword">is</span> y  <span class="token comment"># 若 x 和 y 对应同样的储存单元，则返回True；否则返回False</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;等价于&quot;&quot;&quot;</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>is not</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token keyword">is</span> <span class="token keyword">not</span> y  <span class="token comment"># 若 x 和 y 不对应同样的储存单元，则返回True；否则返回False</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;等价于&quot;&quot;&quot;</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">id</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="成员运算符" tabindex="-1"><a class="header-anchor" href="#成员运算符" aria-hidden="true">#</a> 成员运算符</h3><p><code>in</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token keyword">in</span> y　<span class="token comment"># 若 x 是 y (可迭代对象)的一个元素，则返回True；否则返回False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>not in</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token keyword">not</span> <span class="token keyword">in</span> y  <span class="token comment"># 若 x 不是 y (可迭代对象)的一个元素，则返回True；否则返回False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="序列运算符" tabindex="-1"><a class="header-anchor" href="#序列运算符" aria-hidden="true">#</a> 序列运算符</h3><p><code>+</code> 拼接</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">+</span>y　<span class="token comment"># 将序列 x 和序列 y 中的元素连接,形成一个新的序列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>*</code> 重复</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x<span class="token operator">*</span>n　<span class="token comment"># 将序列 x 中的元素重复 n 次,形成一个新的序列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;c++&#39;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> d<span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %d&#39;</span><span class="token operator">%</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> d<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
  python: 1
  c++: 2
  java: 3
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>　<span class="token comment"># &#39;[1,3]&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>　  <span class="token comment"># &#39;[1,2,3,4]&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    　<span class="token comment"># &#39;[0,1,2,3,4]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>enumerate()</code> 同时返回每个元素的索引和值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c++&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>ls<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
	0 python
	1 c++
	2 java
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c++&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>ls<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
	1 python
	2 c++
	3 java
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="函数定义与调用" tabindex="-1"><a class="header-anchor" href="#函数定义与调用" aria-hidden="true">#</a> 函数定义与调用</h3><p><code>def fun()</code> 定义函数</p><p>在函数中对形参值做修改,实参值不改变</p><p>若实参是列表等对象时,可在函数中修改实参列表中对应元素的值</p><h3 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h3><p>如果没有为某些形参传递对应的实参,则这些形参会使用默认参数值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>country<span class="token operator">=</span><span class="token string">&#39;China&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;name:%s,country:%s&#39;</span><span class="token operator">%</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>country<span class="token punctuation">)</span><span class="token punctuation">)</span>
  Person<span class="token punctuation">(</span><span class="token string">&#39;Shadow&#39;</span><span class="token punctuation">)</span>
  Person<span class="token punctuation">(</span><span class="token string">&#39;Minji&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Korea&#39;</span><span class="token punctuation">)</span>
  
<span class="token triple-quoted-string string">&quot;&quot;&quot;
  输出结果: name: Shadow, country: China
  输出结果: name: Minji, country: Korea
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关键字参数" tabindex="-1"><a class="header-anchor" href="#关键字参数" aria-hidden="true">#</a> 关键字参数</h3><p>形式为 &quot;形参=实参&quot;</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Person<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;Minji&#39;</span><span class="token punctuation">,</span>country<span class="token operator">=</span><span class="token string">&#39;Korea&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>位置参数和关键字参数可以混合使用,但位置参数必须在关键字参数之前</p><h3 id="不定长参数" tabindex="-1"><a class="header-anchor" href="#不定长参数" aria-hidden="true">#</a> 不定长参数</h3><p><code>*不定长参数名</code> 表示一组位置参数</p><p><code>**不定长参数名</code> 表示一组关键字参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">Qing1</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;姓名:&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span><span class="token string">&#39;,其他:&#39;</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span>
  
<span class="token keyword">def</span> <span class="token function">Qing2</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token operator">**</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;姓名:&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span><span class="token string">&#39;,其他:&#39;</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span>
  
<span class="token keyword">def</span> <span class="token function">Qing3</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">,</span>country<span class="token operator">=</span><span class="token string">&#39;中国&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;姓名:&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span><span class="token string">&#39;,国家:&#39;</span><span class="token punctuation">,</span>country<span class="token punctuation">,</span><span class="token string">&#39;,其他:&#39;</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span>
  
Qing1<span class="token punctuation">(</span><span class="token string">&#39;李晓明&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;良好&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;中国&#39;</span><span class="token punctuation">)</span>
Qing2<span class="token punctuation">(</span><span class="token string">&#39;李晓明&#39;</span><span class="token punctuation">,</span>中文水平<span class="token operator">=</span><span class="token string">&#39;良好&#39;</span><span class="token punctuation">,</span>国家<span class="token operator">=</span><span class="token string">&#39;中国&#39;</span><span class="token punctuation">)</span>
Qing3<span class="token punctuation">(</span><span class="token string">&#39;李晓明&#39;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">&#39;良好&#39;</span><span class="token punctuation">)</span>
Qing3<span class="token punctuation">(</span><span class="token string">&#39;大卫&#39;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">&#39;良好&#39;</span><span class="token punctuation">,</span>country<span class="token operator">=</span><span class="token string">&#39;美国&#39;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
  输出结果: 姓名: 李晓明, 其他: (&#39;良好&#39;, &#39;中国&#39;)
  输出结果: 姓名: 李晓明, 其他: {&#39;中文水平&#39;: &#39;良好&#39;, &#39;国家&#39;: &#39;中国&#39;}
  输出结果: 姓名: 李晓明, 国家: 中国 ,其他: (19, &#39;良好&#39;)
  输出结果: 姓名: 大卫, 国家: 美国 ,其他: (19, &#39;良好&#39;)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拆分参数列表" tabindex="-1"><a class="header-anchor" href="#拆分参数列表" aria-hidden="true">#</a> 拆分参数列表</h3><p>列表、元组拆分出来的结果作为位置参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sumval</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token builtin">sum</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> args<span class="token punctuation">:</span>
    <span class="token builtin">sum</span><span class="token operator">+=</span><span class="token number">1</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;求和结果为:&#39;</span><span class="token punctuation">,</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
  
ls<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
sumval<span class="token punctuation">(</span><span class="token operator">*</span>ls<span class="token punctuation">)</span> <span class="token comment"># 等价于sumval(ls[0],ls[1],ls[2],ls[3])</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
  输出结果:求和结果为:16
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字典拆分出来的结果作为关键字参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">studentinfo</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>chineselevel<span class="token punctuation">,</span>country<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;姓名:%s,中文水平:%s,国家:%s&#39;</span><span class="token operator">%</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>chineselevel<span class="token punctuation">,</span>country<span class="token punctuation">)</span><span class="token punctuation">)</span>
  
d<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;country&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;中国&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;chineselevel&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;良好&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;李晓明&#39;</span><span class="token punctuation">}</span>
studentinfo<span class="token punctuation">(</span><span class="token operator">**</span>d<span class="token punctuation">)</span>
      
<span class="token triple-quoted-string string">&quot;&quot;&quot;
  输出结果:姓名:李晓明,中文水平:良好,国家:中国
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><p><code>import 模块名</code> 导入模块</p><p><code>模块名.函数名</code> 调用模块中的函数</p><h3 id="全局变量-name" tabindex="-1"><a class="header-anchor" href="#全局变量-name" aria-hidden="true">#</a> 全局变量 _<em>name</em>_</h3><p><code>print(__name__)</code></p><p>如果当前模块单独执行,则输出 _<em>main</em>_</p><p>如果作为模块导入,则输出模块名</p><p>实例: exercise/模块调用</p><h3 id="from-import" tabindex="-1"><a class="header-anchor" href="#from-import" aria-hidden="true">#</a> from ... import ...</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> 模块名 <span class="token keyword">import</span> 函数名
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三方模块" tabindex="-1"><a class="header-anchor" href="#第三方模块" aria-hidden="true">#</a> 第三方模块</h3><p>在命令提示符输入&#39;pip install 安装包名称&#39;可获取并安装第三方模块</p><h2 id="局部变量与全局变量" tabindex="-1"><a class="header-anchor" href="#局部变量与全局变量" aria-hidden="true">#</a> 局部变量与全局变量</h2><h3 id="global关键字" tabindex="-1"><a class="header-anchor" href="#global关键字" aria-hidden="true">#</a> global关键字</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">GlobalVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">global</span> x  <span class="token comment"># 声明在GlobalVar函数中使用的是全局变量x</span>
  x<span class="token operator">=</span><span class="token number">100</span>  <span class="token comment"># 将全局变量x的值赋为100</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 输出全局变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nonlocal关键字" tabindex="-1"><a class="header-anchor" href="#nonlocal关键字" aria-hidden="true">#</a> nonlocal关键字</h3><p>声明在内层函数中使用外层函数定义的变量</p><p>在内层函数仅获取外层函数中定义变量的值,可以省略nonlocal声明</p><p>在内层函数中需要修改外层函数中定义变量的值,必须使用nonlocal关键字</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的高级应用" tabindex="-1"><a class="header-anchor" href="#函数的高级应用" aria-hidden="true">#</a> 函数的高级应用</h2><h3 id="递归函数" tabindex="-1"><a class="header-anchor" href="#递归函数" aria-hidden="true">#</a> 递归函数</h3><p>在一个函数内部通过调用自己来完成一个问题的求解</p><p>必须要有结束递归的条件</p><p>适合当问题规模较小时求解</p><h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h3><p>把函数作为参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">FunAdd</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h3><p>可以在不修改已有函数的情况下向已有函数中注入代码</p><p>一个装饰器可为多个函数注入代码,一个函数也可注入多个装饰器代码</p><p>实例: exercise/装饰器</p><h2 id="类与属性" tabindex="-1"><a class="header-anchor" href="#类与属性" aria-hidden="true">#</a> 类与属性</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 面向对象
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的普通方法与私有属性" tabindex="-1"><a class="header-anchor" href="#类的普通方法与私有属性" aria-hidden="true">#</a> 类的普通方法与私有属性</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 类中普通方法定义及调用
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用内置方法" tabindex="-1"><a class="header-anchor" href="#常用内置方法" aria-hidden="true">#</a> 常用内置方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 构造方法
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承与多态" tabindex="-1"><a class="header-anchor" href="#继承与多态" aria-hidden="true">#</a> 继承与多态</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 继承
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象的高级应用" tabindex="-1"><a class="header-anchor" href="#面向对象的高级应用" aria-hidden="true">#</a> 面向对象的高级应用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 内置函数isinstance(对象名,类名)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表的创建和元素复制" tabindex="-1"><a class="header-anchor" href="#列表的创建和元素复制" aria-hidden="true">#</a> 列表的创建和元素复制</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 创建列表
　　　　使用[]创建列表
　　　　使用内置方法list()创建列表
　　　　　　list()的作用是将一个数据转换为列表形式返回,返回结果必然时一个列表

 拼接列表
　　　　通过拼接运算&quot;+&quot;将多个列表连接在一起生成一个新的列表
　　　　通过重复运算&quot;*&quot;使列表重复多次生成一个新的列表

 复制列表元素
　　　　若ls1=[1,2,3]
　　　　　ls2=ls1
　　　　则id(ls1)==id(ls2)  # ls1和ls2的内存地址相同
　　　　若ls1[1]=5
　　　　则ls1=[1,5,3]
　　　　　ls2=[1,5,3]

　　　　若ls1=[1,2,3]
　　　　　ls2=ls1[:]
　　　　则id(ls1)!=id(ls2)  # ls1和ls2的内存地址不同
　　　　若ls1[1]=5
　　　　则ls1=[1,5,3]
　　　　　ls2=[1,2,3]  # 利用元素截取方法,实现修改一个对象中的元素值不会影响另一个对象

　　　　若ls1=[1,[2,3]]
　　　　　ls2=ls1[:]
　　　　则id(ls1)!=id(ls2)  # ls1和ls2的内存地址不同
　　　　　id(ls1[1])==id(ls2[1])  # ls1[1]和ls2[1]的内存地址相同
　　　　若ls1[1][0]=5
　　　　则ls1=[1,[5,3]]
　　　　　ls2=[1,[5,3]]  # 利用元素截取方法,实现列表元素复制

　　　　若ls1=[1,[2,3]]
　　　　　ls2=copy.deepcopy(ls1)
　　　　则id(ls1)!=id(ls2)  # ls1和ls2的内存地址不同
　　　　　id(ls1[1])==id(ls2[1])  # ls1[1]和ls2[1]的内存地址相同
　　　　若ls1[1][0]=5
　　　　则ls1=[1,[5,3]]
　　　　　ls2=[1,[2,3]]  # 使用copy模块中的deepcopy函数,实现列表复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表的具体用法" tabindex="-1"><a class="header-anchor" href="#列表的具体用法" aria-hidden="true">#</a> 列表的具体用法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 列表元素的查找
　　　　列表名.index(x)  # 值为x的元素第一次出现的位置(下标)

 列表元素的插入
　　　　列表名.insert(index,x)  # 将元素x插入到列表下标为index的位置上
　　　　列表名.append(x)  # 在列表尾部添加x元素

 列表元素的删除
　　　　列表名.pop()  # 默认删除列表最后一项
　　　　列表名.pop(index)  # 删除列表下标为index的项
　　　　列表名.remove(x)  # 删除列表中的x元素
　　　　del ls[index]  # 删除列表中下标为index的项

 列表元素的合并
　　　　列表1.extend(列表2)  # 将列表2并入到列表1之后

 获取列表的最大元素和最小元素
　　　　max(列表名)  # 获取列表最大元素值
　　　　min(列表名)  # 获取列表最小元素值

 统计元素出现次数
　　　　列表名.count(x)  # 统计元素x在列表中出现的次数

 获取列表长度
　　　　len(列表名)  # 获取列表中包含的元素数量

 列表元素排序
　　　　函数名.sort(key=None,reverse=False)
　　　　函数名.sort(key=lambda 对象名:对象名.可排序属性名,reverse=False)
　　　　　　class Student:
　　　　　　　　def __init__(self,sno,name):
　　　　　　　　　　self.sno=sno
　　　　　　　　　　self.name=name
　　　　　　　　def __str__(self):
　　　　　　　　　　return self.sno+self.name
　　　　　　ls2=[Student(&#39;185&#39;,&#39;李晓明&#39;),Student(&#39;182&#39;,&#39;马红&#39;),Student(&#39;183&#39;,&#39;张刚&#39;)]
　　　　　　ls2.sort(key=lambda stu:stu.sno)
　　　　　　for stu in ls2:
　　　　　　　　print(stu)
　　　　　　输出结果:182马红
　　　　　　　　　　 183张刚
　　　　　　　　　　 185李晓明

　　　　key=lambda stu:stu.sno  # 表示将lambda函数传入对象的sno属性作为返回值
　　　　　　也可定义一个函数
　　　　　　　　　　def GetStuSno(stu):
　　　　　　　　　　　　return stu.sno
　　　　　　将ls2.sort(key=lambda stu:stu.sno)
　　　　　　改为ls2.sort(key=GetStuSno)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元组的创建与具体用法" tabindex="-1"><a class="header-anchor" href="#元组的创建与具体用法" aria-hidden="true">#</a> 元组的创建与具体用法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 创建元组和拼接元组
　　　　使用()创建元组
　　　　使用内置方法tuple()创建元组
　　　　　　　　tuple()的作用是将一个数据转换为元组形式返回,返回结果必然时一个元组
　　　　使用()创建只包含单个元素的元组时,需在该元素后加逗号,否则被认定为括号运算符

　　　　通过拼接运算&quot;+&quot;将多个元组连接在一起生成一个新的元组
　　　　通过重复运算&quot;*&quot;使元组重复多次生成一个新的元组

 获取元组的最大元素和最小元素
　　　　max(元组名)  # 获取元组最大元素值
　　　　min(元组名)  # 获取元组最小元素值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合的创建与具体用法" tabindex="-1"><a class="header-anchor" href="#集合的创建与具体用法" aria-hidden="true">#</a> 集合的创建与具体用法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 集合的创建
　　　　使用{}创建集合(空集合不能用{}创建)
　　　　使用内置方法set()创建集合  # 只能为一个参数,且参数可迭代
　　　　集合无序,且不能包含相同的元素

 插入集合元素
　　　　集合名.add(x)  # 把x作为一个新的元素插入到集合中(x必须是可哈希对象)
　　　　集合名.update(x)  # 把x拆分成多个元素后插入到集合中(x必须是可迭代对象)

 集合的运算
　　　　交集
　　　　s1.intersection(s2)  # 计算s1和s2的交集并返回,不会修改s1和s2本身的值

　　　　并集
　　　　s1.union(s2)  # 计算s1和s2的并集并返回,不会修改s1和s2本身的值

　　　　差集
　　　　s1.difference(s2)  # 计算s1和s2的差集并返回,不会修改s1和s2本身的值

　　　　对称差集
　　　　s1.symmetric_difference(s2)  # 计算s1和s2的对称差集并返回,不会修改s1和s2本身的值

　　　　子集
　　　　s1.issubset(s2)  # 判断s1是否为s2的子集

　　　　父集
　　　　s1.issuperset(s2)  # 判断s1是否为s2的父集
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字典的创建与具体用法" tabindex="-1"><a class="header-anchor" href="#字典的创建与具体用法" aria-hidden="true">#</a> 字典的创建与具体用法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 字典的创建
　　　　使用{}创建字典
　　　　使用内置方法dict()创建字典
　　　　字典无序,且不能包含键相同的元素

 初始化字典元素
　　　　字典名.fromkeys(一个包含字典键名的序列,一个指定各元素初始值的参数(默认值为None))
　　　　　　若字典对象已有其他元素,则调用fromkeys方法后原有元素都会被清除
　　　　　　　　d1=dict(age=18)
　　　　　　　　d2=d1.fromkeys([&#39;sno&#39;,&#39;name&#39;],&#39;Unknown&#39;)
　　　　　　　　print(d1)  # 输出:{&#39;age&#39;:18}
　　　　　　　　print(d2)  # 输出:{&#39;sno&#39;:&#39;Unknown&#39;,&#39;name&#39;:&#39;Unknown&#39;}

 字典元素的修改和插入
　　　　修改键对应的元素值时,若键在字典中不存在,则会插入一个新元素
　　　　字典名.[&#39;键名&#39;]=&#39;修改后对应的值&#39;
　　　　　　stu[&#39;sno&#39;]=&#39;181&#39;  # 将键为&#39;sno&#39;的元素的值修改为&#39;181&#39;
　　　　字典1.update(字典2)  # 用字典2的元素修改或插入字典1的元素
　　　　字典名.update(键1=值1,键2=值2...)

 字典元素的删除
　　　　del 字典名[&#39;age&#39;]  # 删除字典中键为&#39;age&#39;的元素
　　　　字典名.pop(&#39;key&#39;,&#39;default&#39;)  # 删除字典中键为key的元素并返回该元素的值
　　　　　　若字典中不存在key元素,则返回default参数的值

 字典的浅拷贝
　　　　字典名.copy()  # 对字典进行浅拷贝得到一个新字典并返回
　　　　　　若字典中包含可变类型的元素,则修改该元素时,新字典中可变类型的元素也会发生改变

 字典的深拷贝
　　　　copy.deepcopy(字典名)  # 对字典进行深拷贝得到一个新字典并返回
　　　　　　深拷贝使原有字典与新字典对象完全独立

 判断字典中是否存在键
　　　　字典名.get(&#39;key&#39;,&#39;default&#39;(默认值为None))
　　　　　　从字典中获取键为key的元素值并返回,若不存在key元素,则返回default参数的值
　　　　关键字in

 字典的拼接
　　　　dMerge=dict(d1,**d2)
　　　　dMerge=d1.copy()　　dMerge.update(d2)
　　　　　　dMerge为保存数据的对象

 获取字典中元素个数
　　　　len(字典名)  # 获取字典中包含的元素数量

 清除字典中所有元素
　　　　字典名.clear()

 获取字典中键集合
　　　　字典名.keys()  # 返回一个包含字典中所有键的对象
　　　　　　d=dict(sno=&#39;181&#39;,name=&#39;lxm&#39;)
　　　　　　print(d.keys())  # 输出:dict_keys([&#39;sno&#39;,&#39;name&#39;])

 获取字典中值集合
　　　　字典名.values()  # 返回一个包含字典中所有值的对象
　　　　　　与获取字典中键集合示例类似

 获取字典中元素组
　　　　字典名.items()  # 返回一个可按(键,值)方式遍历的对象
　　　　　　d=dict(sno=&#39;181&#39;,name=&#39;lxm&#39;)
　　　　　　for key,value in d.items():
　　　　　　　　print(key,value)
　　　　　　输出结果:sno 181
　　　　　　　　　　 name lxm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="序列的高级应用" tabindex="-1"><a class="header-anchor" href="#序列的高级应用" aria-hidden="true">#</a> 序列的高级应用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 切片
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串的常用方法" tabindex="-1"><a class="header-anchor" href="#字符串的常用方法" aria-hidden="true">#</a> 字符串的常用方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 字符串创建
　　　　单引号和双引号的字符串中,\\表示续行,\\n表示换行

 字符串比较
　　　　通过ASCⅡ码值比较
　　　　若字符相同,则较长字符串更大
　　　　若完全一样,则两字符串相等
　　　　使用&lt; &gt; ==比较,返回布尔值

 字符串切割
　　　　字符串名.split(sep=None,maxsplit=-1)
　　　　　　sep是指定的分隔符,默认值为None(空格、换行、制表符)
　　　　　　maxsplit为最大切割次数,默认值为-1(不限)
　　　　　　　　s1=&#39;It is a book&#39;
　　　　　　　　ls1=s1.split()  # 输出:[&#39;It&#39;,&#39;is&#39;,&#39;a&#39;,&#39;book&#39;]
　　　　　　　　s2=&#39;Python##Java##PHP&#39;
　　　　　　　　ls2=s2.split(&#39;##&#39;)  # 输出:[&#39;Python&#39;,&#39;Java&#39;,&#39;PHP&#39;]
　　　　　　　　ls3=s2.split(&#39;##&#39;,1)  # 输出:[&#39;Python&#39;,&#39;Java##PHP&#39;]
　　　　字符串名.splitlines([keepends])  # 固定以&#39;\\r&#39; &#39;\\n&#39; &#39;\\r\\n&#39;作为分隔符切割
　　　　　　keepends表示是否保留行结束符(默认值为False,不保留)
　　　　　　　　s=&#39;hello\\nwelcome\\r\\ngood luck\\r&#39;
　　　　　　　　ls1=s.splitlines()  # 输出:[&#39;hello&#39;,&#39;welcome&#39;,&#39;good luck&#39;]
　　　　　　　　ls2=s.splitlines(True)  # 输出:[&#39;hello\\n&#39;,&#39;welcome\\r\\n&#39;,&#39;good luck\\r&#39;]
　　　　不会修改原字符串

 字符串检索
　　　　字符串名.find(sub,start,end)  # 返回sub第一次出现的位置,检索不到返回-1
　　　　字符串名.rfind(sub,start,end)  # 返回sub最后一次出现的位置,检索不到返回-1
　　　　字符串名.index(sub,start,end)  # 与find作用相同,检索不到引发ValueError异常
　　　　字符串名.rindex(sub,start,end)  # 与rfind作用相同,检索不到引发ValueError异常

 字符串替换
　　　　字符串名.replace(old,new,max)  # old替换为new,max表示替换次数上限,不指定则无上限
　　　　不会修改原字符串

 字符串空格的去除
　　　　字符串名.strip()  # 去除字符串头部和尾部的空格
　　　　字符串名.lstrip()  # 去除字符串头部的空格
　　　　字符串名.rstrip()  # 去除字符串尾部的空格
　　　　若要去除字符串中其他位置空格,则用字符串替换的方法  # 字符串名.replace(&#39; &#39;,&#39;&#39;)
　　　　不会修改原字符串

 字符串大小写转换
　　　　字符串名.capitalize()  # 首字母大写,其他字母小写
　　　　字符串名.lower()  # 所有字母小写
　　　　字符串名.upper()  # 所有字母大写
　　　　字符串名.swapcase()  # 大写字母变小写,小写字母变大写
　　　　不会修改原字符串

 字符串复制
　　　　直接用赋值运算符=复制
　　　　　　s1=&#39;a&#39;
　　　　　　s2=&#39;b&#39;
　　　　　　print(s1,s2)  # 输出:a b
　　　　　　s1=&#39;c&#39;
　　　　　　print(s1,s2)  # 输出:c b

 字符串连接
　　　　通过拼接运算+连接
　　　　str.join(seq)  # str为字符串元素,作为连接符  seq为序列对象,序列中为字符串元素
　　　　　　s1=&#39; &#39;  # 空格字符串
　　　　　　s2=&#39;,&#39;  # 逗号字符串
　　　　　　s3=&#39;&#39;  # 空字符串
　　　　　　ls=[&#39;I&#39;,&#39;like&#39;,&#39;Python&#39;]
　　　　　　print(s1.join(ls))  # 输出:I like Python
　　　　　　print(s2.join(ls))  # 输出:I,like,Python
　　　　　　print(s3.join(ls))  # 输出:IlikePython

 获取字符串长度
　　　　len(字符串名)  # 获取字符串中包含的元素数量

 测试字符串的组成部分
　　　　用in运算符判断A是否为B的子串
　　　　　　s=&#39;cat dog cat&#39;
　　　　　　print(&#39;cat&#39; in s)  # 输出:True
　　　　　　print(&#39;mouse&#39; in s)  # 输出:False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="占位符和format方法" tabindex="-1"><a class="header-anchor" href="#占位符和format方法" aria-hidden="true">#</a> 占位符和format方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 占位符
　　　　%d或%i  # 有符号整型十进制数
　　　　%o  # 有符号八进制数
　　　　%x  # 有符号十六进制数(字母小写)
　　　　%X  # 有符号十六进制数(字母大写)
　　　　%e  # 指数格式浮点数(字母小写)
　　　　%E  # 指数格式浮点数(字母大写)
　　　　%f或%F  # 有符号浮点型十进制数
　　　　%g  # 浮点数(根据数值大小采用%e或%f)
　　　　%G  # 浮点数(根据数值大小采用%E或%f)
　　　　%c  # 单个字符(整型或单个字符的字符串)
　　　　%r  # 字符串(使用repr函数进行对象转换)
　　　　%s  # 字符串(使用str函数进行对象转换)
　　　　%a  # 字符串(使用ascii函数进行对象转换)
　　　　%%  # 表示一个百分号

 format方法
　　　　字符串名.format(*args,**kwargs)
　　　　　　s1=&#39;{0}的计算机成绩是{1},{0}的数学成绩是{2}&#39;  # {}中为索引值
　　　　　　s2=&#39;{name}的计算机成绩是{a},{name}的数学成绩是{b}&#39;  # {}中为自定义名
　　　　　　print(s1.format(&#39;李晓明&#39;,90,85))
　　　　　　　　# 输出:李晓明的计算机成绩是90,李晓明的数学成绩是85
　　　　　　print(s2.format(a=90,b=85,name=&#39;李晓明&#39;))
　　　　　　　　# 输出:李晓明的计算机成绩是90,李晓明的数学成绩是85
　　　　字符串替换字段中可以包含对实参属性的访问
　　　　　　class Student:
　　　　　　　　def __init__(self,name,cs):
　　　　　　　　　　self.name=name
　　　　　　　　　　self.cs=cs
　　　　　　s=Student(&#39;李晓明&#39;,90)
　　　　　　s1=&#39;{0.name}的计算机成绩是{0.cs}&#39;
　　　　　　s2=&#39;{stu.name}的计算机成绩是{stu.cs}&#39;
　　　　　　print(s1.format(s))  # 李晓明的计算机成绩是90
　　　　　　print(s2.format(stu=s))  # 李晓明的计算机成绩是90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 正则表达式部分匹配模式
　　　  [ ]    字符集合
　　　　{n}    匹配前一个模式n次
　　　　{m,n}  匹配前一个模式m次至n次
　　　　 +     匹配前一个模式1次或多次
　　　　 *     匹配前一个模式0次或多次
　　　　 ?     匹配前一个模式0次或1次
　　　　 ^     匹配字符串开头的字符
　　　　 $     匹配字符串末尾的字符
　　　　 .     匹配任意字符
　　　　( )    (.*?)abc表示匹配以abc结尾的字符串中尽可能少的字符
　　　　       (.*)abc 表示匹配以abc结尾的字符串中尽可能多的字符
　　　　 \\     转义字符

 正则表达式特殊序列
　　　　\\w     匹配单词字符(字母、数字、下划线)
　　　　\\W     匹配非单词字符
　　　　\\d     匹配数字字符,等价于[0-9]
　　　　\\D     匹配非数字字符,等价于[^0-9]
　　　　\\s     匹配空格字符
　　　　\\S     匹配非空格字符
　　　　\\b     匹配单词边界符,即\\b两边的字符为一个单词字符和一个非单词字符(或空字符)
　　　　\\B     匹配非单词边界符
　　　　\\A     匹配字符串开头的字符,同匹配模式中的^
　　　　\\Z     匹配字符串末尾的字符,同匹配模式中的$
　　　　\\number  用于引用同一编号的分组中的模式(分组编号从1开始)
　　　　         # 正则表达式&quot;([0-9])abc\\1&quot;中的&quot;\\1&quot;表示引用第1个分组中的模式&quot;[0-9]&quot;
　　　　           　　等价于&quot;([0-9])abc([0-9])&quot;,匹配以一个数字开头,一个数字结尾,中间为abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="turtle" tabindex="-1"><a class="header-anchor" href="#turtle" aria-hidden="true">#</a> turtle</h2><p><code>turtle.setup(width,height,startx,starty)</code></p><p>#设置窗体的宽度,高度,起始点X坐标,起始点Y坐标</p><p><code>turtle.fd()</code></p><p>#向海龟的正前方向运行</p><p><code>turtle.bk()</code></p><p>#向海龟的反方向运行</p><p><code>turtle.circle(r,range)</code></p><p>#以海龟当前位置左侧某一点为圆心进行曲线运行</p><p><code>turtle.seth(angle)</code></p><p>#改变海龟行进方向但不行进,angle为绝对度数</p><p><code>turtle.left(angle)</code></p><p>#让海龟向左改变运行方向</p><p><code>turtle.right(angle)</code></p><p>#让海龟向右改变运行方向</p>`,190),t=[l];function d(c,p){return s(),a("div",null,t)}const r=n(i,[["render",d],["__file","Python.html.vue"]]);export{r as default};
