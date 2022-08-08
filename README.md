<p align="center">
 <img alt="logo" src="https://vuejs.org/images/logo.png" width="100" height="100">
</p>
<h1 align="center" style='margin-top: -20px'>Vue-template</h1>
<p align="center">基于vue3,vue-cli4二次封装的移动端框架</p>
<p align="center">多入口打包 + 自动生成项目模版 + pinia + 数据持久化 + 路由动画 + axios二次封装 + less sass 变量函数处理 + viewport 适配方案</p>

<p align="center">
  🔥 <a href="https://www.yuque.com/docs/share/92b547ee-d40b-4e52-85ac-63395284c389">语雀文档地址</a>
  🌈 <a href="https://juejin.cn/post/7127130027992285197">掘金项目介绍</a>
</p>

<p align="center">如果有任何疑问，可直接微信联系我，秒回。</p>
<h3 align='center'>个人微信 & 微信公众号</h3>
<p style='display:flex;justify-content: space-between;align-items: center'>
<img alt="logo" style='display:flex;text-align:left' src="./image/wx.png" width="400">
<img alt="logo" style='display:flex;text-align:right' src="./image/gzh.png" width="400">
</p>

<h3>启动项目</h3> 

```
npm i

npm run dev

npm run init // 生成新项目
```

## 功能点

本项目是基于**vue-cli4.x，webpack5**，对vue-cli提供的框架做的二次封装，主要封装的功能点多入口打包 + 自动生成项目模版 + pinia + 数据持久化 + 路由动画 + axios二次封装 + less sass 变量函数处理 + viewport 适配方案等等

<span id="top">目录如下：</span>
- [👋 多入口打包](#pages)
  - [适用场景](#pages-1)
  - [项目结构](#pages-2)
  - [核心实现](#pages-3) 
- [👌自动化生成项目基本模版](#init)
  - [自动化命令](#init-1)
  - [代码实现](#init-2)
- [🤘Pinia状态管理库](#pinia)
  - [Pinia优势](#pinia-1)
  - [Pinia和Vuex的代码分割机制](#pinia-2)
  - [基本使用](#pinia-3)
- [🤏 持久化存储插件封装](#piniaPlugin)
  - [代码实现](#piniaPlugin-1)
  - [全局引入](#piniaPlugin-2)
  - [参考库](#piniaPlugin-3)
- [👍 路由动画的封装](#router)
  - [封装思路](#router-1)
  - [代码实现](#router-2)
  - [效果对比](#router-3)
- [🤝 axios 二次封装](#axios)
  - [封装目的](#axios-1)
  - [通用能力](#axios-2)
  - [代码实现](#axios-3)
- [💪 viewport 适配方案](#viewport)
  - [postcss配置](#viewport-1)
  - [对比rem](#viewport-2)
- [✌️ less sass变量，函数的处理](#less)    
- [☝️ 配置多环境变量](#env)
- [👏 vconsole.js](#vconsolejs)
- [✍️ 链式操作符](#babel)
- [💅 入口加载动画](#loading)

如果对你有帮助送我一颗珍贵的小星星（づ￣3￣）づ╭❤～

### 更新日志

2022.8.8 优化readme格式&增加progress库的使用&删除viewport vant配置

### 后期规划

-   路由配置history，目前使用history 无法访问二级页面，等待后期研究ngnix
-   统一的格式控制管理，能够适用于webstrom 和 vscode
-   ~~多入口时选择编译单个入口文件~~ （**已完成**）
-   整个项目cli化，可以像vue-cli那样，直接一行命令下载下来
-   增量编译，随着项目变大，每次发布把所有项目都打包一遍是不现实的，能否有一个方案只编译有修改部分，这样编译效率大大提高
-   common 基础方法库 打包封装
-   使用vite搭建组件库componet

## <span id="pages">👋 多入口打包</span>

### <span id="pages-1">适用场景</span>

移动端开发，一般情况，我们项目开发只需要一个配置一个入口，一个模版文件。

但是有时候又明显不够用，移动端，同一个业务下，同类型的项目，就很适合放在一个项目下做多入口打包。

比如以下场景：

-   **活动项目**，同类型活动多期迭代，不同类型的活动，新增一个活动就重新建立一套项目，维护成本很大，此时就很适合一个大的活动项目里，去新增多个活动页面入口。
-   当我们去写**App的内嵌h5页面**时，每个流程其实都是相互独立的，都是在一个app下，也很适合，多入口，维护在一个项目里。

### 优势

-   多入口，项目内各个入口独立，低耦合，不会相互影响。
-   发布成本低，可以维护在一个项目里，不用新建多个项目。
-   结构清晰，可维护性比较好。

>如果我们全部使用单入口，也就是vue官方提供的框架，可以设想一下，如果是活动页面，我们把所有活动的页面都定义在一个入口里，router，store全部在一块，项目耦合会越来越严重，路由名也会重合率越来越高！

### <span id="pages-2">项目结构</span>

如下图所示，我们在src目录下面，新增了module目录，用来存放我们的多个项目入口，page1 和page2 就是我用来演示的两个项目文件。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b645e7c3ed4d476197715a9aef672c3e~tplv-k3u1fbpfcp-zoom-1.image)

### 前置依赖库

#### node 的 glob库

glob 其实是linux shell默认的通配符，主要是做文件匹配，
**glob 模式通常用来匹配目录以及文件**

**这里介绍的是node的一个方法库glob**

glob 在一般用于文件系统中定位文件

主要用到了同步搜索文件API

**glob.sync(pattern, [options])**

-   pattern {String} 待匹配的模式
-   options {Object}
-   return: {Array<String>} 匹配模式的文件名

#### vue-cli的 pages配置

vue-cli 接收一个参数**pages**，用来控制输入文件，输出文件

详情可参考文档[pages](https://cli.vuejs.org/zh/config/#pages)

官方例子如下

比较重要的三个参数就是 `entry template filename`

page 的入口，模板来源， 在 dist/index.html 的输出

下面这端代码是vue-cli的官方说明

```js
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}
```

#### devServer 的setupMiddlewares

提供执行自定义函数和应用自定义中间件的能力。

我们可以在devServer 启动项目之前，做一些自定义的处理

我在启动时渲染了一段 html

```js
 devServer: {
    host: '0.0.0.0',
    setupMiddlewares: (middleware, devServer) => {
      devServer.app.get('', (_, response) => {
        response.write(html)
        response.end()
      })
      return middleware
    },
    proxy: {}
 }
```

### <span id="pages-3">核心代码实现</span>

```js
const entryName = ''
const entry1 = glob.sync('src/main.js') // 单入口
const entry2 = glob.sync('src/module/*/main.js') // 多入口
const entryList = [...entry1, ...entry2]
const pages = {} //pages 参数
let html = '' // 要渲染的html

entryList.forEach(filePath => {
  const name1 = filePath.match(/src/main.js$/) // 单入口
  const name2 = filePath.match(/src/module/(\w+)/main.js$/) // 多入口
  const name = name1 ? name1[1] : name2[1]

  const filename = name1 ? name + '/index' : name
  if (filename === entryName || !entryName) {
    const pagePath = glob.sync(`src/module/${name}/index.html`)[0] 
    // 读文件夹下的index.html文件
    pages[name] = {
      entry: filePath,
      template: pagePath || 'public/index.html',
      // 如果没有自动去取public下的通用index.html
      filename: filename + '/index.html'
    }
    // 构造html 结构
    html += `<a href="${filename}/">${filename}/</a><br>`
  }
})
console.log(pages)
```

#### pages 结构

**hehehhe 项目的 index.html 文件是取自public**，其他的是取自本项目目录下

考虑到部分页面会有在入口文件引用第三方的库的情况，比如`swiper,jq。`

所以这里设置的比较灵活，**可以直接用通用的项目模版，也可以在项目里自定义模版。**

```js
{
  hehehe: {
    entry: 'src/module/hehehe/main.js',
    template: 'public/index.html',
    filename: 'hehehe/index.html'
  },
  page1: {
    entry: 'src/module/page1/main.js',
    template: 'src/module/page1/index.html',
    filename: 'page1/index.html'
  },
  page2: {
    entry: 'src/module/page2/main.js',
    template: 'src/module/page2/index.html',
    filename: 'page2/index.html'
  }
}
```

#### 打包目录

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01423ebb95d64c69a37a8401aa3709d2~tplv-k3u1fbpfcp-zoom-1.image)

[▲ 回顶部](#top)

## <span id="init">👌自动化生成项目基本模版</span>

当我们在新建项目时，一般是手动新建文件夹，然后定义项目名字，新建入口文件，index.html，.vue文件，新建router store文件等等，这个是每次新建时必不可少的步骤。

其实，初始化项目的时候，新建的内容都差不多，如果我们能用一行指令，帮助我们生成这些模版文件，我们只需要定义个文件名字，可以显著提升开发体验。

### <span id="init-1">新建项目指令</span>

我在package.json里新增了一个指令 init

```js
"init": "node ./src/common/initTemplate/index.js"
```

当执行这个命令时，会自动去执行，在本地common 目录下新建的js脚本，在module目录下自动生成一个新的文件。

### 演示

-   输入 `npm run init`

会提示用户“正在创建项目”

-   要求输入项目名称

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0541873e40d242899a7b0b97911d3d9f~tplv-k3u1fbpfcp-zoom-1.image)

-   确认之后

返回用户“该项目已经创建”，我们在src项目下能看到刚刚新建的目录hehehe，有内置的**index.vue，App.vue，main.js，router.js**

因为考虑到并不是所有开发者都会用到状态管理库，所以基础模版没有引入。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/475faffff7c04253a886ced703d14a4c~tplv-k3u1fbpfcp-zoom-1.image)

-   执行`npm run dev `之后

就可以在浏览器里看到我们刚刚生成的hehehe 项目了！

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51cee598570b416ab3ac47e692d6f7de~tplv-k3u1fbpfcp-zoom-1.image)

-   重复名检测

当新建的项目已有时，会提示用户，“目录已经存在”，要求用户继续输入

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29a328c782ba46f9b370fcafd7e9a1e7~tplv-k3u1fbpfcp-zoom-1.image)

### <span id="init-2">代码实现</span>

下图是 initTemplate 文件结构

实现比较简单

核心代码在 `src/common/initTemplate/index.js`

template文件夹是我们要生成的项目模版

```
initTemplate
├── index.js
└── template
    ├── App.vue
    ├── main.js
    ├── router.js
    └── view
        └── index.vue
// 2 directories, 5 files
```

#### inquirer

这个库用来询问用户输入项目名称，这是一个比较在处理命令行交互比较常见的库，详情可以查阅文档

[前端Node命令行交互工具](http://www.baidu.com/link?url=LwKD5CZQCby8PJ57ipiAhi7XBu_A47JlhxLA7k-AhE_IeymkktWklIxSXqfOIZs_Pz9DlKLxlxrkZXGJTMs5Vq) —— inquirer

用vue-cli脚手架新建项目的应该都进行过命令交互，vue创建的时候会让你选择vue2还是vue3，也有多选要什么配置，也有输入y或者n选择是否用history路由等，这其实用inquire这个包都能实现。

#### fs.access

fs.access()方法可以用于测试文件是否存在

#### 流程图

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8660e84c5b0c4567ba21c429d31809da~tplv-k3u1fbpfcp-zoom-1.image)

#### 代码

```js
#!/usr/bin/env node
console.log('您正在创建项目')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const stat = fs.stat
const targetDir = path.resolve(__dirname, './template')
//copy文件目录常用函数，都是常见api,
const copyFile = (targetDir, resultDir) => {
  // 读取文件、目录
  fs.readdir(targetDir, function(err, paths) {
    if (err) {
      throw err
    }
    paths.forEach(function(p) {
      const target = path.join(targetDir, '/', p)
      const res = path.join(resultDir, '/', p)
      let read
      let write
      stat(target, function (err, statsDta) {
        if (err) {
          throw err
        }
        if (statsDta.isFile()) {
          read = fs.createReadStream(target)
          write = fs.createWriteStream(res)
          read.pipe(write)
        } else if (statsDta.isDirectory()) {
          fs.mkdir(res, function() {
            copyFile(target, res)
          })
        }
      })
    })
  })
}

const question = [
  {
    type: 'input',
    name: 'name',
    message: '请输入项目名称：'
  }
]

const createProject = () => {
  // 询问用户问题
  inquirer.prompt(question).then(({ name }) => {
    // name 为输入的项目名称
    name = name.trim()
    if (!name) {
      console.log('项目目录不能为空')
      // 如果输入空，继续询问
      createProject()
      return false
    }
    // 目标路径，要放在module目录下
    const resultDir = path.resolve(__dirname, '../../module/', name)
    // fs.access()方法用于测试文件是否存在
    fs.access(resultDir, function(err, data) {
      if (err) {
        // 创建文件
        fs.mkdir(resultDir, function(err, data) {
          if (err) {
            throw err
          }
          // 复制模版文件
          copyFile(targetDir, resultDir)
        })
        console.log(`${name} 项目已创建成功`)
      } else {
        console.log(`${name} 项目目录已存在，请输入其他名称`)
        // 不存在，继续询问
        createProject()
      }
    })
  }).catch(err => {
    console.log(err)
  })
}
createProject()
```

[▲ 回顶部](#top)

## <span id="pinia">🤘Pinia状态管理</span>

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fb1464071e543e3a114d2fb41fe9d9e~tplv-k3u1fbpfcp-zoom-1.image)

文档地址：<https://pinia.web3doc.top/>

Pinia /piːnjʌ/ 中文名：皮你啊

### <span id="pinia-1">Pinia 优势</span>

**1.Pinia是一个全新的Vue状态管理库，是Vuex的代替者，尤雨溪强势推荐**

翻译翻译 => 官方背书

**2.Vue2 和 Vue3 都能支持**

翻译翻译 => 既支持options api 又支持compostions api，维护成本低

**3.抛弃传统的 Mutation ，只有 state, getter 和 action ，简化状态管理库**

翻译翻译 => 少写代码,降低心智负担，再也不用写 mutation

**4.不需要嵌套模块，符合 Vue3 的 Composition api，让代码扁平化**

翻译翻译 => 多个state,不需要再使用module，现在可以定义多个store，相互之间调用

**5.TypeScript支持**

翻译翻译 => 没有使用ts，不好解释

**6.代码简单，很好的代码自动分割**

**翻译翻译 =>** 可以构建多个store，打包管理会自动拆分模块化的设计，便于拆分状态，能很好支持代码分割；

**7.极轻， 仅有 1 KB**

翻译翻译 => 体积小，不会成为项目的负担

### 核心概念

1.  **State**: 用于存放数据，有点儿类似 data 的概念；
1.  **Getters**: 用于获取数据，有点儿类似 computed 的概念；
1.  **Actions**: 用于修改数据，有点儿类似 methods 的概念；
1.  **Plugins**: Pinia 插件。

### <span id="pinia-2">Pinia与Vuex代码分割机制</span>

举个例子：某项目有**3个store「user、job、pay」**，另外有**2个路由页面「首页、个人中心页」**，**首页用到job store，个人中心页用到了user store**，分别用Pinia和Vuex对其状态管理。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6c810e0fded4b729b506407d773859e~tplv-k3u1fbpfcp-zoom-1.image)

#### Vuex的代码分割

打包时，vuex会把3个store合并打包，当首页用到Vuex时，这个包会引入到首页一起打包，最后输出1个js chunk。这样的问题是，其实首页只需要其中1个store，但其他2个无关的store也被打包进来，造成资源浪费。

**解决方案：**

经常在首页优化时，会考虑到这个场景，一般处理方案是去做vuex的按需加载，beforeCreate 的时候，可以去判断当前页面需要加载哪些store,利用这个api可以实现$store.registerModule

详情可参考文章

[vuex按需加载，避免首页初始化所有数据](https://segmentfault.com/a/1190000038440206)

#### pinia的代码分割

打包时，Pinia会检查引用依赖，当首页用到job store，打包只会把用到的store和页面合并输出1个js chunk，其他2个store不耦合在其中。Pinia能做到这点，是因为它的设计就是store分离的，解决了项目的耦合问题。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be30659d6bac455184e8c61318f1dd3a~tplv-k3u1fbpfcp-zoom-1.image)

### <span id="pinia-3">基本使用</span>

定义state，getters 和vuex基本一样，具体使用可以去官网学

这里仅仅对比修改数据时，两者的区别

明显pinia 的代码量更少，逻辑更清晰，心智负担更小

```
// store.js
import { defineStore } from 'pinia'

export const main = defineStore('main', {
  state: () => {
    return {
      configInfo: {}
    }
  },
  getters: {},
  actions: {}
})

import * as piniaStore from '../piniaStore'
piniaStore.main().$patch({
    configInfo: data
})
```

```
// store.js
import { createStore } from 'vuex'

export const store = createStore({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
})
export default store

//index.vue
import { useStore } from 'vuex'
const storeVuex = useStore()

storeVuex.commit('increment')
```

### 总结

总得来说，Pinia 就是 Vuex 的替代版，可以更好的兼容 Vue2，Vue3以及TypeScript。在Vuex的基础上去掉了 Mutation，只保留了 state, getter和action。

**Pinia拥有更简洁的语法， 扁平化的代码编排，符合Vue3 的 Composition api**

[▲ 回顶部](#top)

## <span id="piniaPlugin">🤏Pinia数据持久化插件</span>

### 使用场景

把数据缓存下来，可以避免页面刷新时，重复调用接口，提升用户体验

### 封装sessionStorage localStorage

代码在 src/common/utils/storage.ts

```js
let hasSessionStorage = true
let hasLocalStorage = true
//判断当前浏览器是否支持sessionStorage
if (sessionStorage) {
  try {
    sessionStorage.setItem('_sessionStorageTest', 'Hello World!')
    sessionStorage.removeItem('_sessionStorageTest')
  } catch (e) {
    hasSessionStorage = false
  }
} else {
  hasSessionStorage = false
}
//判断当前浏览器是否支持localStorage
if (localStorage) {
  try {
    localStorage.setItem('_localStorageTest', 'Hello World!')
    localStorage.removeItem('_localStorageTest')
  } catch (e) {
    hasLocalStorage = false
  }
} else {
  hasLocalStorage = false
}
/**
 * 设置本地缓存
 * @param key
 * @param val
 */
export function setLocalStorage(key: string, val?: any): void {
  if (!hasLocalStorage) {
    return
  }
  localStorage.setItem(key, JSON.stringify(val))
}
/**
 * 设置会话级别缓存
 * @param key
 * @param val
 */
export function setSessionStorage(key: string, val: any): void {
  if (!hasSessionStorage) {
    return
  }
  sessionStorage.setItem(key, JSON.stringify(val))
}
```

### <span id="piniaPlugin-1">代码实现</span>

核心就是，Pinia的监听API **`subscribe`**

**state中的数据变化时，就会触发subscribe**

这样我们就可以判断当前变化的store的id，是否在我们的需要持久化的数组中

如果在，我们就将数据存到本地缓存

```js
const getStorageTypeMap: AnyObj = {
  sessionStorage: getSessionStorage,
  localStorage: getLocalStorage
}

const setStorageTypeMap: AnyObj = {
  sessionStorage: setSessionStorage,
  localStorage: setLocalStorage
}

const plugin = (options: Options): any => {
  // key 为标识前缀，避免命名空间冲突
  const { key, storeList } = options
  return (context: PiniaPluginContext) => {
    const { store } = context
    let storageType:any
    let obj: any = {}
    for (const item of storeList) {
      if (item.storeName.includes(store.$id)) {
         // storeName 为哪个store，path 为store下某个字段
        const { storeName, path } = item
         
        storageType = item.storageType
        // 如果key 不存在默认走 pinia
        const data = getStorageTypeMap[storageType](`${key ?? 'pinia'}-${store.$id}`)
        if (data) {
          // 更新store
          store.$patch(data)
        }
        if (path && path.length > 0) {
          // 如果存在path 则需要判断
          if (storeName.length === 1) {
            path.forEach((item) => {
              obj[item] = store.$state[item]
            })
          } else {
            return new Error('配置path 时只允许配置一个storeName')
          }
        }
        obj = path && path.length > 0 ? obj : store.$state
        storeName.includes(store.$id) &&
        store.$subscribe(() => {
          setStorageTypeMap[storageType](`${key ?? 'pinia'}-${store.$id}`, toRaw(obj))
        })
      }
    }
  }
}
```

### <span id="piniaPlugin-2">全局引入</span>

这个是我定义的store文件，里面定义了三个store,分别为 `main，test，test1`

```
// piniaStore.js
import { defineStore } from 'pinia'

export const main = defineStore('main', {
  state: () => {
    return {
      test: 'hello word',
      test1: 'hello word1',
      configInfo: {}
    }
  },
  getters: {},
  actions: {}
})

export const test = defineStore('test', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})

export const test1 = defineStore('test1', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})
```

在入口文件处 引入插件，然后对进行需要存储的store和字段进行配置

-   **key** 为这个项目使用的一个命名前缀，保证不会污染到其他缓存数据
-   **storeName** 为一个数组，可以为空，默认存储所有store，可以配置自己需要存储的store名字
-   **storageType** 为字符串，可以配置需要会话级存储还是本地化存储
-   **path** 为一个数组，可以为空，默认存储该store下所有字段，可以配置自己需要的字段

```js
import { createPinia } from 'pinia'
import piniaPlugin from '@/common/utils/piniaPlugin'
// 创建pinia 实例
const pinia = createPinia()
pinia.use(
  piniaPlugin({
    key: 'XXX', // 这是给缓存到本地时，加一个特殊的前缀，以免造成污染到其他缓存数据
    storeList: [
      {
        storeName: ['main'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'sessionStorage',
        path: ['configInfo']
      },
      {
        storeName: ['test'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'sessionStorage'
      },
      {
        storeName: ['test1'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'localStorage'
      }
    ]
  })
)
```

存储之后的结果，可以在浏览器里看到

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28d548da75fb4733955397f7ba3967e3~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9993f3e214546dbb89d3187367c3c4a~tplv-k3u1fbpfcp-zoom-1.image)


### <span id="piniaPlugin-3">参考库</span>

<https://github.com/Seb-L/pinia-plugin-persist>

当时是参考了网路上一个开源库的实现

这个库如果使用，需要每个store下，都进行配置。

我们开发时，不可能只定义一个store，一般是按功能，模块划分代码，保证可读性。

所以我觉得使用这个库，开发成本更大

因此在这个基础上自行写了一套持久化插件，在入口处全局管理

```js
export const useUserStore = defineStore('storeUser', {
  state () {
    return {
      firstName: 'S',
      lastName: 'L',
      accessToken: 'xxxxxxxxxxxxx',
    }
  },
  // 插件配置  
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',  //自定义 Key值
        storage: localStorage,  // 选择存储方式
      },
    ],
  },
})
```

### 总结

我现在开发的持久化插件，一定程度上，增加了使用者的心智负担，需要去了解配置项的规则。

持久化存储的场景非常多，对于小型页面小型项目，直接在修改store，再手动设置一次sessionStroage，在页面中使用的时候，再去主动取一下sessionStorage 即可，没有任何问题。

但是如果是对于多人维护的大型项目，如果这么写，随着迭代，将搞不清楚到底哪些数据存在了session中，在什么时机存储的，无法统一管理。

有这样一个插件，**就可以在全局统一配置，增删改查在入口文件统一管理。**

[▲ 回顶部](#top)

## <span id="router">👍路由动画的封装</span>

Vue 路由过渡动画是对 Vue 程序一种快速简便的增加个性化效果的的方法。

可以让你在程序的不同页面之间增加平滑的动画和过渡。

如果使用得当，可以使你的程序显得更加专业，从而增强用户体验。

页面切换的动画时间的同时，下一个页面初始化也在进行了，对用户体验来说，可以有效避免下一个页面的加载dom，初始化页面的时间。

### <span id="router-1">封装思路</span>

-   使用transition方式给根路由设置全局动画

-   给router的路径设置meta的level层级
-   在入口页面的setup 中，在路由守卫中，根据level的大小，设置相应的动画
-   定义相应的动画类样式

### <span id="router-2">代码</span>

css写出动画效果

根组件 App.vue，监听路由的变化

**如果to索引大于from索引,使用前进的动画,反之使用后退的动画**

level 可以使用数字，也可以字母，也可以数字加字母，能体现大小关系即可

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7642c9bfb3984d9d866784f2892f4aec~tplv-k3u1fbpfcp-zoom-1.image)

```js
export default {
  setup() {
    const router = useRouter()
    //默认值
    const state = reactive({
      transitionName: 'slide-left'
    })
    router.beforeEach((to, from) => {
      if (to.meta.level > from.meta.level) {
        state.transitionName = 'slide-left'// 向左滑动
      } else if (to.meta.level < from.meta.level) {
        // 由次级到主级
        state.transitionName = 'slide-right'// 向右滑动
      } else {
        state.transitionName = ''// 同级无过渡效果
      }
    })

    return {
      ...toRefs(state)
    }
  }
}
```

### <span id="router-3">效果展示</span>

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa8c3df8d3224698abcc063663a5072b~tplv-k3u1fbpfcp-zoom-1.image)

**对比不加动画的，效果还是非常好的**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b78d04c83814964bb51b891da807460~tplv-k3u1fbpfcp-zoom-1.image)

### 修改动画样式

一个项目里使用的肯定是一个动画，目前我在项目中默认使用的左滑，右滑。

可以根据业务需要，和自己的喜好，去使用更多的动画效果。

可参考大佬写的过渡效果，有兴趣可以再研究研究

[4 个 Vue 路由过渡动效](<4 个 Vue 路由过渡动效>)

[▲ 回顶部](#top)

## <span id="axios">🤝axios 二次封装</span>

### <span id="axios-1">封装目的</axios>

-   降低心智负担
-   减少冗余代码
-   使用更加高效

### 封装效果

下图是封装前后的使用代码对比

我们在业务调用中，**省略了showLoading这个过程，不关心业务code和msg，可以直接获取data进行处理，省略了显示错误信息的过程，所以代码量大大减小。**

-   封装后

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03873d6c34c7462a975686fdf4c799bf~tplv-k3u1fbpfcp-zoom-1.image)

-   封装前

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deef5ec4ab8b49309148c6a7a1399b51~tplv-k3u1fbpfcp-zoom-1.image)

### <span id="axios-2">通用能力</span>

这里说明一下我封装时候的思路和想法

首先列一下我想要这个通用请求能达到什么样的效果

1.正常请求基础的配置，比如超时配置，baseUrl，跨域携带cookie等等

2.响应拦截处理

-   请求成功，业务状态码成功，直接解析接口中的data，不用一层一层再去取code，判断，拿结果
-   请求成功，业务状态码不成功，可以选择自己处理特殊状态码，也可以选择全局 message 提示服务端的报错，业务开发中，大部分都是直接提示服务端报错，但是也有需要前端处理状态码的逻辑
-   请求失败，全局messagege 提示报错
-   统一的特殊请求码处理，或者状态码做特殊逻辑，比如丢失登陆态，请求参数有误等等

3.全局统一的loading配置

-   默认开启，可配置关闭
-   统一管理，业务中不用再去关心这个逻辑

### <span id="axios-3">代码实现</span>

#### 基础类型

config 是传入参数

-  ` baseURL` 是请求地址
-   `timeOut` 是请求超时时间
-   `slientError` 是我自定义的值，拿到的结果非成功的请求时，这个参数控制，要不要直接message 服务端返回的错误，一般都是直接返回，所以默认值时false
-   `loading` 是我自定义的值，用来控制，调用接口是需不需要展示loading，业务开发中大部分都需要展示loading提示用户，防止用户多次点击，少部分场景不想让用户感知在调用接口，需要关闭，所以默认值我定义了true

```js
type TAxiosOption = {
  baseURL: string
  timeout: number
  slientError: boolean
  loading: boolean
}

const config:TAxiosOption = {
  baseURL: process.env.VUE_APP_ACTIVITY_SERVER_TARGET,
  timeout: process.env.VUE_APP_API_TIMEOUT,
  slientError: false,
  loading: true
}

class Request {
  instance:AxiosInstance
  constructor(config: TAxiosOption) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(data=>{
      return data
    })
    this.instance.interceptors.response.use(data=>{
      return data
    }）
  }
  get<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.get(url, { params: data, ...config })
  }

  post<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.post(url, data, config)
  }
}
export default new Request(config)                                            
```

#### api 管理

我们在调用的时候，可以在`post/get`的第三个参数中，传入自己需要的配置

如果不传全部走默认值

`slientError: true` 表示业务中自己处理异常，网路库不message异常

需要我们在业务中的catch 中 就可以拿到 接口返回的所有信息，去做相应的处理

`loading: true` 表示展示loading

```js
import request1 from '@/common/axios/request1'
// 查询拉新活动规则
export function queryInviteActivityRule(params) {
  return request1.post('/kyf-activity-api/activity/queryInviteActivityRule', params, { slientError: true, loading: true })
}
```

#### 全局统一loading处理

**在请求拦截器中 执行addLoading**

**在响应拦截器中 执行cacelLoaing**

保证全局无论多少接口调用，requestNum参数 控制都只有一个loading

目前的shoowLoading 引用的是vant 组件，也可以根据自己业务需要去自定义loading组件

```js
let requestNum = 0

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++
  if (requestNum === 1) showLoading()
}
const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--
  if (requestNum === 0) hideLoading()
}
```

#### 响应拦截器

拦截器的代码可以直接去看我的源代码

在`src/common/axios/request.ts` 中

主要就是在响应拦截器中对返回值做了处理，如果成功，直接返回结果，不成功，返回接口全部内容

```js
this.instance.interceptors.response.use(
      (responseData: MyAxiosResponse) => {
        const status = responseData.status
        const res = responseData.data
        const { data, code } = res
        const { loading = true } = responseData.config
        if (loading) cancelLoading()
        // 如果调用其他中台，此处需要单独对code做转化
        if (status === 200 && code === '000001') {
          return Promise.resolve(data || res || {})
        } else {
          // 此处可以处理其他特殊的业务逻辑
          // 比如丢失登陆态，传参数有误等逻辑
          if (responseData.config.slientError) {
            return Promise.reject(res)
          }
          showErrorInfo(res.msg)
          return Promise.reject(res)
        }
      },
      (error:any) => {
        const { loading = true } = error.config
        if (loading) cancelLoading()
        let errMsg
        if (error && error.response) {
          if (error.response.status >= 500 && error.response.status <= 599) {
            errMsg = '服务器繁忙，请稍后重试'
          } else if (error.response.status === 404) {
            errMsg = '服务不存在'
          } else {
            errMsg = '网络繁忙，请稍后重试'
          }
        } else {
          errMsg = '( ⊙ o ⊙ )啊！网络不太顺畅哦~'
        }
        if (error.config.slientError) {
          return Promise.reject(error)
        } else {
          showErrorInfo(errMsg)
        }
        return Promise.reject(errMsg)
      }
)        
```


#### 请求拦截器

请求拦截器中一般注入token，我的代码中暂时没有做处理

[▲ 回顶部](#top)

## <span id="less">✌️less sass的优化处理</span>

### 背景

我们使用less sass 主要是为了使用他们提供的**变量，函数等特性**。
如果不进行配置，只在入口文件引入，在各个子页面里是无法直接使用，如果使用，还需要再次引用
这个对使用者非常不友好。

### 官方方案

对sass 文件 可以在**loaderOptions 增加 additionalData**选项

但是对于less 文件的处理非常不友好，需要一个个去定义变量，因此我了舍弃官方的less处理方案

```js
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "~@/variables.sass"`
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/variables.scss";`
      },
      // 给 less-loader 传递 Less.js 相关选项
      less:{
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          primary: '#fff'
        }
      }
    }
  }
}
```

### 单独处理less

安装`style-resources-loader`

在`vue.config.js` 新增配置

对如果使用了less，预先引入我们基础less文件

```js
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/common/style/base.less')]
  }
}
```

### 总结

三个预处理器的全局引入方案，可以参考这个文章

[CSS 预编译语言 变量全局引用方式 vue-cli@3.0 stylus/sass/less 使用方法](https://blog.csdn.net/rudy_zhou/article/details/103683140)

一般来说，一个项目使用一个css 预处理器，less 或者sass，因为我极其不适应 stylus的无括号缩进模式，所以就里没有说stylus

只要在webpack 引入了就不用再全局再次引入了，但是我始终觉得这种业务代码不应该出现在webpack中，这种方式大大增加了开发者的心智负担，也是现在脚手架设计不合理的地方，希望未来能有更好的解决方案！

至于为什么，在入口文件引入了，不配置的话，还不能使用less，或者sass的。
**这个深层原因，我猜测和vue的框架设计有关，有兴趣可以深入研究**

## 💪<span id="viewport">viewport 适配方案</span>

postcss-px-to-viewport是一款 postcss 插件，用于将单位转化为 vw， 现在很多浏览器对vw的支持都很好，适配首选方案。

### <span id="viewport-1">PostCSS 配置</span>

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```
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
```

### autoprefixer

如果要配置目标浏览器，可使用 package.json 的 [browserslist](https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist) 字段

你只使用无前缀的 CSS 规则即可

### <span id="viewport-2">对比rem</span>

下面这个是rem 适配方案肯定会有的代码

```js
const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
document.querySelector('html').style.fontSize = deviceWidth / 7.5 + 'px';
```

**弊端**：

-   px和rem 需要一个计算比例系数，开发时需要计算，后来又提出 px-to-rem不如直接在代码中写px直观高效。
-   rem是相对于html元素字体单位的一个相对单位，从本质上来说，它属于一个字体单位，用字体单位来布局，并不是太合适。

### 兼容第三方UI库

vant团队的是根据375px的设计稿去做的，理想视口宽度为375px。

如果读取的是vant相关的文件，viewportWidth就设为375，如果是其他的文件，我们就按照我们UI的宽度来设置viewportWidth，即750

目前网上没有找到完全正确的例子，博客错误的demo相互抄袭，我在做代码验证时走了很多弯路，现在下面这行代码肯定是可行的。

```js
// 核心代码就这么一行
const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750
```

下面是没有配置之前引入vant 的cell 组件，整个缩小了

配置之后，样式恢复正常

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad5627e9b1304f299c572cc1ba923d04~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/684c16e77d5144f1b92225985dbbb70a~tplv-k3u1fbpfcp-zoom-1.image)

[▲ 回顶部](#top)

## <span id="env">☝️ 配置多环境变量</span>

### 命令

package.json 里的scripts 配置build

`"build:test": "vue-cli-service build --mode test",
"build:online": "vue-cli-service build --mode online`

可以根据自己业务情况去实际扩展

#### 环境变量

目录下3个环境变量文件

-   .env
-   .env.test
-   .env.online

分别对应，通用的环境变量，测试环境变量，线上环境变量

获取时，无论什么命令都会优先获取 .env 里的环境变量，再根据不同命令，执行不同的环境变量文件，遇到相同的环境变量会进行覆盖

目前我对主要定义的几个环境变量进行说明

```
# 是否是线上版本
VUE_APP_ONLINE_ENV=false
# 环境
NODE_ENV=development
# 请求超时时间
VUE_APP_API_TIMEOUT=30000
# public-path
VUE_APP_PUBLIC_PATH=/
# 请求后端地址
VUE_APP_ACTIVITY_SERVER_TARGET = xxx
```

[▲ 回顶部](#top)

## <span id="babel">✍️兼容性处理方案</span>

### 可选链操作符和空值合并操作符的兼容处理

我们判断嵌套对象属性是否存在时，常常会用到链式操作符 **?.** ，是一个非常好用的语法糖

高版本api,需要加babel插件，转化成es5

我们对babel.config.js 进行了单独配置

同理空值合并操作符也是如此

注释里已经很清晰了

```
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
     // 空值合并操作符号 ？？
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // 可选链 ？.
    '@babel/plugin-proposal-optional-chaining',
    //vant 按需引入
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
```

### transpileDependencies

默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。

不过，对所有的依赖都进行转译可能会降低构建速度。如果对构建性能有所顾虑，你可以只转译部分特定的依赖：给本选项传一个数组，列出需要转译的第三方包包名或正则表达式即可。

**上面这种方式会影响项目构建速度和部署包大小，不能把module中所有包都放进去**

明确哪个包有转义问题，可以用这种方式babel 重新编译

目前已知需要这样的做的库，有一个加解密库***CryptoJS*** ***当前项目并没有使用***

```
transpileDependencies:['crypto-js']
```

### <span id="vconsolejs">👏vConsole.js的兼容处理</span>

vConsole是一个轻量、可拓展、针对手机网页的前端开发者调试面板。

[vConsole](https://github.com/Tencent/vConsole)

当我们直接inpmort 引入时，在低版本手机上，在安卓5.0手机上直接白屏，这个函数库使用了一些高版本语法，没有进行转义

因为vconsole 存在引用第三包的情况，无法确定范围，因此没有采用 transpileDependencies方案

推荐引入链接方式引入，不推荐直接import

可以直接在入口，根据环境变量，测试环境自动加载一个转义后的js文件

```
<script>
    var WEB_ENV = '<%= VUE_APP_ONLINE_ENV %>'
    // 根据环境变量引入VConsole(判断非生产环境)
    if (!JSON.parse(WEB_ENV)) {
        var scriptEl = document.createElement('script')
        scriptEl.src = '<%= BASE_URL %>vConsole.js'  
        scriptEl.async = true
        document.head.appendChild(scriptEl)
        scriptEl.onload = function () {
            window.vConsole = new VConsole()
        }
    }
</script>
```

[▲ 回顶部](#top)

## 其他

### <span id="loading">💅入口加载动画</span>

没有挂在dom 时，先加载loading动画，也可以加载svg，JSON格式动画，或者骨架屏，持续优化用户体验

```
<div id="app">
  <img class="no-app-img-loading" src="data:image/gif;base64,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" alt="">
</div>
```

[▲ 回顶部](#top)

# 总结

脚手架这个东西，本质是工具，工具应该是拿来即用，应该助力开发，不应该成为学习的负担。

目前前端打包工具webpack，vite等等，框架迭代升级快速，vite 我暂时没有研究，但是webpack 从3到5，三个版本，能明显感受的是，配置在简单化，学习成本在降低，很多业内大量使用的通用配置，已经成为官方的默认配置。可能官方也意识到配置复杂性的这个问题，在慢慢做改进。

但是webpack生态没有跟上，vue-cli 也是基于webpack5 之上封装一层，我在做这个vue-template项目时去查阅webpack的文档，资料不是很多，最佳实践不多，也能理解，这种优秀的实践一般都是公司内部使用，不会往外分享传播。

**vue3 +vue-cli4 + webpack5 + 多入口打包 + 自动生成项目模版 + pinia + 数据持久化 + 路由动画 + axios二次封装 + less sass 变量函数处理 +** **viewport 适配方案等等**

****

这个二次封装的框架，融合了我工作以来的经验和实践，平时学习到的优秀的类库，以及和大家交流中发现的问题和解决方案，还是遗留了很多我暂时找不到解决方案的问题，后续看精力和兴趣，如果愿意的话，都能一一攻克。


目前来说，是能够支持移动端的大多数业务，也希望能够帮助到大家业务开发！

> 如果屏幕前的你读完了，相信也读了很久，有问题，有疑问的地方，欢迎联系我，我们一起交流！点个赞就更好了。

<p align="center">如果有任何疑问，可直接微信联系我，秒回。</p>
<h3 align='center'>个人微信 & 微信公众号</h3>
<p style='display:flex;justify-content: space-between;align-items: center'><img alt="logo" style='display:flex' src="https://pic.imgdb.cn/item/62f0afa516f2c2beb12463c3.jpg" width="40%" ><img alt="logo" style='display:flex;' src="https://pic.imgdb.cn/item/62f0b07916f2c2beb1287679.png" width="300" height="300"></p>







