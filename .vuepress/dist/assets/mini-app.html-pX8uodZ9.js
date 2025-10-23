import{_ as p,r as o,o as c,c as i,d as s,e as n,a as t,b as e}from"./app-XPirRn4N.js";const l={},u=s("h2",{id:"小程序配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#小程序配置","aria-hidden":"true"},"#"),n(" 小程序配置")],-1),r=s("h3",{id:"项目配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#项目配置","aria-hidden":"true"},"#"),n(" 项目配置")],-1),d={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;projectname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mini-app&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// 项目名称</span>
  <span class="token property">&quot;miniprogramRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram/&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 小程序源码目录</span>
  <span class="token property">&quot;srcMiniprogramRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对应目录下的右键菜单快捷新建页面和组件文件</span>
  <span class="token property">&quot;compileType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram&quot;</span><span class="token punctuation">,</span>         <span class="token comment">// 编译类型</span>
  <span class="token property">&quot;libVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.4.10&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 基础库版本</span>
  <span class="token property">&quot;setting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;coverView&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 使用工具渲染 CoverView</span>
    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 将 ES6 编译为 ES5</span>
    <span class="token property">&quot;postcss&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 上传代码时样式自动补全</span>
    <span class="token property">&quot;minified&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// 自动压缩脚本文件</span>
    <span class="token property">&quot;enhance&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 开启增强编译</span>
    <span class="token property">&quot;showShadowRootInWxmlPanel&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启调试器 WXML 面板展示 shadow-root</span>
    <span class="token property">&quot;packNpmManually&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>           <span class="token comment">// 手动配置构建 npm 的路径</span>
    <span class="token property">&quot;packNpmRelationList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;packageJsonPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">,</span>     <span class="token comment">// package.json 的路径</span>
        <span class="token property">&quot;miniprogramNpmDistDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./miniprogram&quot;</span> <span class="token comment">// miniprogram_npm 的路径</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useCompilerPlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 插件配置，仅支持 typescript less sass</span>
      <span class="token string">&quot;sass&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babelSetting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>         <span class="token comment">// 跳过 Babel 编译的文件或目录</span>
      <span class="token property">&quot;outputPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment">// Babel 辅助函数的输出目录，默认为 @babel/runtime</span>
      <span class="token property">&quot;disablePlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editorSetting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tabIndent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insertSpaces&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;packOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3>`,2),v={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">/* 页面路径 */</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/about/about&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/* 全局页面窗口 */</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mini App&quot;</span><span class="token punctuation">,</span>       <span class="token comment">// 导航栏标题</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// 导航栏标题颜色 [black | white]</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 导航栏背景颜色</span>
    <span class="token property">&quot;navigationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 导航栏样式 [default | custom]</span>
    
    <span class="token property">&quot;enablePullDownRefresh&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// 开启下拉刷新</span>
    <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 下拉窗口背景颜色</span>
    <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dark&quot;</span>               <span class="token comment">// 下拉 loading 样式 [dark | light]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* 底部 Tab */</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span>             <span class="token comment">// 文本颜色</span>
    <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 选中时的文本颜色</span>
    <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// 背景颜色</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>                    <span class="token comment">// Tab 列表，最少 2 个，最多 5 个</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>         <span class="token comment">// 页面路径</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>                          <span class="token comment">// 文本内容</span>
        <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/home.png&quot;</span><span class="token punctuation">,</span>           <span class="token comment">// 图片路径 [81px * 81px, size &lt; 40kb]</span>
        <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/home-s.png&quot;</span>  <span class="token comment">// 选中时的图片路径</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/about/about&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;About&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h3>`,2),b={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>会覆盖 <code>app.json</code> 中相同的配置项。</p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><p><strong>图片</strong>。默认尺寸为 320px * 240px。</p><ul><li><p><code>mode</code>：图片裁剪模式。</p><ul><li><p><code>scaleToFill</code>：（默认）不保持宽高比，图片会被拉伸到刚好填满容器。</p></li><li><p><code>aspectFit</code>：保持宽高比，完全显示图片。容器可能有空白。</p></li><li><p><code>aspectFill</code>：保持宽高比，不留空白。图片可能完全覆盖或者超出容器。</p></li><li><p><code>widthFix</code>：保持宽高比，宽度不变，高度自适应。</p></li><li><p><code>heightFix</code>：保持宽高比，高度不变，宽度自适应。</p></li></ul></li><li><p><code>show-menu-by-longpress</code>：长按打开菜单（发送给朋友、收藏、保存图片）。</p></li><li><p><code>lazy-load</code>：图片懒加载。</p></li></ul><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3><p><strong>输入框</strong>。</p><ul><li><p><code>type</code>：键盘类型。</p><ul><li><p><code>text</code>：文本键盘。</p></li><li><p><code>number</code>：数字键盘。</p></li></ul></li><li><p><code>password</code>：密码框。</p></li><li><p><code>bind:input</code>：键盘输入时触发。<code>event.detail = { value, cursor, keyCode }</code></p></li><li><p><code>bind:focus</code>：聚焦时触发。</p></li><li><p><code>bind:blur</code>：失焦时触发。</p></li><li><p><code>bind:confirm</code>：点击 “完成” 按钮时触发。</p></li></ul><h3 id="swiper" tabindex="-1"><a class="header-anchor" href="#swiper" aria-hidden="true">#</a> swiper</h3><p><strong>轮播图</strong>。</p><ul><li><p><code>autoplay</code>：是否自动切换。</p></li><li><p><code>interval</code>：自动切换时间间隔。</p></li><li><p><code>circular</code>：是否开启无缝滚动。</p></li><li><p><code>indicator-dots</code>：是否显示面板指示点。</p></li><li><p><code>indicator-color</code>：指示点颜色。</p></li><li><p><code>indicator-active-color</code>：当前指示点颜色。</p></li></ul><h3 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h3><p><strong>导航</strong>。</p><ul><li><p><code>open-type</code>：跳转方式。</p><ul><li><p><code>navigate</code>：跳转到非 tabbar 页面。保留当前页面，可返回上一页。</p></li><li><p><code>redirect</code>：重定向到非 tabbar 页面。关闭当前页面，不能返回上一页。</p></li><li><p><code>switchTab</code>：切换到 tabbar 页面。</p></li><li><p><code>reLaunch</code>：重定向到任意页面。关闭所有页面，不能返回上一页。</p></li><li><p><code>navigateBack</code>：返回上一页。关闭当前页面。</p></li></ul></li><li><p><code>delta</code>：<code>navigateBack</code> 的回退层数。</p></li></ul><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><h3 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h3><ul><li><p><code>tap</code>：触摸（点击）事件。</p></li><li><p><code>touchstart</code>：触摸开始。</p></li><li><p><code>touchmove</code>：触摸后移动。</p></li><li><p><code>touchcancel</code>：触摸被打断（来电提醒，弹窗）。</p></li><li><p><code>touchend</code>：触摸结束。</p></li></ul><h3 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h3><p>使用 bind 绑定的事件，会触发事件冒泡。如果想阻止事件冒泡，可以使用 catch 来绑定事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bubbleFn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">catch:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>touchFn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义数据" tabindex="-1"><a class="header-anchor" href="#自定义数据" aria-hidden="true">#</a> 自定义数据</h3><p>使用 <code>data-</code> 绑定自定义数据。通过 <code>event.target.dataset</code> 获取。</p><p>或者使用 <code>mark:</code> 传递自定义数据。通过 <code>event.mark</code> 获取（含冒泡元素的 <code>mark</code> 数据）。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p><code>event.currentTarget</code>：绑定事件的元素。</p></li><li><p><code>event.target</code>：触发事件的元素。</p></li></ul></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h3 id="应用生命周期" tabindex="-1"><a class="header-anchor" href="#应用生命周期" aria-hidden="true">#</a> 应用生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 小程序初始化完成时触发（冷启动）
   */</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 小程序启动、或切入前台时触发
   */</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 小程序切入后台时触发
   */</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 小程序发生脚本错误、或 api 调用失败时触发
   */</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 页面加载完成时触发（冷启动）
   */</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面初次渲染完成时触发
   */</span>
  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面显示、或切入前台时触发
   */</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面隐藏、或切入后台时触发
   */</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面卸载时触发（重定向跳转）
   */</span>
  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面处理函数" tabindex="-1"><a class="header-anchor" href="#页面处理函数" aria-hidden="true">#</a> 页面处理函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 页面滚动时触发
   */</span>
  <span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面尺寸变化时触发
   */</span>
  <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 用于触发下拉刷新
   */</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 用于触发上拉加载
   */</span>
  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 用户分享时触发
   */</span>
  <span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h2><h3 id="基本选项" tabindex="-1"><a class="header-anchor" href="#基本选项" aria-hidden="true">#</a> 基本选项</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 配置项</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 属性</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 组件的数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 组件的方法</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h3><p>在 <code>app.json</code> 中注册就是全局组件；在 <code>pages/*.json</code> 中注册就是局部组件。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;custom-component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/components/custom-component/custom-component&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据监听器" tabindex="-1"><a class="header-anchor" href="#数据监听器" aria-hidden="true">#</a> 数据监听器</h3><p>使用 setData 改变 data 中的数据时，会触发数据监听器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;2024-07-22&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 监听一个数据</span>
    <span class="token function">time</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 监听多个数据</span>
    <span class="token string">&quot;page.current, page.size&quot;</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 监听所有数据</span>
    <span class="token string">&quot;**&quot;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h3><p>监听事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- vue: @update=&quot;updateFn&quot; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name"><span class="token namespace">bind:</span>update</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateFn<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">updateFn</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>detail <span class="token comment">// 触发事件时携带的额外参数</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>触发事件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateEmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// vue: emits(&quot;update&quot;, args)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>args <span class="token comment">/* datail */</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* option */</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3><p>组件自身的生命周期。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 组件实例创建完成时触发
     */</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件实例挂载到页面时触发
     */</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件实例卸载时触发
     */</span>
    <span class="token function">detached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件在视图层布局完成后触发
     */</span>
    <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件被移动时触发
     */</span>
    <span class="token function">moved</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件所在页面的生命周期。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 组件所在页面显示、或切入前台时触发
     */</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件所在页面隐藏、或切入后台时触发
     */</span>
    <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件所在页面尺寸变化时触发
     */</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="behavious" tabindex="-1"><a class="header-anchor" href="#behavious" aria-hidden="true">#</a> Behavious</h3><p>类似 mixin。</p>`,53),g={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html",target:"_blank",rel:"noopener noreferrer"},q=e(`<h2 id="分包" tabindex="-1"><a class="header-anchor" href="#分包" aria-hidden="true">#</a> 分包</h2><h3 id="分包介绍" tabindex="-1"><a class="header-anchor" href="#分包介绍" aria-hidden="true">#</a> 分包介绍</h3><p>分包可以让小程序容量更大、功能更多。分包在用户使用时按需加载，优化了小程序首次启动的下载时间。</p><p>每个使用分包的小程序必须有一个主包，主包中包含默认启动页面、TabBar 页面以及一些公共资源。</p><p>小程序启动时，默认会下载主包并启动主包内的页面，当用户进入分包内某个页面时，客户端会按需下载分包。</p><p>小程序分包大小由以下限制：</p><ul><li><p>小程序所有分包大小不能超过 20M。</p></li><li><p>单个分包和主包大小不能超过 2M。</p></li></ul><h3 id="普通分包" tabindex="-1"><a class="header-anchor" href="#普通分包" aria-hidden="true">#</a> 普通分包</h3><p>将需要分包的文件单独放入一个文件夹，在 <code>app.json</code> 的 subPackages 字段中声明分包结构。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packages&quot;</span><span class="token punctuation">,</span>      <span class="token comment">// 分包根目录</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normalPackage&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 分包别名</span>
      <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>               <span class="token comment">// 分包页面路径</span>
        <span class="token string">&quot;pages/shop/shop&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>普通分包可以使用主包的公共资源，例如封装的请求方法、公共样式。</p></div><h3 id="独立分包" tabindex="-1"><a class="header-anchor" href="#独立分包" aria-hidden="true">#</a> 独立分包</h3><p>独立分包不依赖主包和其他分包。我们可以将具有独立功能的页面配置到独立分包中。</p><p>配置 <code>subPackages.independent</code> 字段开启独立分包，其他配置与普通分包相同。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packages&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;indepPackage&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;pages/cart/cart&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;independent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 开启独立分包</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>独立分包不能使用主包的任何内容，包括公共样式。</p></div><h2 id="开放能力" tabindex="-1"><a class="header-anchor" href="#开放能力" aria-hidden="true">#</a> 开放能力</h2><h3 id="用户信息" tabindex="-1"><a class="header-anchor" href="#用户信息" aria-hidden="true">#</a> 用户信息</h3><p>获取用户头像和昵称。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chooseAvatar<span class="token punctuation">&quot;</span></span> 	<span class="token attr-name"><span class="token namespace">bind:</span>chooseavatar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chooseAvatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{avatar}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">bind:</span>submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onSubmit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nickname<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nickname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">form-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>set username<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&quot;/static/default-avatar.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token function">chooseAvatar</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">avatar</span><span class="token operator">:</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>avatarUrl
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">.</span>nickname
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转发分享" tabindex="-1"><a class="header-anchor" href="#转发分享" aria-hidden="true">#</a> 转发分享</h3><p>声明 <code>onShareAppMessage</code> 事件，否则转发功能不可用。</p><ul><li><p>点击右上角三点转发。</p></li><li><p>自定义按钮转发。会触发 <code>onShareAppMessage</code> 事件。</p></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>share<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Share<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event <span class="token comment">/*
      通过右上角三点转发 {form: &quot;menu&quot;, target: undefined}
      通过自定义按钮转发 {form: &quot;button&quot;, target: {...}}
    */</span>
    
    <span class="token comment">// 自定义分享封面</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Share the shop!&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 封面标题</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/pages/shop/shop&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 分享的页面，默认为当前页</span>
      <span class="token literal-property property">imageUrl</span><span class="token operator">:</span> <span class="token string">&quot;/static/shop.png&quot;</span> <span class="token comment">// 封面图像</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置允许转发后，可以声明 <code>onShareTimeline</code> 事件，开启 “分享到朋友圈” 功能。</p><p>只能点击右上角三点分享到朋友圈。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token function">onShareTimeline</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event <span class="token comment">// {from: &quot;menu&quot;, target: undefined}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手机号验证" tabindex="-1"><a class="header-anchor" href="#手机号验证" aria-hidden="true">#</a> 手机号验证</h3><p>将 <code>event.detail.code</code> 发送给后端，获得用户手机号。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 手机号快速验证组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPhoneNumber<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>getphonenumber</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPhoneNumber<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- 手机号实时验证组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getRealtimePhoneNumber<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>getrealtimephonenumber</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getRealtimePhoneNumber<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程" aria-hidden="true">#</a> 登录流程</h2><p>通过 <code>wx.login</code> 得到一个临时授权码 code。将授权码发送给服务器获取 token，再携带 token 请求用户信息。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> code <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiLogin</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
        wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;TOKEN&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>
        
        <span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiGetUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;USER_INFO&quot;</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支付流程" tabindex="-1"><a class="header-anchor" href="#支付流程" aria-hidden="true">#</a> 支付流程</h2>`,36),y={href:"https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestPayment.html#%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"wx.requestPayment",-1),x=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">submitOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 收集订单数据：商品、收件人</span>
    <span class="token comment">// 获取订单号</span>
    <span class="token keyword">const</span> orderCode <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiSubmitOrder</span><span class="token punctuation">(</span>orderForm<span class="token punctuation">)</span>
    <span class="token comment">// 获取支付参数：时间戳、支付ID、签名</span>
    <span class="token keyword">const</span> payParams <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiGetPayParams</span><span class="token punctuation">(</span>orderCode<span class="token punctuation">)</span>
    <span class="token comment">// 发起微信支付</span>
    <span class="token keyword">const</span> payInfo <span class="token operator">=</span> <span class="token keyword">await</span> wx<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span>payParams<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>payInfo<span class="token punctuation">.</span>errMsg <span class="token operator">===</span> <span class="token string">&quot;requestPayment:ok&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 查询支付状态</span>
      <span class="token keyword">const</span> payStatus <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiGetPayStatus</span><span class="token punctuation">(</span>orderCode<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>payStatus<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 跳转到订单页面</span>
        wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/pages/order/order&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新机制" tabindex="-1"><a class="header-anchor" href="#更新机制" aria-hidden="true">#</a> 更新机制</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建 updateManager 实例，用于管理更新</span>
    <span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 监听是否有新版本，如果有的话会主动触发下载</span>
    updateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新提示&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;新版本已经准备好，是否重启应用？&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 强制小程序重启并使用新版本</span>
            updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(j,_){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,r,s("p",null,[n("详见 "),s("a",d,[n("设置 / 项目配置文件"),t(a)]),n("。")]),k,s("p",null,[n("详见 "),s("a",v,[n("小程序配置 / 全局配置"),t(a)]),n("。")]),m,s("p",null,[n("详见 "),s("a",b,[n("小程序配置 / 页面配置"),t(a)]),n("。")]),h,s("p",null,[n("详见 "),s("a",g,[n("自定义组件 / behaviors"),t(a)]),n("。")]),q,s("p",null,[n("提交订单，将订单信息发送给服务器，得到订单号。将订单号发送给服务器，得到 "),s("a",y,[n("支付参数"),t(a)]),n("。然后调用 "),f,n(" 传入支付参数，发起微信支付 。等待用户支付成功后，跳转到订单页面。")]),x])}const S=p(l,[["render",w],["__file","mini-app.html.vue"]]);export{S as default};
