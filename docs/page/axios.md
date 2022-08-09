# axios 二次封装

## 封装目的

-   降低心智负担
-   减少冗余代码
-   使用更加高效

## 封装效果

下图是封装前后的使用代码对比

我们在业务调用中，**省略了showLoading这个过程，不关心业务code和msg，可以直接获取data进行处理，省略了显示错误信息的过程，所以代码量大大减小。**

-   封装后

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03873d6c34c7462a975686fdf4c799bf~tplv-k3u1fbpfcp-zoom-1.image)

-   封装前

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deef5ec4ab8b49309148c6a7a1399b51~tplv-k3u1fbpfcp-zoom-1.image)

## 通用能力

这里说明一下我封装时候的思路和想法

首先列一下我想要这个通用请求能达到什么样的效果

1.正常请求基础的配置，比如超时配置，baseUrl，跨域携带cookie等等

2.响应拦截处理

-   请求成功，业务状态码成功，直接解析接口中的data，不用一层一层再去取code，判断，拿结果
-   请求成功，业务状态码不成功，可以选择自己处理特殊状态码，也可以选择全局 message 提示服务端的报错，业务开发中，大部分都是直接提示服务端报错，但是也有需要前端处理状态码的逻辑
-   请求失败，全局messagege 提示报错
-   统一的特殊请求码处理，或者状态码做特殊逻辑，比如丢失登陆态，请求参数有误等等

3.全局统一的loading配置

-   默认开启，可配置关闭
-   统一管理，业务中不用再去关心这个逻辑

## 代码实现 

### 基础类型

config 是传入参数

-  ` baseURL` 是请求地址
-   `timeOut` 是请求超时时间
-   `slientError` 是我自定义的值，拿到的结果非成功的请求时，这个参数控制，要不要直接message 服务端返回的错误，一般都是直接返回，所以默认值时false
-   `loading` 是我自定义的值，用来控制，调用接口是需不需要展示loading，业务开发中大部分都需要展示loading提示用户，防止用户多次点击，少部分场景不想让用户感知在调用接口，需要关闭，所以默认值我定义了true

```js
type TAxiosOption = {
  baseURL: string
  timeout: number
  slientError: boolean
  loading: boolean
}

const config:TAxiosOption = {
  baseURL: process.env.VUE_APP_ACTIVITY_SERVER_TARGET,
  timeout: process.env.VUE_APP_API_TIMEOUT,
  slientError: false,
  loading: true
}

class Request {
  instance:AxiosInstance
  constructor(config: TAxiosOption) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(data=>{
      return data
    })
    this.instance.interceptors.response.use(data=>{
      return data
    }）
  }
  get<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.get(url, { params: data, ...config })
  }

  post<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.post(url, data, config)
  }
}
export default new Request(config)                                            
```

### api 管理

我们在调用的时候，可以在`post/get`的第三个参数中，传入自己需要的配置

如果不传全部走默认值

`slientError: true` 表示业务中自己处理异常，网路库不message异常

需要我们在业务中的catch 中 就可以拿到 接口返回的所有信息，去做相应的处理

`loading: true` 表示展示loading

```js
import request1 from '@/common/axios/request1'
// 查询拉新活动规则
export function queryInviteActivityRule(params) {
  return request1.post('/kyf-activity-api/activity/queryInviteActivityRule', params, { slientError: true, loading: true })
}
```

### 全局统一loading处理

**在请求拦截器中 执行addLoading**

**在响应拦截器中 执行cacelLoaing**

保证全局无论多少接口调用，requestNum参数 控制都只有一个loading

目前的shoowLoading 引用的是vant 组件，也可以根据自己业务需要去自定义loading组件

```js
let requestNum = 0

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++
  if (requestNum === 1) showLoading()
}
const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--
  if (requestNum === 0) hideLoading()
}
```

### 响应拦截器

拦截器的代码可以直接去看我的源代码

在`src/common/axios/request.ts` 中

主要就是在响应拦截器中对返回值做了处理，如果成功，直接返回结果，不成功，返回接口全部内容

```js
this.instance.interceptors.response.use(
      (responseData: MyAxiosResponse) => {
        const status = responseData.status
        const res = responseData.data
        const { data, code } = res
        const { loading = true } = responseData.config
        if (loading) cancelLoading()
        // 如果调用其他中台，此处需要单独对code做转化
        if (status === 200 && code === '000001') {
          return Promise.resolve(data || res || {})
        } else {
          // 此处可以处理其他特殊的业务逻辑
          // 比如丢失登陆态，传参数有误等逻辑
          if (responseData.config.slientError) {
            return Promise.reject(res)
          }
          showErrorInfo(res.msg)
          return Promise.reject(res)
        }
      },
      (error:any) => {
        const { loading = true } = error.config
        if (loading) cancelLoading()
        let errMsg
        if (error && error.response) {
          if (error.response.status >= 500 && error.response.status <= 599) {
            errMsg = '服务器繁忙，请稍后重试'
          } else if (error.response.status === 404) {
            errMsg = '服务不存在'
          } else {
            errMsg = '网络繁忙，请稍后重试'
          }
        } else {
          errMsg = '( ⊙ o ⊙ )啊！网络不太顺畅哦~'
        }
        if (error.config.slientError) {
          return Promise.reject(error)
        } else {
          showErrorInfo(errMsg)
        }
        return Promise.reject(errMsg)
      }
)        
```


### 请求拦截器

请求拦截器中一般注入token，我的代码中暂时没有做处理

[▲ 回目录](/page/index.html)