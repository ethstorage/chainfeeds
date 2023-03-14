import Vue from 'vue';
// import the library
import Element from 'element-ui';
import AsyncComputed from 'vue-async-computed';

import App from './App.vue'
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/all.css';
import './assets/font/font.css';

Vue.use(Element)
Vue.use(AsyncComputed, {
  default: 0
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

