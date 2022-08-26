## 1.网站开发中，如何实现图片的懒加载
### 方案一 位置计算+滚动事件+DataSet API

1.监听window.scroll事件
2.判断图片出现在了当前视口

```js
// Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
// clientHeight 代表当前视口的高度
img.getBoundingClientRect().top < document.documentElement.clientHeight;
```

3.预先将图片真实的src放在我们自定义的属性里面（比如data-src），当图片出现在了我们的视口范围之内的时候，再把data-src赋值给src属性，完成图片加载。
```js
// 页面初始化时
<img data-src="https://img11.360buyimg.com/pop/s590x470.jpg.webp" />

// 当图片出现在了视口范围之内
<img data-src="https://img11.360buyimg.com/pop/s590x470.jpg.webp" src="https://img11.360buyimg.com/pop/s590x470.jpg.webp">

```
### 方案二 IntersectionObserver API + DataSet API
IntersectionObserver API，一个能够监听元素是否到了当前视口的事件，一步到位！

### 方案三  LazyLoading 属性
```js
<img src="shanyue.jpg" loading="lazy" />
```
## 2.当新入职一家公司时，如何快速搭建开发环境并让应用跑起来 

* 查看是否有 CI/CD，如果有跟着 CI/CD 部署的脚本跑命令
* 查看是否有 dockerfile，如果有跟着 dockerfile 跑命令
* 查看 npm scripts 中是否有 dev/start，尝试 npm run dev/npm start
* 查看是否有文档，如果有跟着文档走。为啥要把文档放到最后一个？原因你懂的

## 3.什么是防抖节流，他们的应用场景有哪些？
防抖：防止抖动，避免一个事件被执行多次
高频事件，事件被触发后n秒再执行，如果在这n秒内又被触发，则重新计时，延后执行函数
适用场景：
登陆按钮发送短信按钮的点击
调整窗口大小
文本编辑器实时保存，当无任何更改操作一秒后进行保存

```js
function debounce(fn,wait){
    let timer
    return function(...args){
      if(timer){
          clearTimeout(timer)
      }
      timer = setTimeout(()=>{
          fn.apply(this,args)
      },wait)
    }
}
```

节流：每隔一段时间，只执行一次。按照一定频率来执行
适用场景
scroll 事件，每隔一秒计算一次位置信息
浏览器播放事件，每个一秒计算一次进度信息等

```js
function throttle(fn,wait){
    let timer 
    if(timer){
        return
    }
    return function(...args) {
        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null
        }, wait)
    }
}
```
## 4.如何实现一个元素的水平垂直居中
* flex
* grid
* 绝对定位 + transform
* 绝对定位 + margin负边距
* 绝对定位 + margin:auto
* flex + margin:auto
* text-algin:center line-height = height
```
// display
.a {
    display:flex;
    justify-content: center;
    align-items: center;
}
// 绝对定位
.a {
    position:absolute;
    top:50%;
    bottom:50%;
    transform: translate(-50%, -50%);
}
// grid
.container {
  display: grid;
  justify-content: center;
  align-content: center;
}
//在将元素绝对定位为 top: 50%; left: 50%;后，可以使用值为宽的一半和高的一半的负 margin 实现垂直水平居中
.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -50px 0 0 -150px;
}
// 绝对定位，加 margin:auto
.container {
  position: relative;
  height: 300px;
  border: 1px solid red;
}
.item {
  width: 100px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
// flex 花活 //行内元素与块状元素均可
.box {
  display: flex;
}

.item {
  margin: auto;
}
// 行内元素  text-aligin:center line-height = height
```

