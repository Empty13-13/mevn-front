import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Главная',
    meta: { layout: 'main' },
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/sets',
    name: 'Сет-листы',
    meta: { layout: 'main' },
    component: () => import('@/views/sets.vue'),
  },
  {
    path: '/songs',
    name: 'Песни',
    meta: { layout: 'main' },
    component: () => import('@/views/songs.vue'),
  },
  {
    path: '/chat',
    name: 'Чат',
    meta: { layout: 'main' },
    component: () => import('@/views/chat.vue'),
  },
  {
    path: '/testcalendar',
    name: 'testcalendar',
    meta: { layout: 'main' },
    component: () => import('@/views/testcalendar.vue'),
  },
  {
    path: '/addevents',
    name: 'addevents',
    meta: { layout: 'main' },
    component: () => import('@/views/addevents.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('@/views/login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
