import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import { getters as AuthGetters } from "@/store/auth/getters";

import { ActionTypes as ActionAuthTypes } from "./store/auth/actions";

Vue.config.productionTip = false;

i18n.locale = "it";

const app = new Vue({
  store,
  /*   async beforeMount() {
    await store.dispatch(`Auth/${ActionAuthTypes.INIT_SESSION}`);
    console.log(AuthGetters.getIsAuth());
  }, */
  router,
  vuetify,
  i18n,
  render: h => h(App)
});
app.$mount("#app");
