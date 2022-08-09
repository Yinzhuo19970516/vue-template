# 多入口打包

## 适用场景

移动端开发，一般情况，我们项目开发只需要一个配置一个入口，一个模版文件。

但是有时候又明显不够用，移动端，同一个业务下，同类型的项目，就很适合放在一个项目下做多入口打包。

比如以下场景：

-   **活动项目**，同类型活动多期迭代，不同类型的活动，新增一个活动就重新建立一套项目，维护成本很大，此时就很适合一个大的活动项目里，去新增多个活动页面入口。
-   当我们去写**App的内嵌h5页面**时，每个流程其实都是相互独立的，都是在一个app下，也很适合，多入口，维护在一个项目里。

## 优势

-   多入口，项目内各个入口独立，低耦合，不会相互影响。
-   发布成本低，可以维护在一个项目里，不用新建多个项目。
-   结构清晰，可维护性比较好。

>如果我们全部使用单入口，也就是vue官方提供的框架，可以设想一下，如果是活动页面，我们把所有活动的页面都定义在一个入口里，router，store全部在一块，项目耦合会越来越严重，路由名也会重合率越来越高！

## 项目结构

如下图所示，我们在src目录下面，新增了module目录，用来存放我们的多个项目入口，page1 和page2 就是我用来演示的两个项目文件。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b645e7c3ed4d476197715a9aef672c3e~tplv-k3u1fbpfcp-zoom-1.image)

## 前置依赖库

### node 的 glob库

glob 其实是linux shell默认的通配符，主要是做文件匹配，

**glob 模式通常用来匹配目录以及文件**
这里介绍的是node的一个方法库`glob`,一般用于文件系统中定位文件
主要用到了同步搜索文件API
```js
glob.sync(pattern, [options])

-   pattern {String} 待匹配的模式
-   options {Object}
-   return: {Array<String>} 匹配模式的文件名
```

### vue-cli的 pages配置

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
### devServer 的setupMiddlewares

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

## 核心代码实现

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

### pages 结构

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

### 打包目录

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01423ebb95d64c69a37a8401aa3709d2~tplv-k3u1fbpfcp-zoom-1.image)

[▲ 回目录](/page/index.html)