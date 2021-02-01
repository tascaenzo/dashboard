import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import axios from "axios";
import { URL_API } from "@/env.json";

Vue.config.productionTip = false;

i18n.locale = "it";
axios.defaults.baseURL = URL_API;

new Vue({
  store,
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
