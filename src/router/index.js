import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Decklist from "../views/Decklist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:pokemonCardId",
    name: "Details",
    component: Details,
  },
  {
    path: "/decklist",
    name: "Decklist",
    component: Decklist,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
