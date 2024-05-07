import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-IcL4amww.js";const e={},p=t(`<h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><p>绘制一个红色矩形。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#canvas&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> gl <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;webgl&quot;</span><span class="token punctuation">)</span>

gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>

gl<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">COLOR_BUFFER_BIT</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>gl.clearColor(r, g, b, a)</code> 清空 canvas 的颜色</p></li><li><p><code>gl.clear(buffer)</code> 清空缓存</p></li><li><p>gl.COLOR_BUFFER_BIT：颜色缓存</p></li><li><p>gl.DEPTH_BUFFER_BIT：清空深度缓冲区</p></li><li><p>gl.STENCLI_BUFFER_BIT：清空模板缓冲区</p></li></ul><h2 id="着色器" tabindex="-1"><a class="header-anchor" href="#着色器" aria-hidden="true">#</a> 着色器</h2><h3 id="顶点着色器" tabindex="-1"><a class="header-anchor" href="#顶点着色器" aria-hidden="true">#</a> 顶点着色器</h3><p>用来描述顶点（空间中的坐标）的特性，通过计算获取<strong>位置</strong>信息。</p><h3 id="片元着色器" tabindex="-1"><a class="header-anchor" href="#片元着色器" aria-hidden="true">#</a> 片元着色器</h3><p>进行逐片元（像素）处理程序，通过计算获取<strong>颜色</strong>信息。</p><h3 id="着色器源码" tabindex="-1"><a class="header-anchor" href="#着色器源码" aria-hidden="true">#</a> 着色器源码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 顶点着色器源程序</span>
<span class="token keyword">const</span> <span class="token constant">VERTEX_SHADER_SOURCE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // 点的坐标 vec4(x, y, z, w)
    gl_PointSize = 30.0; // 点的大小
  }
</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 片元着色器源程序</span>
<span class="token keyword">const</span> <span class="token constant">FRAGMENT_SHADER_SOURCE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 点的颜色 vec4(r, g, b, a)
  }
</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建着色器" tabindex="-1"><a class="header-anchor" href="#创建着色器" aria-hidden="true">#</a> 创建着色器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useShader</span><span class="token punctuation">(</span><span class="token parameter">gl<span class="token punctuation">,</span> <span class="token constant">VERTEX_SHADER_SOURCE</span><span class="token punctuation">,</span> <span class="token constant">FRAGMENT_SHADER_SOURCE</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建顶点着色器</span>
  <span class="token keyword">const</span> vertexShader <span class="token operator">=</span> gl<span class="token punctuation">.</span><span class="token function">createShader</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">VERTEX_SHADER</span><span class="token punctuation">)</span>
  
  <span class="token comment">// 创建片元着色器</span>
  <span class="token keyword">const</span> fragmentShader <span class="token operator">=</span> gl<span class="token punctuation">.</span><span class="token function">createShader</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">FRAGMENT_SHADER</span><span class="token punctuation">)</span>
  
  <span class="token comment">// 指定着色器的源程序</span>
  gl<span class="token punctuation">.</span><span class="token function">shaderSource</span><span class="token punctuation">(</span>vertexShader<span class="token punctuation">,</span> <span class="token constant">VERTEX_SHADER_SOURCE</span><span class="token punctuation">)</span>
  gl<span class="token punctuation">.</span><span class="token function">shaderSource</span><span class="token punctuation">(</span>fragmentShader<span class="token punctuation">,</span> <span class="token constant">FRAGMENT_SHADER_SOURCE</span><span class="token punctuation">)</span>
  
  <span class="token comment">// 编译着色器</span>
  gl<span class="token punctuation">.</span><span class="token function">compileShader</span><span class="token punctuation">(</span>vertexShader<span class="token punctuation">)</span>
  gl<span class="token punctuation">.</span><span class="token function">compileShader</span><span class="token punctuation">(</span>fragmentShader<span class="token punctuation">)</span>
  
  <span class="token comment">// 创建一个程序对象</span>
  <span class="token keyword">const</span> program <span class="token operator">=</span> gl<span class="token punctuation">.</span><span class="token function">createProgram</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token comment">// 关联着色器</span>
  gl<span class="token punctuation">.</span><span class="token function">attachShader</span><span class="token punctuation">(</span>program<span class="token punctuation">,</span> vertexShader<span class="token punctuation">)</span>
  gl<span class="token punctuation">.</span><span class="token function">attachShader</span><span class="token punctuation">(</span>program<span class="token punctuation">,</span> fragmentShader<span class="token punctuation">)</span>
  
  <span class="token comment">// 关联程序对象</span>
  gl<span class="token punctuation">.</span><span class="token function">linkProgram</span><span class="token punctuation">(</span>program<span class="token punctuation">)</span>
  
  <span class="token comment">// 使用程序对象</span>
  gl<span class="token punctuation">.</span><span class="token function">useProgram</span><span class="token punctuation">(</span>program<span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> program
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绘制图形" tabindex="-1"><a class="header-anchor" href="#绘制图形" aria-hidden="true">#</a> 绘制图形</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">useShader</span><span class="token punctuation">(</span>gl<span class="token punctuation">,</span> <span class="token constant">VERTEX_SHADER_SOURCE</span><span class="token punctuation">,</span> <span class="token constant">FRAGMENT_SHADER_SOURCE</span><span class="token punctuation">)</span>

gl<span class="token punctuation">.</span><span class="token function">drawArrays</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">POINTS</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 点</span>
gl<span class="token punctuation">.</span><span class="token function">drawArrays</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">LINES</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 线段</span>
gl<span class="token punctuation">.</span><span class="token function">drawArrays</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">TRIANGLES</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 三角形</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>gl.drawArrays(mode, first, count)</code></p><ul><li><p>mode：绘制的图形</p></li><li><p>first：从哪个开始</p></li><li><p>count：使用几个顶点</p></li></ul></li></ul><h3 id="attribute-变量" tabindex="-1"><a class="header-anchor" href="#attribute-变量" aria-hidden="true">#</a> attribute 变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// attribute 变量只能用于顶点着色器源程序中</span>
<span class="token keyword">const</span> <span class="token constant">VERTEX_SHADER_SOURCE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  attribute vec4 aPosition; // 默认为 vec4(x, y, z, w)
  void main() {
    gl_Position = aPosition;
    gl_PointSize = 30.0;
  }
</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// ...</span>

<span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token function">useShader</span><span class="token punctuation">(</span>gl<span class="token punctuation">,</span> <span class="token constant">VERTEX_SHADER_SOURCE</span><span class="token punctuation">,</span> <span class="token constant">FRAGMENT_SHADER_SOURCE</span><span class="token punctuation">)</span>

<span class="token comment">// 获取 attribute 变量</span>
<span class="token keyword">const</span> aPosition <span class="token operator">=</span> gl<span class="token punctuation">.</span><span class="token function">getAttribLocation</span><span class="token punctuation">(</span>program<span class="token punctuation">,</span> <span class="token string">&quot;aPosition&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 修改 attribute 变量</span>
gl<span class="token punctuation">.</span><span class="token function">vertexAttrib4f</span><span class="token punctuation">(</span>aPosition<span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","WebGL.html.vue"]]);export{d as default};
