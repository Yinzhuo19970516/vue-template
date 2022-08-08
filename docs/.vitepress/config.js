module.exports = {
  title: "vue-template",// 网站标题
  description: '针对vue-cli的二次封装', //网站描述
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  repo: '',
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/img/linktolink.png',//图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    //   头部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about/index' }
    ],
    //   侧边导航
    // sidebar: [
    //   { text: '我的', link: '/mine/index' },
    //   { text: '关于我', link: '/about/index' }
    // ]
  }
}
