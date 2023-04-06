<template>
  <div :class="$style['container']">
    <h2>撞色</h2>
    <div class="list-box-1" v-for="(item, index) of list" :key="index">
      <p>编号：{{ item.id }}</p>
      <div
        :class="$style['list-box-data']"
        v-for="(obj, key) of item.data"
        :key="key"
        :style="{ background: obj.value }"
        @click="copyText(obj.value)"
      >
        <div
          :class="$style['list-box-data-item']"
          :style="{ background: item.data[key === 0 ? 1 : 0].value }"
        ></div>
        <p class="text" :style="{ color: item.data[key === 0 ? 1 : 0].value }">
          {{ obj.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { copy } from '@/common/utils'

const copyText = (str) => {
  copy(str)
}
const list = reactive([
  {
    id: 1,
    data: [
      { name: '碧山', value: '#719847' },
      { name: '玉色', value: '#F8F7F0' }
    ]
  },
  {
    id: 2,
    data: [
      { name: '十样锦', value: '#F8C6B5' },
      { name: '卢色', value: '#564232' }
    ]
  },
  {
    id: 3,
    data: [
      { name: '洛神珠', value: '#D23918' },
      { name: '漂碧', value: '#80A492' }
    ]
  },
  {
    id: 4,
    data: [
      { name: '松绿', value: '#3D6036' },
      { name: '萱草黄', value: '#B18151' }
    ]
  },
  {
    id: 5,
    data: [
      { name: '雪清', value: '#A59ACA' },
      { name: '紫罗兰', value: '#5F479A' }
    ]
  },
  {
    id: 6,
    data: [
      { name: '太师青', value: '#55767B' },
      { name: '血牙', value: '#E9D185' }
    ]
  },
  {
    id: 7,
    data: [
      { name: '琥珀黄', value: '#F9B800' },
      { name: '青雀', value: '#153C46' }
    ]
  },
  {
    id: 8,
    data: [
      { name: '朱颜', value: '#EF856D' },
      { name: '密合', value: '#DFD7C2' }
    ]
  },
  {
    id: 9,
    data: [
      { name: '箬竹', value: '#6CA984' },
      { name: '秋波蓝', value: '#8ABCD1' }
    ]
  },
  {
    id: 10,
    data: [
      { name: '海棠红', value: '#DB5B6C' },
      { name: '粉红', value: '#EFB3A7' }
    ]
  }
])
</script>

<style module>
.container {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  height: auto;
  padding-bottom: 100px;
  box-sizing: border-box;
}
.list-box-data {
  width: 500px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
  margin: 0;
}
.list-box-data-item {
  width: 200px;
  height: 80px;
  position: absolute;
}
.text {
  margin: 0;
  display: inline-block;
}
</style>
