import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dialog from '../components/Dialog.vue'

function checkExists(to, from, next){
const id = to.params.id;
 next();
}

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
          beforeEnter : checkExists,
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
