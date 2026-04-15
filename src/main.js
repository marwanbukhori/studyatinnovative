import { createApp } from "vue";
import { inject } from "@vercel/analytics";
import App from "./App.vue";
import i18n from "./i18n";
import "./styles/main.css";
import "./utils/tracking";

const isPrerender = /HeadlessChrome/.test(navigator.userAgent);
if (!isPrerender) inject();

const app = createApp(App).use(i18n);
app.mount("#app");

requestAnimationFrame(() => {
  document.dispatchEvent(new Event("app-rendered"));
});
