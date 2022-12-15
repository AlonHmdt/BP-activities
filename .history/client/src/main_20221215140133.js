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
    generateCategories: {}
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setCategoriesMap(state, categoriesMap) {
      state.ategoriesMap = ategoriesMap;
    }
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
