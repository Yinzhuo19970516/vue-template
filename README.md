<p align="center">
 <img alt="logo" src="https://vuejs.org/images/logo.png" width="100" height="100">
</p>
<h1 align="center" style='margin-top: -20px'>Vue-template</h1>
<p align="center">基于vue3,vue-cli5二次封装的移动端框架</p>
<p align="center">多入口打包 + 自动生成项目模版 + pinia + 数据持久化 + 路由动画 + axios二次封装 + less sass 变量函数处理 + viewport 适配方案</p>

<p align="center">
  🔥 <a href="https://yinzhuo19970516.github.io">项目文档地址</a>
  🌈 <a href="./CHANGELOG.md">项目更新记录</a>
</p>

<h3>启动项目</h3>

```
npm i / pnpm i

npm run dev / pnpm run dev

npm run init / pnpm run dev // 生成新项目
```

## 功能点

本项目是基于**pnpm，vue-cli4.x，webpack5**，对 vue-cli 提供的框架做的二次封装，主要封装的功能点多入口打包 + 自动生成项目模版 + pinia + 数据持久化 + 路由动画 + axios 二次封装 + less sass 变量函数处理 + viewport 适配方案等等

主要功能点如下：

详情可查看项目文档：https://yinzhuo19970516.github.io/

- [💪 使用 pnpm 管理包]
- [👋 多入口打包]
- [👌 自动化生成项目基本模版]
- [🤘 Pinia 状态管理库]
- [🤏 持久化存储插件封装]
- [👍 路由动画的封装]
- [👍 引入 Nprogress]
- [🤝 支持 history 模式]
- [🤝 axios 二次封装]
- [💪 viewport 适配方案]
- [✌️ less sass 变量，函数的处理]
- [☝️ 配置多环境变量]
- [👏 vconsole.js]
- [✍️ 链式操作符]
- [💅 入口加载动画]
- [👍 Eslint + prettier + husky + commitlint 规范化处理]

如果对你有帮助送我一颗珍贵的小星星（づ￣ 3 ￣）づ ╭❤ ～

### 后期规划

- ~~路由配置 history，目前使用 history 无法访问二级页面，等待后期研究 ngnix~~(9 月 15 日已完成)
- ~~统一的格式控制管理，能够适用于 webstrom 和 vscode~~
- ~~多入口时选择编译单个入口文件~~ （**已完成**）
- 整个项目 cli 化，可以像 vue-cli 那样，直接一行命令下载下来
- 增量编译，随着项目变大，每次发布把所有项目都打包一遍是不现实的，能否有一个方案只编译有修改部分，这样编译效率大大提高
- ~~common 基础方法库 打包封装(暂时放弃,作用不大)~~
- 使用 vite 搭建组件库 componet

> 如果屏幕前的你读完了，相信也读了很久，有问题，有疑问的地方，欢迎联系我，我们一起交流！点个赞就更好了。

<p align="center">如果有任何疑问，可直接微信联系我，秒回。</p>
<h3 align='center'>个人微信 & 微信公众号</h3>

<p style='display:flex;justify-content: center;align-items: center'>
<img alt="logo" style='display:flex;text-align:left' src="./image/wx.png" width="400">
<img alt="logo" style='display:flex;text-align:right' src="./image/gzh.png" width="400">
</p>

> 使用 pnpm 需要 node 版本大 14.6
> 使用 npm 如果遇到如下错误，建议加 --legacy-peer-deps

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: vue-template@1.0.0
npm ERR! Found: eslint-plugin-vue@8.7.1
npm ERR! node_modules/eslint-plugin-vue
npm ERR!   dev eslint-plugin-vue@"^8.0.3" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer eslint-plugin-vue@"^7.0.0" from @vue/eslint-config-standard@6.1.0
npm ERR! node_modules/@vue/eslint-config-standard
npm ERR!   dev @vue/eslint-config-standard@"^6.1.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /Users/yinzhuo/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/yinzhuo/.npm/_logs/2022-08-24T13_04_48_302Z-debug-0.log
```
