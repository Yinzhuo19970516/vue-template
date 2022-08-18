export default {
  title: 'vue-template',// 网站标题
  description: 'vue-cli/二次封装/vue3/axios/多入口打包', //网站描述
  repo: '',
  ignoreDeadLinks: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  lastUpdated: true,
  appearance: true,
  // 主题配置

  themeConfig: {

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yinzhuo19970516/vue-template' },
      { icon: 'slack', link: 'https://juejin.cn/user/1011206428301774' }
    ],
    // editLink: {
    //   pattern: 'https://github.com/Yinzhuo19970516/vue-template',
    //   text: 'Edit this page on GitHub'
    // },
    lastUpdatedText: '更新时间',
    siteTitle: 'vue-template',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目简介', link: '/page/index' },
      { text: '更新日志', link: 'https://github.com/Yinzhuo19970516/vue-template/blob/main/CHANGELOG.md' }
    ],
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    // 侧边导航
    sidebar: [
      {
        text: '项目简介',
        items: [
          { text: '为什么要写这个项目', link: '/page/why' },
          { text: '使用pnpm管理包', link: '/page/pnpm' },
          { text: '多入口打包', link: '/page/pages' },
          { text: '自动化生成项目基本模版', link: '/page/init' },
          { text: 'Pinia',link:'/page/pinia'},
          { text: '数据持久化',link:'/page/piniaPlugin'},
          { text: 'axios二次封装',link:'/page/axios'},
          { text: '路由跳转动画',link:'/page/router'},
          { text: 'less sass的优化处理',link:'/page/less'},
          { text: 'viewport适配方案',link:'/page/viewport'},
          { text: '环境变量',link:'/page/env'},
          { text: '兼容性处理方案',link:'/page/babel'},
          { text: '总结', link: '/page/all' },
        ]
      }
    ],
    outlineTitle: '目录'
  }
}
