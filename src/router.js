import Vue from 'vue'
import Router from 'vue-router'
import Layout from './layout'
import Form from './views/form'
import About from './views/about'


Vue.use(Router)
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '面板',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    redirect: '/form/index',
    children: [{
      path: 'index',
      hide: false,
      component: Form,
      meta: {
        title: '表单',
        icon: 'form'
      }
    }, ]
  },

  {
    path: '/about',
    name: 'about',
    component: Layout,
    redirect: '/about/index',
    children: [{
      path: 'index',
      hide: false,
      component: About,
      meta: {
        title: '关于',
        icon: 'example'
      }
    }, ]
  },

];
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes,
})