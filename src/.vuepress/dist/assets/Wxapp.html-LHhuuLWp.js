import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as p,c,b as n,d as e,e as t,a as s}from"./app-pWZBNBDW.js";const l={},u=s(`<h2 id="基本目录" tabindex="-1"><a class="header-anchor" href="#基本目录" aria-hidden="true">#</a> 基本目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── app.js
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2>`,3),d={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"},r=s(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/* app.json */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2>`,2),v={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>会覆盖 <code>app.json</code> 中相同的配置项。</p><h2 id="应用声明周期" tabindex="-1"><a class="header-anchor" href="#应用声明周期" aria-hidden="true">#</a> 应用声明周期</h2><ul><li><p><code>onLaunch</code> 小程序初始化。鉴权★</p></li><li><p><code>onShow</code> 小程序启动或切前台★</p></li><li><p><code>onHide</code> 小程序切后台★</p></li></ul><h2 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
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
   * 生命周期函数--监听页面滚动
   */</span>
  <span class="token function-variable function">onPageScroll</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面尺寸变化
   */</span>
  <span class="token function-variable function">onResize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 页面相关事件处理函数--监听用户下拉动作
   */</span>
  <span class="token function-variable function">onPullDownRefresh</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 页面相关事件处理函数--监听页面上拉触底
   */</span>
  <span class="token function-variable function">onReachBottom</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 页面相关事件处理函数--用户点击右上角分享
   */</span>
  <span class="token function-variable function">onShareAppMessage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h2><p>组件自身生命周期</p><ul><li><p><code>created</code> 组件实例被创建时执行</p></li><li><p><code>attached</code> 组件实例进入页面节点树时执行</p></li><li><p><code>detached</code> 组件实例被从页面节点树移除时执行</p></li><li><p><code>ready</code> 组件在视图层布局完成后执行</p></li><li><p><code>moved</code> 组件实例被移动到节点树另一个位置时执行</p></li></ul><p>组件所在页面生命周期</p><ul><li><p><code>show</code> 组件所在页面显示时执行</p></li><li><p><code>hide</code> 组件所在页面隐藏时执行</p></li><li><p><code>resize</code> 组件所在页面尺寸变化时执行</p></li></ul><h2 id="小程序分包" tabindex="-1"><a class="header-anchor" href="#小程序分包" aria-hidden="true">#</a> 小程序分包</h2><p>小程序有体积的限制（2M），如果需要让小程序体积更大功能更多，就需要进行分包（20M）。分包只在使用时加载。</p><p>每个分包小程序必须有一个主包，主包中有启动页面、TabBar 页面以及一些公共资源。</p><p>普通分包：将需要分包的文件单独放入一个文件夹，在 <code>app.json</code> 的 subpackages 字段中声明分包结构。</p><p>普通分包可以使用主包中的公共资源，例如发送请求的函数、公共样式。</p><p>独立分包：和普通分包配置一样，需要再添加一个 independent 字段开启独立分包。</p><p>独立分包不能使用主包中的任何内容。</p><h2 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h2><h2 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程" aria-hidden="true">#</a> 登录流程</h2><p>首先在 onLaunch 生命周期中进行登录鉴权，如果鉴权失败就跳转到登录页面。通过 <code>wx.login</code> 得到一个临时的授权码 code；然后把这个授权码发送给服务器获取 token；再携带 token 去向服务器请求用户数据。如果用户登录过就会得到用户数据，如果用户没有登录过就会随机生成一个用户名和头像。</p><h2 id="支付流程" tabindex="-1"><a class="header-anchor" href="#支付流程" aria-hidden="true">#</a> 支付流程</h2><p>提交订单，将订单信息（商品数据、收件人信息等）发送给服务器，得到订单号；再将订单号发送给服务器，得到用于支付的参数（时间戳、ID、签名等）；然后调用 <code>wx.requestPayment</code> 传入支付参数，跳转到用户支付的页面；用户支付成功，跳转页面。</p><h2 id="上线流程" tabindex="-1"><a class="header-anchor" href="#上线流程" aria-hidden="true">#</a> 上线流程</h2><p>将代码上传到微信平台；点击提交审核；审核通过就上线了。</p><h2 id="同步最新版本" tabindex="-1"><a class="header-anchor" href="#同步最新版本" aria-hidden="true">#</a> 同步最新版本</h2><p>判断小程序版本是否支持更新机制；创建一个 updateManager 实例，通过这个实例监听检测版本更新事件，如果有新的版本，小程序就会自动在后台下载新版本，然后监听小程序新版本下载完成事件，下载完成后就会重启小程序。</p>`,26);function k(b,h){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",d,[e("小程序配置 / 全局配置 (qq.com)"),t(a)])]),r,n("p",null,[n("a",v,[e("小程序配置 / 页面配置 (qq.com)"),t(a)])]),m])}const g=o(l,[["render",k],["__file","Wxapp.html.vue"]]);export{g as default};
