const tsImportPluginFactory = require('ts-import-plugin')
const { merge } = require('webpack-merge')
const { defineConfig } = require('@vue/cli-service')
const glob = require('glob') // 用于筛选文件
const path = require('path')
// vue.config.js
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const entryName = process.env.npm_config_page
const entry1 = glob.sync('src/main.js') // 单入口
const entry2 = glob.sync('src/module/*/main.js') // 多入口
const entryList = [...entry1, ...entry2]
const pages = {}
let html = ''

entryList.forEach((filePath) => {
  const name1 = filePath.match(/src\/main.js$/)
  const name2 = filePath.match(/src\/module\/(\w+)\/main.js$/)
  const name = name1 ? name1[1] : name2[1]

  const filename = name1 ? name + '/index' : name
  if (filename === entryName || !entryName) {
    const pagePath = glob.sync(`src/module/${name}/index.html`)[0]
    pages[name] = {
      entry: filePath,
      template: pagePath || 'public/index.html',
      filename: filename + '/index.html'
    }
    html += `<a href="${filename}/" target="_blank">${filename}/</a>`
  }
})

html = `<!DOCTYPE html>
    <html lang="zh">
    <head>
      <meta charset="UTF-8">
      <title>入口列表</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    </head>
    <style>
       * {
          margin: 0;
          padding: 0;
       }
       body{
          background-color:#607d8b;
          margin:40px
       }
       a{
          margin: 10px;
          display: inline-block;
          white-space: nowrap;
          cursor: pointer;
          color: #009688;
          background: #cfdeec;
          text-align: center;
          box-sizing: border-box;
          transition: .1s;
          font-weight: 500;
          padding: 12px 20px;
          font-size: 14px;
          border-radius: 4px;
       }
       a:hover{    
          background: #009688;
          color: #fff;
       }
    </style>
    <body>
    <h2>多页面入口</h2>
    ${html}
    </body>
    </html>`

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  transpileDependencies: true,
  lintOnSave: 'warning',
  productionSourceMap:
        process.env.VUE_APP_ONLINE_ENV === 'false' ||
        process.env.NODE_ENV === 'development',
  parallel: false,
  chainWebpack: (config) => {
    if (process.env.use_analyzer) {
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
    }
    // ts-import-plugin 配置参考链接：https://zhuanlan.zhihu.com/p/168562845
    const tsRule = config.module.rule('ts')
    tsRule.exclude.add(/node_modules/)
    tsRule.use('ts-loader').tap((options) => {
      options = merge(options, {
        happyPackMode: true,
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: 'vant',
              libraryDirectory: 'es',
              // 这句必须加上，不然修改主题没有效果
              style: (name) => `${name}/style/less`
            })
          ]
        }),
        compilerOptions: {
          module: 'es2015'
        }
      })
      return options
    })
  },
  pages,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/common/style/base.less')]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/common/style/base.scss"'
      },
      scss: {
        additionalData: '@import "@/common/style/base.scss";'
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    open: false,
    setupMiddlewares: (middleware, devServer) => {
      devServer.app.get('', (_, response) => {
        response.write(html)
        response.end()
      })
      return middleware
    },
    proxy: {
      '/h5': {
        target: 'https://cardloan.xiaoying.com',
        // target: '',
        changeOrigin: true
      }
    }
  }
})
