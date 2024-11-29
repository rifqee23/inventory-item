import { createApp } from "vue";
import { createPinia } from "pinia";
import { logger } from "./plugins/logger";
import { persist } from "./plugins/persist";
import { createPiniaMiddleware } from "./plugins/piniaMiddleware";
import piniaPeristedState from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import router from "./router/index";

const pinia = createPinia();
pinia.use(logger);
pinia.use(persist);
pinia.use(createPiniaMiddleware);
pinia.use(piniaPeristedState);
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
