import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

Vue.config.productionTip = false;

new Vue({
  router,
  el:'#app',
  template: '<App :appName/>',
  data () {
    return {
      appName: 'alon'
    }
  },
  render: h => h(App),
});

Vue.use(PrimeVue);