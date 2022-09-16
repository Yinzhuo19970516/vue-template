import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: () => import('./view/index.vue'),
    meta: {
      title: '主页'
    }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach(async to => {
  // 重置页面title
  const title = to.meta && to.meta.title
  document.title = title || '坤元资讯'
})
export default router
