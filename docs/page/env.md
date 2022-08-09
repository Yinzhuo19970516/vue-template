# 配置多环境变量

## 命令

package.json 里的scripts 配置build
```json
"build:test": "vue-cli-service build --mode test",
"build:online": "vue-cli-service build --mode online"
```

可以根据自己业务情况去实际扩展

## 环境变量

目录下3个环境变量文件

-   .env
-   .env.test
-   .env.online

分别对应，通用的环境变量，测试环境变量，线上环境变量

获取时，无论什么命令都会优先获取 .env 里的环境变量，再根据不同命令，执行不同的环境变量文件，遇到相同的环境变量会进行覆盖

目前我对主要定义的几个环境变量进行说明

```js
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

[▲ 回目录](/page/index.html)