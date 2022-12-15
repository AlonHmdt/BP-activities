import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dialog from "../components/Dialog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "activities/:id",
        name: "dialog",
        component: Dialog
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
