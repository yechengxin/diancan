import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/home/Home')
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/cart/Cart')
	},
	
	{
		path: '/category/:iid',
		name: 'Category',
		component: () => import('../views/category/Category')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
