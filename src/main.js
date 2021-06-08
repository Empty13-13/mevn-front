import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import appJS from './components/app.min';
import css from './components/style.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  appJS,
  css,
  render: (h) => h(App),
}).$mount('#app');
