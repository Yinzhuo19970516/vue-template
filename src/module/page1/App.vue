<template>
  <router-view v-slot="{ Component }">
    <transition :name="state.transitionName">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// import { start, close } from '@/common/utils/nprogress'

const router = useRouter()
const state = reactive({
  transitionName: 'slide-left'
})
// 页面跳转过度动画，两种方式，请自选
// router.beforeEach((to, from) => {
//   start()
// })
//
// router.afterEach(to => {
//   close()
// })
router.beforeEach((to, from) => {
  if (to.meta.level > from.meta.level) {
    state.transitionName = 'slide-left' // 向左滑动
  } else if (to.meta.level < from.meta.level) {
    // 由次级到主级
    state.transitionName = 'slide-right' // 向右滑动
  } else {
    state.transitionName = '' // 同级无过渡效果
  }
})
</script>
<style>
@import "@/common/style/pageTransAnimate.css";
</style>
