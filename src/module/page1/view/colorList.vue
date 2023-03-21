<template>
  <div class="container">
    <h2>传统色搭配</h2>
    <div class="list-box-1" v-for="(item, index) of list" :key="index">
      <p>编号：{{ item.id }}</p>
      <div
        class="list-box-data"
        v-for="(obj, key) of item.data"
        :key="key"
        :style="{ background: obj.value }"
        @click="copyText(obj.value)"
      >
        {{ obj.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { copy } from '@/common/utils'
import { setRgbTo16 } from '@/common/utils/tool'

const copyText = (str) => {
  copy(setRgbTo16(str))
}
const list = reactive([
  {
    id: 1,
    data: [
      { name: '主草', value: 'rgb(166,064,54)' },
      { name: '扶光', value: 'rgb(240,194,162)' },
      { name: '吐绶蓝', value: 'rgb(65,130,164)' },
      { name: '青雀头黛', value: 'rgb(53,78,107)' }
    ]
  },
  {
    id: 2,
    data: [
      { name: '麒麟', value: 'rgb(18,38,79)' },
      { name: '青雀头黛', value: 'rgb(53,78,107)' },
      { name: '法翠', value: 'rgb(16,139,150)' },
      { name: '素采', value: 'rgb(212,221,225)' }
    ]
  },
  {
    id: 3,
    data: [
      { name: '獭见', value: 'rgb(21,29,41)' },
      { name: '法脆', value: 'rgb(16,139,150)' },
      { name: '黄不老', value: 'rgb(219,155,52)' },
      { name: '素采', value: 'rgb(171,29,34)' }
    ]
  },
  {
    id: 4,
    data: [
      { name: '伽罗', value: 'rgb(109,92,61)' },
      { name: '京远', value: 'rgb(49,50,44)' },
      { name: '玉并', value: 'rgb(234,229,227)' },
      { name: '椒房', value: 'rgb(219,156,94)' }
    ]
  }
])
</script>

<style scoped>
.container {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  height: auto;
  padding-bottom: 100px;
}
.list-box-data {
  width: 500px;
  height: 80px;
  text-align: center;
  line-height: 80px;
}
</style>
