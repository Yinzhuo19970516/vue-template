<template>
  <div class="container">
    <h2>test 页面</h2>
    <button @click="router.push('index')">跳转index</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<script>
export default {
  name: 'test-view'
}
</script>

<style scoped>
.container{
  background:rgb(85, 225, 153);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
