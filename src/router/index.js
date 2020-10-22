import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";

import HomePage from "../pages/Home/HomePage";
import allRoutes from "./allRouters";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Login" */ "../pages/Login")
  },
  {
    path: "/rotation",
    name: "rotation",
    // route level code-splitting
    // this generates a separate chunk (rotation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "rotation" */ "../pages/Rotation.vue"),
     
  }
];

const router = new VueRouter({
  routes
});

export default router;
