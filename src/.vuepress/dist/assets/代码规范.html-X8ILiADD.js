import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-I-pu7WEk.js";const t={},p=e(`<h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> prettier</h2><p>安装 prittier 及相关插件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> prettier eslint-config-prettier eslint-plugin-prettier <span class="token parameter variable">--D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 eslint。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* .eslintrc.cjs */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token string">&quot;plugin:prettier/recommended&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置命令。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/* package.json */</span>

<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write &#39;src/**/*.+(js|ts|jsx|tsx)&#39;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 prittier。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* .prettierrc.js */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 箭头函数只有一个参数时，省略括号</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 括号内不出现空格</span>
  <span class="token literal-property property">bracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象中的空格 默认 true，true: { foo: bar }，false: {foo: bar}</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 在jsx中把 &#39;&gt;&#39; 是否单独放一行</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span>
  <span class="token comment">// 换行方式</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 分号</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 单引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 缩进</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用 tab 缩进</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 行尾逗号，默认 none，可选 (none | es5 | all)，es5 包括 es5 中的数组、对象，all 包括函数对象</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h2><p>在 <code>git commit</code> 之前执行自定义命令（hook）。</p><p>安装 husky。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> husky <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置命令。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/* package.json */</span>

<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 husky hook，在 commit 前执行<strong>代码</strong>规范检查。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npm run lint&quot;</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npm run format&quot;</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;git add .&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> commitlint</h2><p>安装 commitlint。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @commitlint/config-conventional @commitlint/cli <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 commitlint。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* commitlint.config.js */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 husky hook，在 commit 前执行<strong>注释</strong>规范检查。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npx --no -- commitlint --edit \${1}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>commit 注释前缀：</p><ul><li><p>feat 新增功能</p></li><li><p>chore 小改动</p></li><li><p>fix 修复 bug</p></li><li><p>release 发布版本</p></li><li><p>style 调整代码（修改缩进、补全分号等）</p></li><li><p>docs 更新文档</p></li><li><p>build 构建工具或外部依赖的改动（webpack、npm）</p></li><li><p>refactor 重构代码</p></li><li><p>revert 版本回退</p></li><li><p>perf 性能优化</p></li><li><p>test 增加测试</p></li></ul>`,26),i=[p];function l(o,c){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","代码规范.html.vue"]]);export{u as default};
