// eslint-disable-next-line
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

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
      title: '主页',
      level: 'a1'
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('./view/test.vue'),
    meta: {
      title: '测试页面',
      level: 'a2'
    }
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory('/page1/'),
  routes
})

router.afterEach(async to => {
  // 重置页面title
  const title = to.meta && to.meta.title
  document.title = title || '坤元资讯'
})
export default router
