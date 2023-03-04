<template>
  <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style>
#app {
  /** 用于被 postcss-mobile-forever 识别，在桌面端和横屏居中展示页面 */
}
</style>
