module.exports = {
  title: 'vue-template',// 网站标题
  description: 'vue-cli/二次封装/vue3/axios/多入口打包', //网站描述
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  repo: '',
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  editLink: {
    pattern: 'https://github.com/Yinzhuo19970516/vue-template',
    text: 'Edit this page on GitHub'
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/Yinzhuo19970516/vue-template' }
  ],

  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: true,
  // 主题配置
  themeConfig: {
    siteTitle: 'vue-template',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目简介', link: '/page/index' },
      { text: '更新日志', link: '/about/index' }
    ],
    // 侧边导航
    sidebar: [
      {
        text: '项目简介',
        items: [
          { text: '为什么要写这个项目', link: '/page/why' },
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
    outlineTitle: 'In hac pagina'
  }
}
