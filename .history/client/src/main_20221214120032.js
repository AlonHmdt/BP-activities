import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

Vue.config.productionTip = false;

new Vue({
  router,
  el:'#app',
  template: '<App :appName="appName"/>',
  components: {App},
  data () {
    return {
      appName: 'alon'
    }
  },
});

Vue.use(PrimeVue);