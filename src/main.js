import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";
import store from "./store";
import UI from "@/components/UI";
import directives from "@/directives";

const app = createApp(App);

UI.forEach((el) => {
  app.component(el.name, el);
});

directives.forEach((el) => {
  app.directive(el.name, el);
});

app
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount("#app");
