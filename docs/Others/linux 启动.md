# linux 

1. **云计算和虚拟化：**
   - 学习如何配置和管理云服务器，理解云计算概念和服务模型。
   - 掌握虚拟化技术，如容器化和虚拟机管理。
2. **网络和安全：**
   - 配置和管理网络服务，学习网络安全的基础知识。
   - 实施防火墙、身份验证和访问控制。
3. **分布式系统：**
   - 学习如何构建和管理分布式系统，包括数据库、消息队列和负载均衡器。
   - 研究容错性和分布式一致性的理论和实践。
4. **自动化和编排：**
   - 使用自动化工具和编排框架来管理和部署应用程序。
   - 学习脚本语言和配置管理工具。
5. **大数据和数据科学：**
   - 学习如何使用云平台处理和分析大规模数据。
   - 探索机器学习和人工智能应用。
6. **Web开发和应用部署：**
   - 构建和部署Web应用程序，了解云上的托管服务。
   - 学习使用容器和服务器less架构。
7. **容器化技术：**
   - 使用Docker等容器技术构建、部署和管理应用程序。
   - 学习Kubernetes等容器编排工具。

aliyun服务器： ssh root@101.201.46.135

宝塔面板 

最后还是采用ssh的方法

SSH免密登录（SSH Public Key Authentication）是一种通过使用密钥对而不是密码进行SSH登录的方法，提高了安全性并简化了登录过程。以下是SSH免密登录的配置过程：

1. **生成密钥对：** 在本地机器上生成一对密钥，包括私钥和公钥。私钥存储在本地机器上，而公钥会被传输到远程机器上。

   使用以下命令生成密钥对：

   ```
   bashCopy code
   ssh-keygen -t rsa
   ```

   这会在`~/.ssh/`目录下生成`id_rsa`（私钥）和`id_rsa.pub`（公钥）文件。

2. **将公钥复制到远程服务器：** 将本地生成的公钥复制到远程服务器的`~/.ssh/authorized_keys`文件中。可以使用`ssh-copy-id`命令，它会自动将公钥添加到目标用户的`authorized_keys`文件中。

   ```
   bashCopy code
   ssh-copy-id username@remote_host
   ```

   如果`ssh-copy-id`命令不可用，可以手动将公钥内容追加到远程服务器的`~/.ssh/authorized_keys`文件中。

3. **设置权限：** 确保`~/.ssh/` 目录和 `~/.ssh/authorized_keys` 文件的权限正确。权限设置对于SSH的安全性至关重要。

   ```
   bashCopy codechmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   ```

4. **测试SSH免密登录：** 尝试使用SSH连接到远程服务器，应该不再需要输入密码。

   ```
   bashCopy code
   ssh username@remote_host
   ```

   如果一切设置正确，你将可以无密码登录到远程服务器。

请注意，为了安全起见，私钥文件（`id_rsa`）应该保持在本地机器上，并且不应该分享给其他人。同时，公钥文件（`id_rsa.pub`）需要传输到需要访问的远程服务器。



[[Linux\]创建新用户及用户权限 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/205217949)

```c
scp -r /home/user/documents username@remote_host:/var/www/
scp -P 80 baseline2.cu hjy@10.78.18.247:~/gemm
```

### 11-16

服务器改名

找到/etc/hosts  sudo vim hosts 添加一行  101.201.46.135  server_jy 再在ssh时重新add一下这个别名，完成

以后就叫server_jy了~

监听端口

安全组

查找命令

```[root@iZ2ze72tpnr9ta1r8uvbujZ /]# find / -name nginx
[root@iZ2ze72tpnr9ta1r8uvbujZ /]# find / -name nginx
/www/server/nginx
/www/server/nginx/src/objs/nginx
/www/server/nginx/sbin/nginx
/www/server/panel/rewrite/nginx
/www/server/panel/vhost/nginx
/www/server/panel/vhost/template/nginx
/etc/rc.d/init.d/nginx
/usr/bin/nginx
/usr/local/nginx
[root@iZ2ze72tpnr9ta1r8uvbujZ /]#
```

/usr/bin

/usr/local

```c
[root@iZ2ze72tpnr9ta1r8uvbujZ /]# start nginx
-bash: start: command not found
[root@iZ2ze72tpnr9ta1r8uvbujZ /]# nginx
nginx: [emerg] bind() to 0.0.0.0:888 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:888 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:888 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:888 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:888 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] still could not bind()
[root@iZ2ze72tpnr9ta1r8uvbujZ /]# sudo lsof -i :80
COMMAND      PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
AliYunDun   1473 root   11u  IPv4  27166      0t0  TCP iZ2ze72tpnr9ta1r8uvbujZ:37902->100.100.30.26:http (ESTABLISHED)
nginx     269834 root    9u  IPv4 679139      0t0  TCP *:http (LISTEN)
nginx     269835  www    9u  IPv4 679139      0t0  TCP *:http (LISTEN)
nginx     269836  www    9u  IPv4 679139      0t0  TCP *:http (LISTEN)
[root@iZ2ze72tpnr9ta1r8uvbujZ /]#
```



## grep

`grep`是一个在文本中搜索模式的强大命令行工具。它的名字来源于全局正则表达式打印（Global Regular Expression Print）。

下面是`grep`命令的基本用法和一些常见选项：

```
bashCopy code
grep [options] pattern [file...]
```

- `pattern`：要搜索的模式，可以是字符串或正则表达式。
- `file`：要在其中搜索模式的文件。如果没有提供文件名，`grep`将从标准输入中读取。

**常见选项：**

- `-i`：忽略大小写。
- `-r`或`-R`：递归搜索子目录。
- `-n`：显示匹配行的行号。
- `-v`：反向选择，显示不匹配的行。
- `-l`：只显示包含匹配项的文件名。
- `-c`：只显示匹配的行数而不显示匹配的内容。
- `-A`，`-B`，`-C`：显示匹配行的上下文行。
- `-e`：指定多个模式。

**示例：**

1. 在文件中搜索包含关键字的行：

   ```
   bashCopy code
   grep "keyword" filename
   ```

2. 递归搜索目录下所有文件中包含关键字的行：

   ```
   bashCopy code
   grep -r "keyword" directory
   ```

3. 忽略大小写：

   ```
   bashCopy code
   grep -i "keyword" filename
   ```

4. 显示匹配行的行号：

   ```
   bashCopy code
   grep -n "keyword" filename
   ```

5. 反向选择，显示不匹配的行：

   ```
   bashCopy code
   grep -v "keyword" filename
   ```

这只是一些`grep`命令的基本用法和选项，`grep`有很多其他选项和功能，你可以通过`man grep`查看`grep`的手册页以获取更多详细信息。\

竟然没有apt-get？？

```c
[root@iZ2ze72tpnr9ta1r8uvbujZ hjy]# lsb_release -a
LSB Version:    :core-4.1-amd64:core-4.1-noarch
Distributor ID: AlibabaCloud
Description:    Alibaba Cloud Linux release 3 (Soaring Falcon)
Release:        3
Codename:       SoaringFalcon
```

为什么命令查找不到是bash打头

```c
bash: apt-get: command not found
```





如果你在使用命令时遇到 "命令找不到" 的错误，这可能有多个原因。一种可能性是系统无法找到或识别该命令，这可能与环境变量或命令的位置有关。以下是一些可能的原因和解决方法：

1. **环境变量问题：** 确保命令所在的路径包含在系统的`PATH`环境变量中。`PATH`环境变量包含一组目录，系统在这些目录中查找可执行文件。你可以使用以下命令查看`PATH`：

   ```
   bashCopy code
   echo $PATH
   ```

   如果命令所在的目录不在`PATH`中，你可以将其添加到`PATH`。例如：

   ```
   bashCopy code
   export PATH=$PATH:/path/to/your/command
   ```

   在这里，将`/path/to/your/command`替换为包含你的命令的实际路径。

2. **命令未安装：** 确保你尝试运行的命令已经安装在系统上。有些命令可能需要单独安装。你可以使用系统的包管理器安装它们。

3. **文件权限问题：** 检查命令文件的权限，确保你有执行权限。你可以使用`ls -l`命令查看文件权限，例如：

   ```
   bashCopy code
   ls -l /path/to/your/command
   ```

   如果没有执行权限，可以使用`chmod`命令添加执行权限：

   ```
   bashCopy code
   chmod +x /path/to/your/command
   ```

4. **命令拼写错误：** 请确保你正确拼写了要运行的命令。

如果你能提供更具体的错误信息或命令示例，我可以提供更详细的帮助。





```
[root@iZ2ze72tpnr9ta1r8uvbujZ hjy]# echo $PATH
/home/hjy/.local/bin:/home/hjy/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin
```





发行版问题

没有apt-get

```c
sudo dnf install ?
[root@iZ2ze72tpnr9ta1r8uvbujZ hjy]# sudo dnf install pip
Last metadata expiration check: 3:41:20 ago on Sat Nov 18 08:06:48 2023.
No match for argument: pip
Error: Unable to find a match: pip
```



wordpress建站  ok

mysql数据库使用



域名只不过是将101.201.46.135之类的ip地址用DNS服务器映射到可记忆的字符串？



是的，域名系统（DNS）的主要作用是将易于记忆的域名映射到计算机网络中的IP地址。IP地址是互联网上计算机的唯一标识符，通过将域名映射到IP地址，人们可以使用容易记忆的名称来访问网站、服务器或其他网络服务，而不必记住复杂的数字地址。

例如，将域名 "example.com" 映射到 IP 地址 "101.201.46.135"。当你在浏览器中键入 "example.com" 时，计算机首先会查询DNS服务器，获取与 "example.com" 相关联的IP地址，然后使用这个IP地址建立连接到相应的服务器。

DNS使用一个层次化的结构，包括顶级域（如.com、.org）、二级域（如example.com）、子域等。这个结构允许全球范围内唯一地标识不同的域名，并通过分布式的DNS服务器系统来管理这些映射关系。

总的来说，域名的作用是提供一个便于记忆和使用的方式来访问互联网上的资源，而不必记住它们的具体IP地址。




自行建站有很多选择，取决于你的技术水平、需求、预算和个人偏好。以下是一些常见的自行建站工具和平台：

1. **WordPress：** WordPress 是一个流行的开源内容管理系统 (CMS)，适用于各种类型的网站，从博客到企业网站。它有大量的主题和插件，易于使用，适合不具备编程技能的用户。
2. **Jekyll：** Jekyll 是一个静态网站生成器，使用 Ruby 语言。它适用于博客和简单的网站，生成的网站可以部署到几乎任何托管服务上。
3. **Hugo：** Hugo 是另一个静态网站生成器，用 Go 语言编写，具有快速的构建速度。它适用于个人博客和小型网站。
4. **GitHub Pages：** 如果你使用 Git 进行版本控制，并且喜欢在 GitHub 上托管代码，GitHub Pages 是一个免费的静态网站托管服务。它与 Jekyll 集成得很好，但也支持其他静态网站生成器。
5. **Wix：** Wix 是一个易于使用的网站构建平台，提供各种模板和拖放式编辑器。适合那些不具备编码经验的用户。
6. **Squarespace：** Squarespace 是一个集成的网站建设平台，提供专业设计的模板和简单的拖放编辑工具。适用于创意和商业网站。
7. **Django：** 如果你有编程经验，并且想要更大的灵活性，Django 是一个强大的Python框架，适用于开发复杂的Web应用程序。
8. **VuePress 和 Nuxt.js：** 如果你熟悉 Vue.js，VuePress 适用于文档和博客。而 Nuxt.js 则是一个用于构建Vue.js应用程序的框架，也可以用于服务器渲染和静态站点生成。

选择哪个工具取决于你的具体需求和技术偏好。对于初学者，使用WordPress、Wix或Squarespace可能是更容易上手的选择。对于有一些编程经验的人来说，静态网站生成器如Jekyll、Hugo或VuePress可能是一个不错的选择。



![image-20231118203501265](D:\notes\assets\image-20231118203501265.png)

2023_DD是guahao老师在github上的仓库的全部内容，其中并未包括node_modules,src/assets/javascripts文件的内容，请问



github.io建站过程

使用

![image-20231119000619441](D:\notes\assets\image-20231119000619441.png)

![image-20231119000627543](D:\notes\assets\image-20231119000627543.png)