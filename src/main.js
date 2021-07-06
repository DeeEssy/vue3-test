import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";
import store from "./store";
import UI from "@/components/UI";

const app = createApp(App);

UI.forEach((el) => {
  app.component(el.name, el);
});

app
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount("#app");
