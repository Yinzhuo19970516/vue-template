// postcss.config.js
const path = require('path')

module.exports = ({ file }) => {
  const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750
  return {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
        // 要转化的单位
        unitToConvert: 'px',
        // 视口的宽度
        viewportWidth: designWidth,
        // 保留几位小数
        unitPrecision: 3,
        // 哪些属性需要修改
        propList: ['*'],
        // 预期单位
        viewportUnit: 'vw',
        // 字体单位
        fontViewportUnit: 'vw',
        // 最小转化单位
        minPixelValue: 1,
        // 媒体查询里面的单位要不要转化
        mediaQuery: true,
        // 替换包含vw单位的
        replace: true,
        // 排除转化文件
        exclude: [],
        // 添加横向转化值
        landscape: false,
        // 横向采用的单位
        landscapeUnit: 'vw',
        // 横屏的视口宽度
        landscapeWidth: false
      }
    }
  }
}
