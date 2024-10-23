[English](./README.md) | 简体中文


<div align= "center">
<img align="center" width=200 src="./public/logo.png" />
</div>

<div align= "center">
 <h1>Rubick</h1>

 <img alt="release" src="https://img.shields.io/github/downloads/rubickCenter/rubick/total" />
 <a href="https://github.com/rubickCenter/rubick/releases">
    <img alt="release" src="https://img.shields.io/github/package-json/v/rubickCenter/rubick" />
 </a>
 <a href="https://github.com/rubickCenter/rubick/actions">
   <img alt=building src=https://img.shields.io/github/actions/workflow/status/rubickCenter/rubick/main.yml>
 </a>
 <a href="https://github.com/rubickCenter/rubick/blob/master/LICENSE">
    <img alt="npm" src="https://img.shields.io/github/license/rubickCenter/rubick" />
 </a>
 <a href="https://github.com/rubickCenter/rubick/stargazers">
    <img alt="star" src="https://img.shields.io/github/stars/rubickCenter/rubick?style=social">
</a>
<a href="https://gitee.com/monkeyWang/rubick">
    <img alt="码云" src="https://img.shields.io/badge/Gitee--yellow.svg?style=social&logo=data:image/svg+xml;base64,PHN2ZyB0PSIxNTc0ODM3MTM4ODM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3NzAiICAgICB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPiAgICA8cGF0aCBkPSJNODkxIDQyOC44SDQ2NS44Yy0yMC40IDAtMzcgMTYuNS0zNyAzN3Y5Mi40YzAgMjAuNCAxNi41IDM3IDM3IDM3aDI1OC45YzIwLjQgMCAzNyAxNi42IDM3IDM3djE4LjRjMCA2MS4zLTQ5LjcgMTEwLjktMTEwLjkgMTEwLjlIMjk5LjRjLTIwLjQgMC0zNy0xNi42LTM3LTM3VjM3My4yYzAtNjEuMyA0OS43LTExMC45IDExMC45LTExMC45aDUxNy42YzIwLjQgMCAzNy0xNi41IDM3LTM3bDAuMS05Mi4zYzAtMjAuNC0xNi41LTM3LTM3LTM3SDM3My4zQzIyMC4yIDk2IDk2IDIyMC4yIDk2IDM3My4zVjg5MWMwIDIwLjQgMTYuNiAzNyAzNyAzN2g1NDUuNEM4MTYuMiA5MjggOTI4IDgxNi4zIDkyOCA2NzguNFY0NjUuOGMwLTIwLjQtMTYuNi0zNy0zNy0zN3oiICAgICAgICAgIGZpbGw9IiNkODFlMDYiIHAtaWQ9IjE3NzEiPjwvcGF0aD48L3N2Zz4="/>
</a>
</div>

<div align= "center">
<img align="center" src="https://picx.zhimg.com/80/v2-f8fe09ef125dac5fdcbef3fe00f92b21_720w.png" />
</div>

开源的插件化桌面端效率工具箱。插件是基于 npm 进行安装和卸载，非常轻便。插件数据支持 webdav 多端同步，非常安全。支持内网部署，可二次定制化开发，非常灵活。

## 获取 rubick
下载最新的安装包：

* [Rubick Mac OS](https://github.com/rubickCenter/rubick/releases)
* [Rubick Windows](https://github.com/rubickCenter/rubick/releases)
* [Rubick Linux](https://github.com/rubickCenter/rubick/releases)

## 使用文档

[Rubick 官网](https://rubick.vip)

[Rubick Docs](https://rubickCenter.github.io/rubick/)

## 如何使用 rubick

安装完成 rubick 后，可以通过快捷键 Alt/Option+R  可以快速呼起主程序。主程序输入框内输入关键词可以搜索出对应的 App、插件、文件... 选择即可使用。如果没有想要的功能，可以点击左侧的 logo 进入插件市场寻找自己想要的插件进行安装。

## 支持能力
- [x] 基于 npm 包模式的插件管理，安装插件和安装 npm 包一样简单
- [x] 支持 webdav 多端数据同步，真正的数据安全同步
- [x] 独一无二的系统插件模式，让插件成为 rubick 的一部分
- [x] 支持快速启动本地 app、文件、文件夹
- [x] 支持企业化内网部署
- [x] 支持多语言


## 核心功能展示
### 1. 搜索系统应用
支持拼音和缩写来搜索系统安装应用：

![](https://pic1.zhimg.com/80/v2-70c105ff7fb1e955fc67ffa5a5564092_720w.gif)

### 2. UI类插件安装
点击搜索框右侧 `rubick` 图标，进入插件市场，选择所需插件，点击下载按钮即可下载，下载完成后在已安装 tab 下可以找到安装插件。
安装完成后，输入插件呼起命令即可使用对应插件：

![](https://pic1.zhimg.com/80/v2-5906bba20fe0a67f9e7a5a8c11341305_720w.gif)

### 3. 系统类插件安装
系统插件安装方式和UI类一样，在插件市场选择`系统分类`，寻找适合自己的系统插件安装即可。

```
系统插件安装成功后，需要重启 rubick 才能生效
```

### 4. 基于 webdav 的多端数据同步
在 `rubick` 内搜索`偏好设置` 进入 `账户和设置` -> `多端数据同步`；即可对 `rubick` 插件使用数据进行 `导出` 和 `导入`。

![](https://pic1.zhimg.com/80/v2-ff85793741e4dff82a729d3eb3d41551_720w.png)

## 关联仓库

[Rubick 插件仓库](https://gitee.com/rubick-center)

[Rubick 插件数据库](https://gitcode.net/rubickcenter/rubick-database)

[Rubick Plugin CLI](https://github.com/rubickCenter/rubick-plugin-cli)


rubick 目录介绍   
````
├── docs # 文档存方目录
│   ├── docs
│   ├── package-lock.json
│   ├── package.json
│   └── pnpm-lock.yaml
├── feature # 插件市场插件
│   ├── README.md
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tsconfig.json
│   └── vue.config.js
├── public # rubick __static 目录
│   ├── favicon.ico
│   ├── feature
│   ├── icons
│   ├── index.html
│   ├── preload.js
│   └── tpl
├── src # rubick 核心源码
│   ├── common # 一些通用的函数
│   ├── core # 一些核心的能力，比如 app search
│   ├── main # 主进程
│   └── renderer # 渲染进程
├── tpl # rubick 模板插件
│   ├── README.md
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tsconfig.json
│   └── vue.config.js
├── LICENSE # MIT 协议
├── README.md # 英文文档
├── README.zh-CN.md # 中文文档
├── babel.config.js
├── deploy-doc.sh # rubick doc 发布脚本
├── tsconfig.json
├── package-lock.json
├── package.json
└── vue.config.js
```

启动
1. 安装依赖    
rubick 启动主要涉及到3个目录：

根目录：rubick 核心进程   
feature：rubick 内置的插件市场插件   
tpl: rubick 内置的模板插件   
```
$ npm i
$ cd feature && npm i
$ cd tpl && npm i
```
2. 启动核心进程
```
$ npm run electron:serve
```
3. 启动插件中心 非必须
```
$ cd feature && npm run serve
```
4. 启动模板插件 非必须
```
$ cd tpl && npm run serve
```
编译
```
$ cd feature && npm run build
$ cd tpl && npm run build
$ npm run electron:build
```




## 开发 UI 插件   

1. 安装插件 CI 工具
```
$ npm install -g rubick-plugin-cli
```
2. 快速创建项目
```
$ rubick create <plugin-name>
```
一个最基础插件的目录是这样的：   
```
rubick-plugin-demo
  |-- index.html
  |-- package.json
  |-- preload.js
```
# 文件说明   
package.json   
用于指定插件最基础的配置，一个最基础的配置信息如下：  
```
{
  "name": "rubick-ui-plugin-demo",
  "pluginName": "插件demo",
  "description": "rubick ui 插件demo",
  "author": "muwoo",
  "main": "index.html",
  "logo": "https://www.img/demo.png",
  "version": "0.0.1",
  "preload":"preload.js",
  "homePage": "https://gitee.com/rubick-center/rubick-ui-plugin-demo/raw/master/README.md",
  "pluginType": "ui",
  "features": [
    {
      "code": "index",
      "explain": "测试插件",
      "cmds":[
        "demo",
        "测试"
      ]
    }
  ]
}
```
核心字段说明：

name： 插件 npm 包名称，必填   
pluginName： 插件显示名称，用于展示给使用者 必填   
description： 插件描述，描述这个插件的作用 必填   
author： 插件作者   
main： 入口文件，一般为 index.html   
logo： 尺寸建议 200 * 200, 插件的 logo, 需要是 http/https 在线地址，不支持本地logo 必填   
version： 插件的版本 必填   
preload： 预加载脚本   
homePage: 插件 readme raw 地址   
pluginType: 插件类型，枚举：ui, system. 当前选 ui 必填   
features： 插件核心功能列表 必填   
features.code： 插件某个功能的识别码，可用于区分不同的功能 必填   
features.explain： 插件某个功能的解释 必填   
features.cmds： 输入框内搜索该 cmd 进入插件 必填   
index.html   
插件的入口文件，用于展示插件的样式，一个最基础的 html 结构可以是这样：   
   ```
<!DOCTYPE html>
<html>
<body>
  hello Rubick
  <button id="showNotification">通知</button>
</body>
<script>
  document.getElementById('showNotification').addEventListener('click', () => {
    window.showNotification();
  })
</script>
</html>
```
preload.js   
细心的同学可能已经注意到上面的 index.html 使用了一个全局函数 showNotification 那么这个函数是在哪里定义的呢？ 答案就是在 preload.js 里面。preload.js 可以为页面提供全局函数
```
window.showNotification = function () {
  rubick.showNotification('HI, rubick')
}
```
rubick 更多支持 API 能力参考：rubick 全局API(opens new window)

# 测试写好的插件   
由于 rubick 插件是基于 npm 的管理方式，所以开发者调试插件，也是基于 npm 的软连接的方式进行调试。 首先需要再插件 package.json 目录下执行:
```
$ npm link
```
然后将插件通过插件市场的 开发者 菜单进行安装，填写插件的 name 即可，如果插件需要调试，可以通过右上角 ... 来打开开发者工具进行调试，页面变更直接刷新即可：


## 开发系统插件
一个最基础插件的目录是这样的：
```
rubick-system-plugin-demo
  |-- package.json
  |-- index.js
```
# 文件说明
package.json
用于指定插件最基础的配置，一个最基础的配置信息如下：
```
{
  "name": "rubick-system-plugin-demo",
  "pluginName": "rubick 系统插件demo",
  "version": "0.0.0",
  "description": "rubick 系统插件demo",
  "entry": "index.js",
  "logo": "https://xxxx/upload/202112/08/5bac90649c5343cabb63930b131cf8e6.png",
  "pluginType": "system",
  "author": "muwoo",
  "homepage": ""
}
```
核心字段说明：

name： 插件 npm 包名称，必填   
pluginName： 插件显示名称，用于展示给使用者 必填   
description： 插件描述，描述这个插件的作用 必填   
author： 插件作者   
entry： 入口文件，一般为 index.js   
logo： 尺寸建议 200 * 200, 插件的 logo, 需要是 http/https 在线地址，不支持本地logo 必填   
version： 插件的版本 必填   
homePage: 插件 readme raw 地址   
pluginType: 插件类型，枚举：ui, system. 当前选 system 必填   
index.js   
插件的入口文件，用于 rubick 主进程进行加载执行： 
```
module.exports = () => {
  return {
    onReady(ctx) {
      const { Notification } = ctx;
      new Notification({
        title: "测试系统插件",
        body: "这是一个系统插件，在rubick运行时，立即被加载"
      }).show()
    }
  }
}
```
index.js 需要返回一个包含 onReady 生命周期的函数，该函数接受 ctx 对象作为参数，我们可以通过 ctx 使用 electron 主进程所有能力。 同时也为 ctx 上扩展挂在了 mainWindow 对象。

# 调试插件
由于 rubick 插件是基于 npm 的管理方式，所以开发者调试插件，也是基于 npm 的软连接的方式进行调试。 首先需要再插件 package.json 目录下执行:
```
$ npm link
```
然后将插件通过插件市场的 开发者 菜单进行安装，填写插件的 name 即可。由于插件依赖于主进程启动执行，所以安装完成后需要重启 rubick 后才能生效。


# 发布插件
这里介绍完了如何开发插件，最后非常欢迎为 rubick 贡献开源插件，发布插件也非常简单，首先需要把自己的插件发布到 npm 仓库：
```
$ npm publish
```
然后再给 rubick-database/plugins/total-plugins.json (opens new window)仓库提个 pull request, 把你的 package.json 信息加入 json 文件内，等我们 merge 了您的提交，插件将会自动上架。