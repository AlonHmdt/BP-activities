import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dialog from "../components/Dialog.vue";
import axios from "axios";

// function checkExists(to, from, next) {
//   const id = to.params.id;
//   const items = app.$store.state.items;
//   console.log(items);
//   if (true) {
//     next();
//   } else {
//     alert("not found");
//     next("/");
//   }
// }

async function setItmes(to, from, next) {
  const response = await axios.get("http://localhost:3000/activities/v1");
  console.log("aaaa", response);
  next();
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: setItmes,
    children: [
      {
        path: "activities/:id",
        name: "dialog",
        component: Dialog
      }
    ]
  },
  {
    path: "/homev2",
    name: "homev2",
    component: () => import("../views/Homev2.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
