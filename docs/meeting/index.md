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
