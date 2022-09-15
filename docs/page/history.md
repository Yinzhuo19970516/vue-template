# 多入口支持history路由模式
## 背景
现在项目里使用的路由模式是hash,但是如果为了路径名更加美观，我们使用history，需要对ngnix做特殊配置

我们的多入口项目，打包出的文件，一级目录没有index.html

需要展示的入口文件在page1/index.html，hehehe/index.html
如下图所示。
![](../image/history-img.png)

期望的结果是
访问 page1 请求到page1/index.html
访问 hehehe 请求到hehehe/index.html

## ngnix核心配置
```
	    location ^~ /page1 {
	        root   /opt/homebrew/var/www;
    	    try_files   $uri $uri/ /page1/index.html;
        }

        location ^~ /hehehe {
            root   /opt/homebrew/var/www;
            try_files   $uri $uri/ /hehehe/index.html;
        }
```
root 为查询的目录
try_files 为尝试读取的静态文件
完整文件在项目ngnix目录下
每次新增项目都需要手动增加ngnix 配置文件

## router.js修改
把我们的路由都放在了page1路径下，为了保证多入口文件名不冲突。
```js
// src/module/page1/router.js
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory('/page1/'),
	routes
})
```