<style>
.bg {
  width: 100vh;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1598624262720-0d04fa753768?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.form {
  width: 100vh;
  height: 100vh;
  background-color: #f5f5f5;
}

.footer {
  bottom: 0%;
  position: fixed;
}
</style>

<template>
  <v-layout>
    <v-flex lg7 md6 sm4 v-show="!$vuetify.breakpoint.xs">
      <v-card height="100%" width="100%" :elevation="16" class="bg" />
    </v-flex>
    <v-flex lg5 md6 sm8 xs12 form>
      <v-container pa-10 py-16>
        <v-card-actions class="justify-center">
          <img alt="Login Avatar" height="180" src="@/assets/img/avatar.png" />
        </v-card-actions>

        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <!--v-checkbox label="Do you agree?"></v-checkbox-->
          <v-card-actions class="justify-center">
            <v-btn @click="sigin" color="primary">{{ $t("login") }}</v-btn>
          </v-card-actions>
        </v-form>

        <v-card-actions class="justify-center">
          <p class="font-weight-light footer">
            Copyright © Enzo Tasca {{ new Date().getFullYear() }}
          </p>
        </v-card-actions>
      </v-container>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { mapActions } from "vuex";
import { LOGIN, LOGOUT } from "@/store/auth/actions.type";

export default {
  name: "Login",
  components: {},
  data() {
    return { showPassword: false };
  },

  methods: {
    ...mapActions({
      login: `auth/${LOGIN}`,
      logout: `auth/${LOGOUT}`,
    }),
    sigin() {
      this.logout({ msg: "aaa" });
      //this.$i18n.locale = "en";
    },
  },
};
</script>