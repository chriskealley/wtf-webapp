import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import "uno.css";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(pinia).use(router).mount("#app");
