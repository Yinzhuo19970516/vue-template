<template>
  <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
