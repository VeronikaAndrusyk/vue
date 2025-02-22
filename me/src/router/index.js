/* eslint-disable no-undef */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Settlement from "@/components/Settlement.vue";
import LoginPage from "../views/LoginPage.vue";
import SignUp from "../views/SingUp.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/staff",
    name: "staff",
    component: () => import("../views/StaffView.vue"),
  },
  {
    path: "/settlement",
    name: "Settlement",
    component: Settlement,
    // meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/singUp",
    name: "singUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
