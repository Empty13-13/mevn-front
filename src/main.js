import Vue from 'vue';
import Vuelidate from 'vuelidate'
import VueToast from 'vue-toast-notification';
import App from './App.vue';
import router from './router';
import store from './store';

import cookiePlugin from '@/plugins/cookie'
import appJS from './components/app.min';
import css from './components/style.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import './registerServiceWorker';


Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.use(cookiePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  appJS,
  css,
  render: (h) => h(App),
}).$mount('#app');

export const bus = new Vue()
