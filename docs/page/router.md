# 路由动画的封装
## 简介
路由过渡动画是对 程序一种快速简便的增加个性化效果的的方法。

可以让你在程序的不同页面之间增加平滑的动画和过渡。

如果使用得当，可以使你的程序显得更加专业，从而增强用户体验。

页面切换的动画时间的同时，下一个页面初始化也在进行了，对用户体验来说，可以有效避免下一个页面的加载`dom`，初始化页面的时间。

## 封装思路

-   使用transition方式给根路由设置全局动画
-   给router的路径设置meta的level层级
-   在入口页面的setup 中，在路由守卫中，根据level的大小，设置相应的动画
-   定义相应的动画类样式

## 代码实现

css写出动画效果

根组件 `App.vue`，监听路由的变化

**如果to索引大于from索引,使用前进的动画,反之使用后退的动画**

`level` 可以使用数字，也可以字母，也可以数字加字母，能体现大小关系即可

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

## 效果展示

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa8c3df8d3224698abcc063663a5072b~tplv-k3u1fbpfcp-zoom-1.image)

**对比不加动画的，效果还是非常好的**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b78d04c83814964bb51b891da807460~tplv-k3u1fbpfcp-zoom-1.image)

## 修改动画样式

一个项目里使用的肯定是一个动画，目前我在项目中默认使用的左滑，右滑。

可以根据业务需要，和自己的喜好，去使用更多的动画效果。

可参考大佬写的过渡效果，有兴趣可以再研究研究

[4 个 Vue 路由过渡动效](<4 个 Vue 路由过渡动效>)

[▲ 回目录](/page/index.html)