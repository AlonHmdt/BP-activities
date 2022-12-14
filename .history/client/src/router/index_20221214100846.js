import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dialog from '../components'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
        {
          path:':id',
          name: 'dialog',
          component: Dialog,
        }
    ]
  },
  {
    path: '/homev2',
    name: 'homev2',
    component: () => import('../views/Homev2.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
