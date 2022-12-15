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
    categoriesMap: {}
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setCategoriesMap(state, categoriesMap) {
      state.categoriesMap = categoriesMap;
    }
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
