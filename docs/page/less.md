# less sass的优化处理

## 背景

我们使用less sass 主要是为了使用他们提供的**变量，函数等特性**。
如果不进行配置，只在入口文件引入，在各个子页面里是无法直接使用，如果使用，还需要再次引用
这个对使用者非常不友好。

## 官方方案

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

## 单独处理less

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

## 总结

三个预处理器的全局引入方案，可以参考这个文章

[CSS 预编译语言 变量全局引用方式 vue-cli@3.0 stylus/sass/less 使用方法](https://blog.csdn.net/rudy_zhou/article/details/103683140)

一般来说，一个项目使用一个css 预处理器，less 或者sass，因为我极其不适应 stylus的无括号缩进模式，所以就里没有说stylus

只要在webpack 引入了就不用再全局再次引入了，但是我始终觉得这种业务代码不应该出现在webpack中，这种方式大大增加了开发者的心智负担，也是现在脚手架设计不合理的地方，希望未来能有更好的解决方案！

至于为什么，在入口文件引入了，不配置的话，还不能使用less，或者sass的。
**这个深层原因，我猜测和vue的框架设计有关，有兴趣可以深入研究**

[▲ 回目录](/page/index.html)