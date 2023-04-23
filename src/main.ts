import { createApp } from "vue";
import "uno.css";
import App from "./App.vue";
import * as VueRouter from "vue-router";

import Home from "./views/HomeView.vue";
import About from "./views/AboutView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount("#app");
