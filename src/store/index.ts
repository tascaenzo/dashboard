import Vue from "vue";
import Vuex from "vuex";

import Auth from "./auth";
import Notification from "./notification";
import Crud from "./crud";
import Search from "./search";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    Auth,
    Notification,
    Crud,
    Search
  },
  strict: debug
});
