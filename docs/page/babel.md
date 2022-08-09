# 兼容性处理方案
## 可选链操作符和空值合并操作符的兼容处理

我们判断嵌套对象属性是否存在时，常常会用到链式操作符 **?.** ，是一个非常好用的语法糖

高版本api,需要加babel插件，转化成es5

我们对babel.config.js 进行了单独配置

同理空值合并操作符也是如此

注释里已经很清晰了

```js
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

## transpileDependencies

默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。

不过，对所有的依赖都进行转译可能会降低构建速度。如果对构建性能有所顾虑，你可以只转译部分特定的依赖：给本选项传一个数组，列出需要转译的第三方包包名或正则表达式即可。

**上面这种方式会影响项目构建速度和部署包大小，不能把module中所有包都放进去**

明确哪个包有转义问题，可以用这种方式babel 重新编译

目前已知需要这样的做的库，有一个加解密库***CryptoJS*** ***当前项目并没有使用***

```js
transpileDependencies:['crypto-js']
```

## vConsole.js的兼容处理

vConsole是一个轻量、可拓展、针对手机网页的前端开发者调试面板。

[vConsole](https://github.com/Tencent/vConsole)

当我们直接inpmort 引入时，在低版本手机上，在安卓5.0手机上直接白屏，这个函数库使用了一些高版本语法，没有进行转义

因为vconsole 存在引用第三包的情况，无法确定范围，因此没有采用 transpileDependencies方案

推荐引入链接方式引入，不推荐直接import

可以直接在入口，根据环境变量，测试环境自动加载一个转义后的js文件

```js
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

[▲ 回目录](/page/index.html)
