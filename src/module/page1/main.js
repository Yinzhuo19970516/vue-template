import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import storeVuex from './store'
// import '@/common/style/base.less'
// import '@/common/style/base.scss'
import { createPinia } from 'pinia'
import piniaPlugin from '@/common/utils/piniaPlugin'
// 创建pinia 实例
const pinia = createPinia()
pinia.use(
  piniaPlugin({
    key: 'yz', // 这是给缓存到本地时，加一个特殊的前缀，以免造成污染到其他缓存数据
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
createApp(App).use(pinia).use(storeVuex).use(router).mount('#app')
