# 接入nprogess
NProgress是页面跳转是出现在浏览器顶部的进度条
官网：http://ricostacruz.com/nprogress/
github：https://github.com/rstacruz/nprogress

## 使用方式
具体代码在src/common/utils/nprogress.ts
```js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局进度条的配置
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 300, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: 'body' // 指定进度条的父容器
})

// 打开进度条
export const start = () => {
  NProgress.start()
}

// 关闭进度条
export const close = () => {
  NProgress.done()
}
```

## 使用场景
* 路由切换
使用路由动画太多会引起审美疲劳，而且容易有兼容性bug,在主要流程使用NProgress就非常不错
```js
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
```
* 网络请求 
写在axios的请求拦截器和响应拦截器里，每次只要触发axios请求就加载进度条
```js
// axios请求拦截器
axios.interceptors.request.use(
config => {
NProgress.start() // 设置加载进度条(开始..)
return config
},
error => {
return Promise.reject(error)
}
)
// axios响应拦截器
axios.interceptors.response.use(
function(response) {
NProgress.done() // 设置加载进度条(结束..)
return response
},
function(error) {
return Promise.reject(error)
}
)
```

* 入口文件加载中
```js
<script>
  NProgress.start()
  // 给页面设置请求加载进度条效果
  window.onload = function() {
    NProgress.done()
  }
</script>
```