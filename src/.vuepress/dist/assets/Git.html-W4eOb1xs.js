import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as d,d as o}from"./app-OeOCBHA0.js";const l={},c=o('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2><ul><li><p>查看版本: <code>git --version</code></p></li><li><p>配置账户: <code>git config -global user.name [&quot;username&quot;]</code></p></li><li><p>配置邮箱: <code>git config -global user.email [&quot;email&quot;]</code></p></li><li><p>查看配置: <code>git config -list</code></p></li><li><p>创建仓库: <code>git init</code></p></li></ul><h2 id="提交操作" tabindex="-1"><a class="header-anchor" href="#提交操作" aria-hidden="true">#</a> 提交操作</h2><ul><li><p>添加到暂存区: <code>git add [file]</code></p></li><li><p>提交到仓库区: <code>git commit -m &quot;注释&quot;</code></p></li><li><p>查看仓库状态: <code>git status</code></p></li></ul><h2 id="历史记录" tabindex="-1"><a class="header-anchor" href="#历史记录" aria-hidden="true">#</a> 历史记录</h2><ul><li><p>查看历史记录: <code>git log</code></p></li><li><p>查看简易历史记录: <code>git log --oneline</code></p></li><li><p>查看详细历史记录: <code>git reflog</code></p></li><li><p>覆盖提交: <code>git commit --amend -m &quot;注释&quot;</code></p></li></ul><h2 id="撤回操作" tabindex="-1"><a class="header-anchor" href="#撤回操作" aria-hidden="true">#</a> 撤回操作</h2><ul><li><p>撤回到工作区: <code>git checkout .</code></p></li><li><p>撤回到暂存区: <code>git reset .</code></p></li><li><p>撤回到对应历史记录: <code>git reset --hard [commit(id)]</code></p></li></ul><h2 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h2><ul><li><p>删除工作区和仓库区的文件: <code>git rm [file]</code></p></li><li><p>删除仓库区的文件: <code>git rm --cached [file]</code></p></li></ul><h2 id="比较操作" tabindex="-1"><a class="header-anchor" href="#比较操作" aria-hidden="true">#</a> 比较操作</h2><ul><li><p>比较工作区和暂存区: <code>git diff</code></p></li><li><p>比较暂存区和仓库区: <code>git diff --cached</code></p></li><li><p>比较两个历史记录: <code>git diff [commit(id)] [commit(id)]</code></p></li></ul><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2><ul><li><p>查看分支: <code>git branch</code></p></li><li><p>创建分支: <code>git branch [branch]</code></p></li><li><p>切换分支: <code>git checkout [branch]</code></p></li><li><p>合并分支: <code>git merge [branch]</code></p></li><li><p>删除分支: <code>git branch -d [branch]</code></p></li><li><p>强制删除: <code>git branch -D [branch]</code></p></li></ul><h2 id="版本操作" tabindex="-1"><a class="header-anchor" href="#版本操作" aria-hidden="true">#</a> 版本操作</h2><ul><li><p>查看版本: <code>git tag</code></p></li><li><p>创建版本: <code>git tag [tag]</code></p></li><li><p>切换版本: <code>git checkout [tag]</code></p></li><li><p>删除版本: <code>git tag -d [tag]</code></p></li></ul><h2 id="线上仓库" tabindex="-1"><a class="header-anchor" href="#线上仓库" aria-hidden="true">#</a> 线上仓库</h2><ul><li><p>将线上仓库克隆到线下</p><ul><li><p>获取线上仓库并拉取: <code>git clone [url]</code></p></li><li><p>添加到暂存区: <code>git add .</code></p></li><li><p>提交到仓库区: <code>git commit -m &quot;注释&quot;</code></p></li><li><p>推送到线上仓库: <code>git push</code></p></li></ul></li><li><p>将线下仓库同步到线上</p><ul><li><p>创建仓库: <code>git init</code></p></li><li><p>开启线上仓库，不需要初始化</p></li><li><p>远程连接: <code>git remote add origin [url]</code></p></li><li><p>首次推送: <code>git push -u origin &quot;master&quot;</code></p></li><li><p>添加到暂存区: <code>git add .</code></p></li><li><p>提交到仓库区: <code>git commit -m &quot;注释&quot;</code></p></li><li><p>推送到线上仓库: <code>git push</code></p></li></ul></li><li><p>撤销线上仓库提交记录</p><ul><li><p>查看历史记录: <code>git log</code></p></li><li><p>重置到指定版本: <code>git reset –soft [commit(id)]</code></p></li><li><p>强制提交: <code>git push origin master --force</code></p></li></ul></li></ul><h2 id="同步分支" tabindex="-1"><a class="header-anchor" href="#同步分支" aria-hidden="true">#</a> 同步分支</h2><blockquote><p>同步 tag 操作与同步分支操作相同</p></blockquote><ul><li><p>将本地分支推送到线上: <code>git push origin [local branch]:[online branch]</code></p></li><li><p>将线上分支拉取到线下: <code>git pull origin [online branch]:[local branch]</code></p></li><li><p>删除线上分支: <code>git push origin :[online branch]</code></p></li></ul>',22),t=[c];function a(p,r){return e(),d("div",null,t)}const u=i(l,[["render",a],["__file","Git.html.vue"]]);export{u as default};
