<template>
  <v-container>
    <v-row class="pb-3">
      <v-col style="color: #f5f5f5" class="text-h6 pt-12">
        {{ $t("Users - Create") }}
      </v-col>
      <v-col style="text-align: right">
        <v-btn
          v-if="$route.params.id"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
        >
          <v-icon dark>mdi-refresh</v-icon>
        </v-btn>
        <v-btn elevation="5" color="blue-grey" class="ma-2 white--text" fab>
          <v-icon dark>mdi-content-save</v-icon>
        </v-btn>
        <v-btn
          v-if="!$route.params.id"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
        >
          <v-icon dark>mdi-eraser</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="pa-10" elevation="3">
      <form>
        <v-text-field
          prepend-icon="mdi-border-color"
          :label="$t('Name')"
          v-model="name"
          required
        ></v-text-field>

        <v-text-field
          prepend-icon="mdi-border-color"
          :label="$t('Surname')"
          v-model="surname"
          required
        />

        <v-text-field prepend-icon="mdi-email" :label="$t('E-mail')" required />

        <v-text-field
          prepend-icon="mdi-key-variant"
          :label="$t('Password')"
          v-model="password"
          required
        />

        <v-text-field
          prepend-icon="mdi-key-variant"
          :label="$t('Password Confirm')"
          :v-model="passwordConfirm"
          required
        />

        <v-checkbox
          v-model="idBanned"
          :label="$t('Is Banned ?')"
          required
        ></v-checkbox>
      </form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserForm",
  data: () => ({
    valid: true,
    name: "",
    surnmae: "",
    password: "",
    passwordConfirm: "",
    email: "",
    isBanned: false
  })
});
</script>
