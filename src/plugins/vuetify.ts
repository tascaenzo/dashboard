import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
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
