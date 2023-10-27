# 基本使用

## 基本操作

- 查看版本: `git --version`

- 配置账户: `git config -global user.name ["username"]`

- 配置邮箱: `git config -global user.email ["email"]`

- 查看配置: `git config -list`

- 创建仓库: `git init`

## 提交操作

- 添加到暂存区: `git add [file]`

- 提交到仓库区: `git commit -m "注释"`

- 查看仓库状态: `git status`

## 历史记录

- 查看历史记录: `git log`

- 查看简易历史记录: `git log --oneline`

- 查看详细历史记录: `git reflog`

- 覆盖提交: `git commit --amend -m "注释"`

## 撤回操作

- 撤回到工作区: `git checkout .`

- 撤回到暂存区: `git reset .`

- 撤回到对应历史记录: `git reset --hard [commit(id)]`

## 删除操作

- 删除工作区和仓库区的文件: `git rm [file]`

- 删除仓库区的文件: `git rm --cached [file]`

## 比较操作

- 比较工作区和暂存区: `git diff`

- 比较暂存区和仓库区: `git diff --cached`

- 比较两个历史记录: `git diff [commit(id)] [commit(id)]`

## 分支操作

- 查看分支: `git branch`

- 创建分支: `git branch [branch]`

- 切换分支: `git checkout [branch]`

- 合并分支: `git merge [branch]`

- 删除分支: `git branch -d [branch]`

- 强制删除: `git branch -D [branch]`

## 版本操作

- 查看版本: `git tag`

- 创建版本: `git tag [tag]`

- 切换版本: `git checkout [tag]`

- 删除版本: `git tag -d [tag]`

## 线上仓库

- 将线上仓库克隆到线下

  - 获取线上仓库并拉取: `git clone [url]`

  - 添加到暂存区: `git add .`

  - 提交到仓库区: `git commit -m "注释"`

  - 推送到线上仓库: `git push`

- 将线下仓库同步到线上

  - 创建仓库: `git init`

  - 开启线上仓库，不需要初始化

  - 远程连接: `git remote add origin [url]`

  - 首次推送: `git push -u origin "master"`

  - 添加到暂存区: `git add .`

  - 提交到仓库区: `git commit -m "注释"`

  - 推送到线上仓库: `git push`

- 撤销线上仓库提交记录

  - 查看历史记录: `git log`

  - 重置到指定版本: `git reset –soft [commit(id)]`

  - 强制提交: `git push origin master --force`

## 同步分支

> 同步 tag 操作与同步分支操作相同

- 将本地分支推送到线上: `git push origin [local branch]:[online branch]`

- 将线上分支拉取到线下: `git pull origin [online branch]:[local branch]`

- 删除线上分支: `git push origin :[online branch]`
