<h1 align="center" style='margin-top: -20px'>Vue-template</h1>
<p align="center">基于vue3,vue-cli4二次封装的移动端框架</p>
<p align="center">多入口打包 + 自动生成项目模版 + pinia + 数据持久化 + 路由动画 + axios二次封装 + less sass 变量函数处理 + viewport 适配方案</p>

<p align="center">
  🔥 <a href="https://www.yuque.com/docs/share/92b547ee-d40b-4e52-85ac-63395284c389">语雀文档地址</a>
  🌈 <a href="https://juejin.cn/post/7127130027992285197">掘金项目介绍</a>
</p>

<h3>启动项目</h3>

```
npm i

npm run dev

npm run init // 生成新项目
```

<h3>功能点</h3>

本项目是基于**vue-cli4.x，webpack5**，对vue-cli提供的框架做的二次封装，主要封装的功能点多入口打包 + 自动生成项目模版 + pinia + 数据持久化 + 路由动画 + axios二次封装 + less sass 变量函数处理 + viewport 适配方案等等

<span id="top" align="center">目录如下：</span>
- [💪 使用pnpm包管理工具](/page/pnpm.html)
- [👋 多入口打包](/page/pages.html)
- [👌 自动化生成项目基本模版](/page/init.html)
- [🤘 Pinia状态管理库](/page/pinia.html)
- [🤏 持久化存储插件封装](/page/piniaPlugin.html)
- [👍 路由动画的封装](/page/router.html)
- [👍 引入NProgess](/page/nprogess.html)
- [👍 支持history路由模式](/page/history.html)
- [🤝 axios 二次封装](/page/axios.html)
- [💪 viewport 适配方案](/page/viewport.html)
- [✌️ less sass变量，函数的处理](/page/less.html)
- [☝️ 配置多环境变量](/page/env.html)
- [👏 兼容性处理方案](/page/babel.html)
- [👏 Eslint + prettier + husky + commitlint 规范化处理](/page/eslint.html)



<h3>后期规划</h3>

-   ~~路由配置history，目前使用history 无法访问二级页面，等待后期研究ngnix~~(**9月16日已完成**)
-   ~~统一的格式控制管理，能够适用于webstrom 和 vscode~~
-   ~~多入口时选择编译单个入口文件~~ （**已完成**）
-   整个项目cli化，可以像vue-cli那样，直接一行命令下载下来
-   增量编译，随着项目变大，每次发布把所有项目都打包一遍是不现实的，能否有一个方案只编译有修改部分，这样编译效率大大提高
-   ~~common 基础方法库 打包封装~~（**与大佬沟通后，意义不大，暂时放弃**）
-   使用vite搭建组件库component

<p align="center">如果对你有帮助，可以送我一颗珍贵的小星星（づ￣3￣）づ╭❤～</p>
<p align="center">如果有任何疑问，可直接微信联系我，秒回。</p>
<p align="center" style='line-height: 36px;font-weight: 500;color: #767676;'>如果有任何疑问，可直接微信联系我，秒回。</p>
<p align="center" style="line-height: 36px;font-weight: 500;color: #767676;
">个人微信 & 微信公众号</p>
<p style='display:flex;justify-content: center;align-items: center;flex-wrap: wrap'>
<img alt="logo" style='display:flex;text-align:left;width:50%' src="../image/wx.png">
<img alt="logo" style='display:flex;text-align:right;width:50%' src="../image/gzh.png">
</p>