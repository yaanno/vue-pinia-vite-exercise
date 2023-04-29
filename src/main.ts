import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import ArticlePage from "./views/ArticlePage.vue";
import MainPage from "./views/MainPage.vue";

const pinia = createPinia();
const router = createRouter({
  routes: [
    { path: "/", component: MainPage },
    { path: "/:slug", component: ArticlePage },
  ],
  history: createWebHashHistory(),
});

createApp(App).use(router).use(pinia).mount("#app");
