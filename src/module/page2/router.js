import { createRouter, createWebHashHistory } from 'vue-router'
import { close, start } from '@/common/utils/nprogress'

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
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('./view/test.vue'),
		meta: {
			title: '测试页面'
		}
	}
]
const router = createRouter({
  history: createWebHashHistory(),
	routes
})

router.afterEach(async (to) => {
  start()
	// 重置页面title
	const title = to.meta && to.meta.title
	document.title = title || '坤元资讯'
})

router.afterEach(() => {
  close()
})
export default router
