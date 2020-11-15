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
  background-color: #FAFAFA;
}

.footer {
  bottom: 1%;
  position: fixed;
}
</style>

<template>
  <v-layout>
    <v-flex lg7 md6 sm4 bg v-show="!$vuetify.breakpoint.xs" />
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
          <v-flex class="footer">
            Copyright © Enzo Tasca {{ new Date().getFullYear() }}
          </v-flex>
        </v-card-actions>
      </v-container>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
export default {
  name: "Login",
  components: {},
  data() {
    return { showPassword: false };
  },

  methods: {
    sigin() {
      //this.$i18n.locale = "en";
    },
  },
};
</script>