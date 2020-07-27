/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import firebase from 'firebase/app'
import record from "../store/record";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "loading",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main", auth: true },
    component: () => import("../views/History.vue"),
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Record.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/planning",
    name: "planning",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Planning.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router;
