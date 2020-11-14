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
</style>

<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      md="7"
      class="bg"
      v-show="!($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)"
    />
    <v-col cols="12" md="5" class="form">
      <v-container>
        <v-form>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Prepend"
              prepend-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>