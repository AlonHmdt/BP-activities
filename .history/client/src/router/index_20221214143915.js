import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dialog from '../components/Dialog.vue'

checkExists(to, from, next){
  const id = to.params.id;
  const response = await axios.get('http://localhost:3000/activities/v1');
  
  if (id > 100) {
    next();
  } else {
    next('/');
  }
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
        {
          path:'activities/:id',
          name: 'dialog',
          component: Dialog
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
