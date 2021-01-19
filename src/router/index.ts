import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import Default from "../views/layouts/Default.vue";
import Dashboard from "../views/layouts/Dashboard.vue";
import { getters as AuthGetters } from "@/store/auth/getters";

Vue.use(VueRouter);

const checkAuth = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (!AuthGetters.getIsAuth()) {
    next("/login");
  }
  next();
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    beforeEnter: checkAuth,
    meta: { layout: Dashboard }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    beforeEnter: checkAuth,
    meta: { layout: Dashboard }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { layout: Default }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
