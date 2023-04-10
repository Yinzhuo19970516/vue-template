import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import glob from 'glob'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import vitePluginRequireTransform from "vite-plugin-require-transform"
import autoprefixer from "autoprefixer"
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "unplugin-vue-components/resolvers"
import history from 'connect-history-api-fallback'
const mode = process.argv[process.argv.length - 1]
const env = loadEnv(mode, process.cwd());
const multiPage = {};

function pathRewritePlugin() {
  const rules: any[] = [];
  Reflect.ownKeys(multiPage).forEach((key) => {
    rules.push({
      from: `/${multiPage[key].name}`,
      to: `${multiPage[key].rootPage}`
    });
  });
  return {
    name: "path-rewrite-plugin",
    configureServer(server) {
      server.middlewares.use(
          history({
            htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
            disableDotRule: false,
            rewrites: rules
          })
      )
    }
  }
}

const getPageInput = () => {
  const input = {}
  glob.sync('src/module/**/index.html').forEach(p => {
    const matchName = p.match(/src\/module\/(\w+)\/index.html/)
    const name = matchName ? matchName[1] : null
    if (name) {
      multiPage[name] = {
        name,
        rootPage: `/src/module/${name}/index.html`,
      };
      input[name] = path.resolve(__dirname, `src/module/${name}/index.html`);
    }
  })
  return input
}
const inputPage = getPageInput()

export default defineConfig({
  root: env.VITE_NODE_ENV === 'development'? './' : './src/module',
  envDir: env.VITE_NODE_ENV === 'development'? './' : './../',
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vueJsx(),
    AutoImport({ imports: ["vue", "vue-router"],
      eslintrc: { enabled: false } }),
    vitePluginRequireTransform,
    Components({
      resolvers: [VantResolver()],
    }),
    pathRewritePlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      '/src/module/page1/main.js': path.resolve('src/module/page1/main.js'),
      '/src/module/hehehe/main.js': path.resolve('src/module/hehehe/main.js')
    }
  },
  base: '/',
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 3, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          // exclude: [],
          landscapeUnit: 'vw',
          landscape: false // 是否处理横屏情况
        })
      ]
    },
    // css预处理器
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/common/style/base.less";',
      },
      scss: {
        additionalData: '@import "@/common/style/base.scss";'
      }
    },
  },
  define: {
    APP_VITE_MODULE_PAGE: JSON.stringify(inputPage),
    'process.env': loadEnv(mode, process.cwd())
  },
  publicDir: env.VITE_NODE_ENV === 'development'? './public':'../../public',
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      input: inputPage,
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      '^/h5': {
        target: 'https://cardloan.xiaoying.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/h5/, '/h5')
      }
    }
  }
})
