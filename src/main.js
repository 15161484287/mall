import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store'
import Vconsole from 'vconsole';
import 'vant/lib/index.css';

import {
    Swipe,
    SwipeItem,
  } from 'vant';

  Vue.use(Swipe);
  Vue.use(SwipeItem);

new Vconsole();
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
