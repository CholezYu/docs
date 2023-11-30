<template><div><h2 id="基本目录" tabindex="-1"><a class="header-anchor" href="#基本目录" aria-hidden="true">#</a> 基本目录</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>├── app.js
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2>
<p>https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">/* app.json */</span>
<span class="token punctuation">{</span>
  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
    <span class="token string">"pages/about/about"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  
  <span class="token comment">/* 全局页面窗口配置 */</span>
  <span class="token property">"window"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏背景颜色</span>
    <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏标题颜色</span>
    <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"Weapp"</span><span class="token punctuation">,</span> <span class="token comment">//导航栏标题内容</span>
    <span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"default"</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏样式（default | custom）</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"ff0000"</span><span class="token punctuation">,</span> <span class="token comment">// 窗口背景色（下拉窗口可见）</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">/* 全局页面底部导航栏配置 */</span>
  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#000"</span><span class="token punctuation">,</span> <span class="token comment">// 文本颜色</span>
    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span> <span class="token comment">// 选中时的文本颜色</span>
    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 至少两个</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span> <span class="token comment">// 页面路径</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span> <span class="token comment">// 按钮文本</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabbar/home.png"</span><span class="token punctuation">,</span> <span class="token comment">// 图片路径</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabbar/home-selected.png"</span> <span class="token comment">// 选中时的图片路径</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/about/about"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"关于"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2>
<p>https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html</p>
<p>会覆盖 <code v-pre>app.json</code> 中相同的配置项</p>
<h2 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


