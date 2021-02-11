import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import Default from "../layouts/Default.vue";
import Dashboard from "../layouts/Dashboard.vue";
import { getters as AuthGetters } from "@/store/auth/getters";
import { ActionTypes as AuthActionTypes } from "@/store/auth/actions";
import store from "@/store";

Vue.use(VueRouter);

const checkAuth = async (to: Route, from: Route, next: NavigationGuardNext) => {
  if (!AuthGetters.getIsInit()) {
    await store.dispatch(`Auth/${AuthActionTypes.INIT_SESSION}`);
  }

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
    path: "/users",
    name: "User",
    component: () => import("@/views/user/UserTable.vue"),
    beforeEnter: checkAuth,
    meta: { layout: Dashboard }
  },
  {
    path: "/users/create",
    name: "UserCreate",
    component: () => import("@/views/user/UserForm.vue"),
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
