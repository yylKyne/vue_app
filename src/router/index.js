import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Foot from '@/components/tab_foot/foot'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: {
				name: 'login',
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}, 
		{
			path: '/foot',
			name: 'foot',
			component: Foot
		}
	]
})