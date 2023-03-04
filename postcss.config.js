// postcss.config.js
// const path = require('path')

module.exports = () => {
  // const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750
  return {
    plugins: {
      autoprefixer: {},
      'postcss-mobile-forever': {
        // 根元素选择器，用于设置桌面端和横屏时的居中样式
        rootSelector: '#app',
        // 视口的宽度
        viewportWidth: 750,
        // 视口单位的最大宽度
        maxDisplayWidth: null,
        // 保留几位小数
        unitPrecision: 3,
        // 哪些属性需要修改
        propList: ['*'],
        // 排除转化文件
        exclude: [/node_modules/],
        // 关闭桌面端媒体查询适配
        disableDesktop: false,
        // 关闭横屏媒体查询适配
        disableLandscape: false,
        // 移动端视图配置
        mobileConfig: {
          // 预期单位
          viewportUnit: 'vw',
          // 字体单位
          fontViewportUnit: 'vw',
          // 替换包含vw单位的
          replace: true
        }
      }
    }
  }
}
