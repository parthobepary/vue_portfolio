import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);
app.use(router)
app.mount("#app")
