<template>
  <v-container>
    <v-row class="pb-3">
      <v-col style="color: #f5f5f5" class="text-h6 pt-12">
        {{ $t("Users - Create") }}
      </v-col>
      <v-col style="text-align: right">
        <v-btn elevation="5" color="blue-grey" class="ma-2 white--text" fab>
          <v-icon dark>mdi-refresh</v-icon>
        </v-btn>
        <v-btn elevation="5" color="blue-grey" class="ma-2 white--text" fab>
          <v-icon dark>mdi-file-pdf-box</v-icon>
        </v-btn>
        <v-btn elevation="5" color="blue-grey" class="ma-2 white--text" fab>
          <v-icon dark>mdi-content-save</v-icon>
        </v-btn>
        <v-btn elevation="5" color="blue-grey" class="ma-2 white--text" fab>
          <v-icon dark>mdi-eraser</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="pa-8" elevation="3">
      <form>
        <v-text-field label="Name" required></v-text-field>
        <v-text-field label="E-mail" required></v-text-field>
        <v-select v-model="select" label="Item" required></v-select>
        <v-checkbox
          v-model="checkbox"
          label="Do you agree?"
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
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  })
});
</script>
