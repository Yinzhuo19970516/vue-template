<template>
  <div class="container">
    <h2>首页 index</h2>
    <button @click="router.push('test')" class="center">跳转测试页面</button>
    <button @click="getData" style="margin-top: 20px">接口调用</button>
    <Cell title="单元格" value="内容" label="描述信息" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getInfoConfig } from '../api/index'
import { Cell } from 'vant'
import { onMounted } from 'vue'
import * as piniaStore from '../piniaStore'
import { setSessionStorage } from '@/common/utils/storage'
const storeVuex = useStore()
const router = useRouter()
const getData = async () => {
  const data = await getInfoConfig({
    key: 'xiaoying.loanproduct.h5.faceAuthority'
  }).catch(err => {
    return Promise.reject(err)
  })
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
onMounted(() => {
  // getData()
})
</script>

<script>
export default {
  name: 'index-view'
}
</script>
<style lang="less" scoped>
  h2{
    color: @textColor;
  }
</style>
<style lang="scss" scoped>
  h2 {
    color: $textColor;
  }
</style>
<style scoped>
.container{
  background:rgb(211, 124, 165);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.cell-group{
}
</style>
