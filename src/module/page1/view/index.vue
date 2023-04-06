<template>
  <div class="container">
    <h2>首页 index(Vite)</h2>
    <Cell title="单元格" value="内容" label="描述信息" />
    <van-button type="primary" @click="router.push('test')" class="btn"
    >跳转测试页面</van-button>
    <van-button type="primary" @click="getData" class="btn">测试接口调用</van-button>
    <van-button type="primary" @click="getData2" class="btn"
    >测试取消重复请求</van-button>
    <div class="btn-box">
      <van-button round type="success" @click="router.push('colorList')"
      >高级色页面</van-button>
      <van-button round type="success" @click="router.push('colorList1')"
      >撞色页面</van-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getInfoConfig } from '../api/index'
import { Cell } from 'vant'
import * as piniaStore from '../piniaStore'
import { setSessionStorage } from '@/common/utils/storage'
const storeVuex = useStore()
const router = useRouter()

const getData = async () => {
  // axios封装之后，请求接口获取数据标准写法
  const data = await getInfoConfig({
    key: 'xiaoying.loanproduct.h5.faceAuthority'
  }).catch((err) => {
    return Promise.reject(err)
  })
  // 获取数据之后，进一步存储
  // vuex
  // session
  // pinia
  storeVuex.commit('increment')
  setSessionStorage('key', data)
  piniaStore.main().$patch({
    configInfo: { data: data }
  })
  piniaStore.test().$patch({
    age: 24
  })
  piniaStore.test1().$patch({
    name: 'yinzhuo'
  })
}
// 测试取消重复请求
// 将网络调整  Slow 3G 可以模拟若网络情况，多次请求接口，未返回的情况，取消重复请求
const getData2 = async () => {
  await getInfoConfig({
    key: 'xiaoying.loanproduct.h5.faceAuthority'
  })
  setTimeout(async () => {
    await getInfoConfig({
      key: 'xiaoying.loanproduct.h5.faceAuthority'
    })
  }, 500)
  setTimeout(async () => {
    await getInfoConfig({
      key: 'xiaoying.loanproduct.h5.faceAuthority'
    })
  }, 1000)
}
</script>

<!--样式测试-->
<script>
export default {
  name: 'index-view'
}
</script>
<style lang="less" scoped>
h2 {
  color: @textColor;
}
</style>
<style lang="scss" scoped>
h2 {
  color: $textColor;
}
</style>
<style scoped>
.container {
  background: rgb(211, 124, 165);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.cell-group {
}
.btn {
  margin-top: 50px;
}
.btn-box {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 50px;
}
</style>
