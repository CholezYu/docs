import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-OeOCBHA0.js";const p={},e=t(`<h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h1><h2 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest" aria-hidden="true">#</a> XMLHttpRequest</h2><h3 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码" aria-hidden="true">#</a> 状态码</h3><ul><li><p>readyState: 请求状态码</p><ul><li><p>0: XMLHttpRequest 实例化对象被创建</p></li><li><p>1: 调用了 open()，可以使用 <code>setRequestHeader()</code> 设置请求头</p></li><li><p>2: 调用了 send()，响应头被接收</p></li><li><p>3: 正在接收响应体中的部分数据</p></li><li><p>4: Ajax 请求完成，响应报文被全部接收</p></li></ul></li><li><p>status: 响应状态码</p><ul><li><p>200: 请求成功</p></li><li><p>301: 永久重定向</p></li><li><p>302: 临时重定向</p></li><li><p>304: 读取缓存</p></li><li><p>400: 请求出现语法错误</p></li><li><p>403: 拒绝访问</p></li><li><p>404: 请求资源不存在</p></li><li><p>500: 服务器执行过程中出现错误</p></li><li><p>501: 服务器内部错误</p></li><li><p>503: 服务器由于各种原因停止运行，无法处理请求</p></li></ul></li></ul><h3 id="get-请求" tabindex="-1"><a class="header-anchor" href="#get-请求" aria-hidden="true">#</a> Get 请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建 xhr 对象</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 初始化请求</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 发送请求</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 监听请求状态码</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span> <span class="token comment">// JSON</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// or</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-请求" tabindex="-1"><a class="header-anchor" href="#post-请求" aria-hidden="true">#</a> Post 请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常请求处理" tabindex="-1"><a class="header-anchor" href="#异常请求处理" aria-hidden="true">#</a> 异常请求处理</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置延迟时间</span>
xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token comment">// 请求超时时触发</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 请求取消时触发</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onabort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 取消发送请求</span>
xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 网络异常时触发</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取文件对象</span>
<span class="token keyword">const</span> imgFile <span class="token operator">=</span> fileEle<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token comment">// 创建 formdata 对象</span>
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 将文件对象添加到 formdata 对象中</span>
form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span> imgFile<span class="token punctuation">)</span>

<span class="token comment">// 将 formdata 对象发送给服务器</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/file&quot;</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h2><h3 id="get-请求-1" tabindex="-1"><a class="header-anchor" href="#get-请求-1" aria-hidden="true">#</a> Get 请求</h3><p>Promise 风格</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>async &amp; await 风格</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-请求-1" tabindex="-1"><a class="header-anchor" href="#post-请求-1" aria-hidden="true">#</a> Post 请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// json data</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取消请求" tabindex="-1"><a class="header-anchor" href="#取消请求" aria-hidden="true">#</a> 取消请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 超过 3 秒, 取消请求</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>

<span class="token comment">// 点击取消请求</span>
element<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  controller <span class="token operator">&amp;&amp;</span> controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h2><h3 id="get-请求-2" tabindex="-1"><a class="header-anchor" href="#get-请求-2" aria-hidden="true">#</a> Get 请求</h3><ul><li><p>参数：</p><ul><li><p>url: 请求地址</p></li><li><p>config: 请求配置</p></li></ul></li><li><p>返回值：</p><ul><li><p>data: 响应体</p></li><li><p>headers: 响应头</p></li><li><p>status: 状态码</p></li></ul></li><li><p>用法：<code>axios.get(url, [config])</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="post-请求-2" tabindex="-1"><a class="header-anchor" href="#post-请求-2" aria-hidden="true">#</a> Post 请求</h3><ul><li><p>参数：</p><ul><li><p>url: 请求地址</p></li><li><p>data: 请求体</p></li><li><p>config: 请求配置</p></li></ul></li><li><p>返回值：</p><ul><li><p>data: 响应体</p></li><li><p>headers: 响应头</p></li><li><p>status: 状态码</p></li></ul></li><li><p>用法：<code>axios.post(url, [data], [config])</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/user&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&quot;超级管理员&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="请求配置" tabindex="-1"><a class="header-anchor" href="#请求配置" aria-hidden="true">#</a> 请求配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/user&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 请求地址</span>
    
    <span class="token literal-property property">method</span>
<span class="token operator">:</span>
  <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 请求方法</span>
    
    <span class="token literal-property property">baseURL</span>
<span class="token operator">:</span>
  <span class="token string">&quot;http://127.0.0.1:8000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 基础路径, 与 url 拼接</span>
    
    <span class="token literal-property property">headers</span>
<span class="token operator">:</span>
  <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">,</span> <span class="token comment">// 请求头</span>
  
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">,</span> <span class="token comment">// 请求参数</span>
  
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">,</span> <span class="token comment">// 请求体</span>
  
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 延迟时间</span>
    
    <span class="token literal-property property">responseType</span>
<span class="token operator">:</span>
  <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 响应体数据类型</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应信息" tabindex="-1"><a class="header-anchor" href="#响应信息" aria-hidden="true">#</a> 响应信息</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">,</span> <span class="token comment">// 响应体</span>
  
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// 响应状态码</span>
    
    <span class="token literal-property property">statusText</span>
<span class="token operator">:</span>
  <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 响应状态码信息</span>
    
    <span class="token literal-property property">headers</span>
<span class="token operator">:</span>
  <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">,</span> <span class="token comment">// 响应头</span>
  
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">,</span> <span class="token comment">// 请求时配置</span>
  
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span> <span class="token comment">// 生成响应的请求 (xhr)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例和拦截器" tabindex="-1"><a class="header-anchor" href="#实例和拦截器" aria-hidden="true">#</a> 实例和拦截器</h3><blockquote><p>队列：[请求拦截器3, 请求拦截器2, 请求拦截器1, axios, 响应拦截器1, 响应拦截器2, 响应拦截器3]</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;/dev-api&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token
    
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 响应拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><h3 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h3><p>同源策略指的是：请求时浏览器和服务器的协议、域名、端口必须保持一致。不同源的网站不能进行资源交互：</p><ul><li><p>无法发送 Ajax 请求</p></li><li><p>无法操作 DOM</p></li><li><p>无法读取 Cookie、LocalStorage、IndexedDB</p></li></ul><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> Jsonp</h3><p>使用：<code>&lt;script&gt;</code> 标签不受同源策略的影响，可以通过 src 属性携带执行代码发送跨域请求</p><p>优点：没有兼容性问题</p><p>缺点：只支持 Get 请求；可能会存在恶意代码</p><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>使用：跨域资源共享。由 <strong>服务器</strong> 设置一组响应头字段实现跨域</p><p>优点：CORS 通信与同源的 Ajax 通信没有差别，代码完全一样，容易维护；支持所有类型的 HTTP 请求</p><p>缺点：不支持 IE10 以下的浏览器；第一次发送非简单请求时会多一次请求；需要服务器配合</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 允许的 URL</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1:8000&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 允许的请求方式</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 允许的请求头</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-type&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS</p><h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h3><p>使用：浏览器有跨域限制，但是服务器不存在跨域问题。所以可以由代理服务器向目标服务器请求资源再返回给客户端</p><p>优点：服务器代理是目前最好的跨域解决方案</p><p>Vue-CLI</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* vue.config.js */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@vue/cli-service&quot;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8888</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/dev-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;^/dev-api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vite</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* vite.config.ts */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">:</span> <span class="token number">8888</span><span class="token punctuation">,</span>
    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/dev-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        target<span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000&quot;</span><span class="token punctuation">,</span>
        changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> path <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/dev-api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),o=[e];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","Ajax.html.vue"]]);export{d as default};
