import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as p,c,a as n,b as e,e as t,d as s}from"./app-6YBn8GoV.js";const l={},u=s(`<h2 id="基本目录" tabindex="-1"><a class="header-anchor" href="#基本目录" aria-hidden="true">#</a> 基本目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── app.js
├── app.json
├── pages
│   └── index
│       ├── index.js
│       ├── index.json
│       ├── index.wxml
│       └── index.wxss
├── project.config.json           工程配置
├── project.private.config.json   工程配置（不提交到仓库）
└── sitemap.json                  站点地图
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2>`,3),r={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/* app.json */</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/about/about&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  
  <span class="token comment">/* 全局页面窗口配置 */</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏背景颜色</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏标题颜色</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Weapp&quot;</span><span class="token punctuation">,</span> <span class="token comment">//导航栏标题内容</span>
    <span class="token property">&quot;navigationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏样式（default | custom）</span>
    <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ff0000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 窗口背景色（下拉窗口可见）</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">/* 全局页面底部导航栏配置 */</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 文本颜色</span>
    <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 选中时的文本颜色</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 至少两个</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 页面路径</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 按钮文本</span>
        <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tabbar/home.png&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 图片路径</span>
        <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tabbar/home-selected.png&quot;</span> <span class="token comment">// 选中时的图片路径</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/about/about&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;关于&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2>`,2),v={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>会覆盖 <code>app.json</code> 中相同的配置项。</p><h2 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * 页面的初始数据
   */</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面加载
   */</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面初次渲染完成
   */</span>
  <span class="token function-variable function">onReady</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面显示
   */</span>
  <span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面隐藏
   */</span>
  <span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面卸载
   */</span>
  <span class="token function-variable function">onUnload</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 页面相关事件处理函数--监听用户下拉动作
   */</span>
  <span class="token function-variable function">onPullDownRefresh</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 页面上拉触底事件的处理函数
   */</span>
  <span class="token function-variable function">onReachBottom</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 用户点击右上角分享
   */</span>
  <span class="token function-variable function">onShareAppMessage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(b,q){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",r,[e("小程序配置 / 全局配置 (qq.com)"),t(a)])]),d,n("p",null,[n("a",v,[e("小程序配置 / 页面配置 (qq.com)"),t(a)])]),m])}const h=o(l,[["render",k],["__file","Wxapp.html.vue"]]);export{h as default};
