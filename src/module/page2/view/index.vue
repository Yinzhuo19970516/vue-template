<template>
  <div class="container">
    <h2>index 首页</h2>
    <button @click="router.push('test')">跳转test</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<script>
export default {
  name: 'index-view'
}
</script>

<style scoped>
.container{
  background:rgb(211, 124, 165);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
