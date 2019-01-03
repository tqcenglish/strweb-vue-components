import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Form from './views/Form.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component:Main,
      children: [
        {
          path: '/',
          redirect: 'form',
        },
        {
          path: 'form',
          name: '表单',
          component: Form,
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('./views/About.vue')
        },
      ]
    },
  ]
})
