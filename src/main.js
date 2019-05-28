import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss' // global css

Vue.use(ElementUI);

// custom component
import global from './layout/components/global/index'
Vue.use(global)

import App from './App.vue'
import store from './store';
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

require('../node_modules/jquery/dist/jquery.min.js');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
