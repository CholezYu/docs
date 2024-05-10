---
title: Nginx
icon: nginx
date: 2024-05-09
---

## 部署前端项目

阿里云服务器准备就绪。。。

在根目录安装 Git。

```shell
yum install git
```

安装 Nginx 的依赖包。

```shell
yum install pcre pcre-devel gcc openssl openssl-devel zlib zlib-devel
```

下载 Nginx 安装包。

```shell
wget https://nginx.org/download/nginx-1.25.1.tar.gz
```

解压安装包。

```shell
tar -zxvf nginx-1.25.1.tar.gz
```

进入 Nginx 并进行配置。

```shell
cd nginx-1.25.1

./configure --with-http_ssl_module
```

编译并安装。

```shell
make

make install
```

创建目录并克隆项目。

```shell
mkdir www

cd www

git clone url
```

打开文件树，找到 `/usr/local/nginx/conf/nginx.conf` 文件双击打开，修改 Nginx 配置文件。

```nginx
# nginx/conf/nginx.conf

server {
  listen       5000;
  server_name  localhost;
  
  location / {
    root   /www/project/build;
    index  index.html index.htm;
  }
}
```

启动项目。

```shell
cd /usr/local/nginx/sbin

# 运行
./nginx

# 停止
./nginx -s stop

# 重新运行 = 停止 + 运行
./nginx -s reload
```

## 断开 SSH 客户端后，保持进程继续运行

[Linux 系统下如何保持进程在 SSH 客户端断开后仍继续运行？-阿里云帮助中心 (aliyun.com)](https://help.aliyun.com/zh/ecs/support/configure-linux-to-keep-the-process-running-after-the-ssh-client-is-disconnected#a1407bd096eso)

安装 screen 工具。

```shell
yum install screen
```

创建 screen 窗口。

```shell
screen -S [$Name]
```

当需要运行脚本、执行程序时，在命令前添加 screen 即可。

```shell
cd /usr/local/nginx/sbin

# 运行
screen ./nginx

# 停止
screen ./nginx -s stop

# 重新运行 = 停止 + 运行
screen ./nginx -s reload
```

同时按 **Ctrl** + **A** + **D** 键，就可以退出 SSH 登录，但不会影响 screen 程序的运行。

需要继续工作时，登录实例，然后执行如下命令，恢复会话即可。

```shell
screen -r -d
```