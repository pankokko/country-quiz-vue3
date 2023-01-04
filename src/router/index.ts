import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/countries",
      name: "countries",
      component: () => import("../views/CountriesView.vue"),
    },
    {
      path: "/countries/:name",
      name: "country",
      component: () => import("../views/CountryView.vue"),
    },
  ],
});

export default router;
