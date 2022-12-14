import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Vuex from 'vuex';

Vue.config.productionTip = false;


Vue.use(PrimeVue);
Vue.use();

const store = new Vuex.Store(
  {
    state: {
      items: ['a', 'l', 'o', 'n'];
    }
  }
);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
