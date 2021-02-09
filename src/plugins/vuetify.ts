import Vue from "vue";
import Vuetify from "vuetify";

import it from "vuetify/src/locale/it";
import en from "vuetify/src/locale/en";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { it, en },
    current: "it"
  },
  theme: {
    themes: {
      light: {
        primary: "#2dce89",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#F44336",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#f5f5f5"
      }
    }
  }
});
