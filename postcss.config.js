// postcss.config.js
// const path = require('path')

module.exports = () => {
  // const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750
  return {
    plugins: {
      autoprefixer: {},
      'postcss-mobile-to-multi-displays': {
        // 视口的宽度
        viewportWidth: 750,
        // 保留几位小数
        unitPrecision: 3,
        // 哪些属性需要修改
        propList: ['*'],
        // 排除转化文件
        exclude: [/node_modules/],
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
