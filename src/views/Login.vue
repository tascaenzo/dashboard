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

        <v-form @submit.prevent="onSubmit" lazy-validation>
          <v-text-field
            prepend-icon="mdi-account-circle"
            v-model="email"
            label="E-mail"
            :rules="emailRules"
            required="true"
          ></v-text-field>

          <v-text-field
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRules"
            v-model="password"
            label="Password"
            @click:append="showPassword = !showPassword"
            required="true"
          ></v-text-field>

          <v-checkbox v-model="remember" :label="$t('Remember me')"></v-checkbox>
          <v-card-actions class="justify-center">
            <v-btn type="submit" color="primary">{{ $t("login") }}</v-btn>
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
import Vue from "vue";
import { mapActions } from "vuex";
import { LOGIN } from "@/store/auth/actions.type";
import { LoginDto } from "@/models/auth.dto";
import { URL_API } from '../env.json';
export default Vue.extend({
  name: "Login",
  components: {},

  data() {
    return {
      /* State form */
      showPassword: false,

      /* Fields form */
      email: "",
      password: "",
      remember: false,

      /* Validation form */
      emailRules: [
        (v: string) => !!v || this.$t("E-mail is required"),
        (v: string) => /.+@.+/.test(v) || this.$t("E-mail must be valid"),
      ],
      passwordRules: [(v: string) => !!v || this.$t("Password is required")],
    };
  },

  computed: {},

  methods: {
    ...mapActions({
      login: `auth/${LOGIN}`,
    }),

    onSubmit() {
      const loginDto: LoginDto = new LoginDto({
        email: this.email,
        password: this.password,
        remember: this.remember,
      });

      this.login(loginDto)
        .then((data) => {
          console.log(data);
        })
        .catch(() => {
          console.log("problema");
        });
    },
  },
});
</script>
