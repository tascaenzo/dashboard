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
  /*background-color: #5f1414;*/
  /*style="position: absolute; top: 50%"*/
}
</style>

<template>
  <v-layout>
    <v-flex lg8 md6 sm4 bg v-show="!$vuetify.breakpoint.xs" />
    <v-flex lg4 md6 sm8 xs12 form>
      <v-container>
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

          <p>{{ $tc("message", 1) }}</p>
          {{ $i18n.locale }}
          <v-checkbox label="Do you agree?"></v-checkbox>
          <v-btn @click="lingua" color="primary">{{$t('login')}}</v-btn>
        </v-form>
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
    lingua() {
      this.$i18n.locale = "en";
    },
  },
};
</script>