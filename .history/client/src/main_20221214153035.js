import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Vuex from 'vuex';
Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.use(PrimeVue);

const store = new Vuex.Store(
  {
    state: {
      items: ['a', 'l', 'o', 'n']
    },
    mutations: {
      setItems(state, items) {
        state.items = items;
      }
    }
  }
);


new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app');
