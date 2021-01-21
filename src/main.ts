import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";

Vue.config.productionTip = false;

i18n.locale = "it";

new Vue({
  store,
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
