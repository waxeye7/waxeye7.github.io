import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
