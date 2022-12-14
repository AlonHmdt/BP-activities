import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  mounted() {
    axios.get('http://localhost:3000/activities/v1').
  }
}).$mount('#app');

Vue.use(PrimeVue);