import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        //primary: "#2CC776",
        primary: "#00C853",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#F44336",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
