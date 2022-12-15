import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(PrimeVue);
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [],
    name: ""
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    }
  }
});

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount("#app");
