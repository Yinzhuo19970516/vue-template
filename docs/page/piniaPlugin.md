# Pinia数据持久化插件

## 使用场景

把数据缓存下来，可以避免页面刷新时，重复调用接口，提升用户体验

## 封装sessionStorage localStorage

代码在 src/common/utils/storage.ts

```js
let hasSessionStorage = true
let hasLocalStorage = true
//判断当前浏览器是否支持sessionStorage
if (sessionStorage) {
  try {
    sessionStorage.setItem('_sessionStorageTest', 'Hello World!')
    sessionStorage.removeItem('_sessionStorageTest')
  } catch (e) {
    hasSessionStorage = false
  }
} else {
  hasSessionStorage = false
}
//判断当前浏览器是否支持localStorage
if (localStorage) {
  try {
    localStorage.setItem('_localStorageTest', 'Hello World!')
    localStorage.removeItem('_localStorageTest')
  } catch (e) {
    hasLocalStorage = false
  }
} else {
  hasLocalStorage = false
}
/**
 * 设置本地缓存
 * @param key
 * @param val
 */
export function setLocalStorage(key: string, val?: any): void {
  if (!hasLocalStorage) {
    return
  }
  localStorage.setItem(key, JSON.stringify(val))
}
/**
 * 设置会话级别缓存
 * @param key
 * @param val
 */
export function setSessionStorage(key: string, val: any): void {
  if (!hasSessionStorage) {
    return
  }
  sessionStorage.setItem(key, JSON.stringify(val))
}
```

## 代码实现 

核心就是，Pinia的监听API **`subscribe`**

**state中的数据变化时，就会触发subscribe**

这样我们就可以判断当前变化的store的id，是否在我们的需要持久化的数组中

如果在，我们就将数据存到本地缓存

```js
const getStorageTypeMap: AnyObj = {
  sessionStorage: getSessionStorage,
  localStorage: getLocalStorage
}

const setStorageTypeMap: AnyObj = {
  sessionStorage: setSessionStorage,
  localStorage: setLocalStorage
}

const plugin = (options: Options): any => {
  // key 为标识前缀，避免命名空间冲突
  const { key, storeList } = options
  return (context: PiniaPluginContext) => {
    const { store } = context
    let storageType:any
    let obj: any = {}
    for (const item of storeList) {
      if (item.storeName.includes(store.$id)) {
         // storeName 为哪个store，path 为store下某个字段
        const { storeName, path } = item
         
        storageType = item.storageType
        // 如果key 不存在默认走 pinia
        const data = getStorageTypeMap[storageType](`${key ?? 'pinia'}-${store.$id}`)
        if (data) {
          // 更新store
          store.$patch(data)
        }
        if (path && path.length > 0) {
          // 如果存在path 则需要判断
          if (storeName.length === 1) {
            path.forEach((item) => {
              obj[item] = store.$state[item]
            })
          } else {
            return new Error('配置path 时只允许配置一个storeName')
          }
        }
        obj = path && path.length > 0 ? obj : store.$state
        storeName.includes(store.$id) &&
        store.$subscribe(() => {
          setStorageTypeMap[storageType](`${key ?? 'pinia'}-${store.$id}`, toRaw(obj))
        })
      }
    }
  }
}
```

## 全局引入

这个是我定义的store文件，里面定义了三个store,分别为 `main，test，test1`

```js
// piniaStore.js
import { defineStore } from 'pinia'

export const main = defineStore('main', {
  state: () => {
    return {
      test: 'hello word',
      test1: 'hello word1',
      configInfo: {}
    }
  },
  getters: {},
  actions: {}
})

export const test = defineStore('test', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})

export const test1 = defineStore('test1', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})
```

在入口文件处 引入插件，然后对进行需要存储的store和字段进行配置

-   **key** 为这个项目使用的一个命名前缀，保证不会污染到其他缓存数据
-   **storeName** 为一个数组，可以为空，默认存储所有store，可以配置自己需要存储的store名字
-   **storageType** 为字符串，可以配置需要会话级存储还是本地化存储
-   **path** 为一个数组，可以为空，默认存储该store下所有字段，可以配置自己需要的字段

```js
import { createPinia } from 'pinia'
import piniaPlugin from '@/common/utils/piniaPlugin'
// 创建pinia 实例
const pinia = createPinia()
pinia.use(
  piniaPlugin({
    key: 'XXX', // 这是给缓存到本地时，加一个特殊的前缀，以免造成污染到其他缓存数据
    storeList: [
      {
        storeName: ['main'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'sessionStorage',
        path: ['configInfo']
      },
      {
        storeName: ['test'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'sessionStorage'
      },
      {
        storeName: ['test1'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'localStorage'
      }
    ]
  })
)
```

存储之后的结果，可以在浏览器里看到

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28d548da75fb4733955397f7ba3967e3~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9993f3e214546dbb89d3187367c3c4a~tplv-k3u1fbpfcp-zoom-1.image)


## 参考库

<https://github.com/Seb-L/pinia-plugin-persist>

当时是参考了网路上一个开源库的实现

这个库如果使用，需要每个store下，都进行配置。

我们开发时，不可能只定义一个store，一般是按功能，模块划分代码，保证可读性。

所以我觉得使用这个库，开发成本更大

因此在这个基础上自行写了一套持久化插件，在入口处全局管理

```js
export const useUserStore = defineStore('storeUser', {
  state () {
    return {
      firstName: 'S',
      lastName: 'L',
      accessToken: 'xxxxxxxxxxxxx',
    }
  },
  // 插件配置  
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',  //自定义 Key值
        storage: localStorage,  // 选择存储方式
      },
    ],
  },
})
```

## 总结

我现在开发的持久化插件，一定程度上，增加了使用者的心智负担，需要去了解配置项的规则。

持久化存储的场景非常多，对于小型页面小型项目，直接在修改store，再手动设置一次sessionStroage，在页面中使用的时候，再去主动取一下sessionStorage 即可，没有任何问题。

但是如果是对于多人维护的大型项目，如果这么写，随着迭代，将搞不清楚到底哪些数据存在了session中，在什么时机存储的，无法统一管理。

有这样一个插件，**就可以在全局统一配置，增删改查在入口文件统一管理。**

[▲ 回目录](/page/index.html)