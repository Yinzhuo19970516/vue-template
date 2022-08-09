# 自动化生成项目基本模版 
## 业务背景

当我们在新建项目时，一般是手动新建文件夹，然后定义项目名字，新建入口文件，index.html，.vue文件，新建router store文件等等，这个是每次新建时必不可少的步骤。

其实，初始化项目的时候，新建的内容都差不多，如果我们能用一行指令，帮助我们生成这些模版文件，我们只需要定义个文件名字，可以显著提升开发体验。

## 新建项目指令

我在package.json里新增了一个指令 init

```js
"init": "node ./src/common/initTemplate/index.js"
```

当执行这个命令时，会自动去执行，在本地common 目录下新建的js脚本，在module目录下自动生成一个新的文件。

## 演示

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

## 实现思路

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

### inquirer

这个库用来询问用户输入项目名称，这是一个比较在处理命令行交互比较常见的库，详情可以查阅文档

[前端Node命令行交互工具](http://www.baidu.com/link?url=LwKD5CZQCby8PJ57ipiAhi7XBu_A47JlhxLA7k-AhE_IeymkktWklIxSXqfOIZs_Pz9DlKLxlxrkZXGJTMs5Vq) —— inquirer

用vue-cli脚手架新建项目的应该都进行过命令交互，vue创建的时候会让你选择vue2还是vue3，也有多选要什么配置，也有输入y或者n选择是否用history路由等，这其实用inquire这个包都能实现。

### fs.access

fs.access()方法可以用于测试文件是否存在

### 流程图

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8660e84c5b0c4567ba21c429d31809da~tplv-k3u1fbpfcp-zoom-1.image)

## 代码

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
[▲ 回目录](/page/index.html)