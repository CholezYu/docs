import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c,b as n,d,e as r,a as s}from"./app-8LZp8q5q.js";const t={},p=s(`<h2 id="部署前端项目" tabindex="-1"><a class="header-anchor" href="#部署前端项目" aria-hidden="true">#</a> 部署前端项目</h2><p>阿里云服务器准备就绪。。。</p><p>在根目录安装 Git。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Nginx 的依赖包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> pcre pcre-devel gcc openssl openssl-devel zlib zlib-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载 Nginx 安装包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://nginx.org/download/nginx-1.25.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压安装包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.25.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入 Nginx 并进行配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> nginx-1.25.1

./configure --with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译并安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>

<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建目录并克隆项目。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> www

<span class="token builtin class-name">cd</span> www

<span class="token function">git</span> clone url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开文件树，找到 <code>/usr/local/nginx/conf/nginx.conf</code> 文件双击打开，修改 Nginx 配置文件。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># nginx/conf/nginx.conf</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">5000</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
  
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   /www/project/build</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/sbin

<span class="token comment"># 运行</span>
./nginx

<span class="token comment"># 停止</span>
./nginx <span class="token parameter variable">-s</span> stop

<span class="token comment"># 重新运行 = 停止 + 运行</span>
./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="断开-ssh-客户端后-保持进程继续运行" tabindex="-1"><a class="header-anchor" href="#断开-ssh-客户端后-保持进程继续运行" aria-hidden="true">#</a> 断开 SSH 客户端后，保持进程继续运行</h2>`,21),o={href:"https://help.aliyun.com/zh/ecs/support/configure-linux-to-keep-the-process-running-after-the-ssh-client-is-disconnected#a1407bd096eso",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>安装 screen 工具。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">screen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 screen 窗口。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-S</span> <span class="token punctuation">[</span><span class="token variable">$Name</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当需要运行脚本、执行程序时，在命令前添加 screen 即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/sbin

<span class="token comment"># 运行</span>
<span class="token function">screen</span> ./nginx

<span class="token comment"># 停止</span>
<span class="token function">screen</span> ./nginx <span class="token parameter variable">-s</span> stop

<span class="token comment"># 重新运行 = 停止 + 运行</span>
<span class="token function">screen</span> ./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时按 <strong>Ctrl</strong> + <strong>A</strong> + <strong>D</strong> 键，就可以退出 SSH 登录，但不会影响 screen 程序的运行。</p><p>需要继续工作时，登录实例，然后执行如下命令，恢复会话即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function v(m,b){const e=i("ExternalLinkIcon");return l(),c("div",null,[p,n("p",null,[n("a",o,[d("Linux 系统下如何保持进程在 SSH 客户端断开后仍继续运行？-阿里云帮助中心 (aliyun.com)"),r(e)])]),u])}const k=a(t,[["render",v],["__file","Nginx.html.vue"]]);export{k as default};
