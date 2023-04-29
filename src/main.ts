import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import ArticlePage from "./views/ArticlePage.vue";
import MainPage from "./views/MainPage.vue";
import "./style.css";

const pinia = createPinia();
const router = createRouter({
  routes: [
    { path: "/", component: MainPage },
    { path: "/:slug", component: ArticlePage },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).use(pinia).mount("#app");
