import Vue from "vue";
import Vuex from "vuex";

import Auth from "./auth";
import Notification from "./notification";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    Auth,
    Notification
  },
  strict: debug
});
