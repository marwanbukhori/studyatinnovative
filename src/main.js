import { createApp } from "vue";
import { inject } from "@vercel/analytics";
import App from "./App.vue";
import i18n from "./i18n";
import "./styles/main.css";
import "./utils/tracking";

inject();

createApp(App).use(i18n).mount("#app");
