import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/home',
			// 此处使用@/，使用./会无法识别
			component: () => import('@/pages/home/index.vue')
		},
		// 配置重定向
		{
			path: '/',
			redirect: '/home'
		}
	],
	scrollBehavior(){
		return {
			left: 0,
			top: 0
		}
	}
})