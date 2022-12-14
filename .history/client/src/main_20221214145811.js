import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Vuex from 'vuex';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

Vue.use(PrimeVue);
Vue.useVuex();

const store = new Vuex.Store(
  {
    state: {
      items: ['a', 'l', 'o', 'n']
    }
  }
);