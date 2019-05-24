import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// custom component
import global from './components/global/index'
Vue.use(global)

import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css';
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../node_modules/jquery/dist/jquery.min.js');

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
