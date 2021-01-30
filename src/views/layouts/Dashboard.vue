<style>
.main {
  position: absolute;
  top: -5px;
}
.background-head {
  /*position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  height: 170px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  width: 100%;*/
  height: 200px;
}
</style>
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-card-actions class="justify-center">
          <img alt="Logo" height="60" src="@/assets/img/logo.webp" />
        </v-card-actions>
      </v-list-item>

      <v-list flat>
        <v-list-item-group model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                @click="redirect(item)"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" app dark elevate-on-scroll>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>{{ drawer ? "mdi-format-align-left" : "mdi-menu" }}</v-icon>
      </v-btn>

      <v-container>
        <v-text-field
          style="width: 400px;"
          class="mt-3 pt-3"
          dense
          rounded
          label="Search"
          solo-inverted
          prepend-inner-icon="mdi-magnify"
          filled
        ></v-text-field>
      </v-container>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/login">Option Login</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="logOut">
              Option Logout
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="refresh"> Refresh </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="background">
      <div class="primary background-head" />
      <v-container class="main px-6">
        <slot />
      </v-container>
      <Notification />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Notification from "@/components/Notification.vue";
import { ActionTypes } from "@/store/auth/actions";
import Store from "@/store"; // path to store file

export default Vue.extend({
  name: "Dashboard",
  components: {
    Notification
  },
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Dashboard", icon: "mdi-view-dashboard", path: "/" },
      { text: "Users", icon: "mdi-account-multiple", path: "/users" },
      { text: "Audience", icon: "mdi-account", path: "/" },
      { text: "Conversions", icon: "mdi-flag", path: "/" }
    ],
    drawer: true
  }),
  methods: {
    redirect(element: { path: string }) {
      console.log(element);
      this.$router.push(element.path);
    },
    logOut() {
      Store.dispatch(`Auth/${ActionTypes.LOGOUT}`);
    },
    refresh() {
      Store.dispatch(`Auth/${ActionTypes.REFRESH_TOKEN}`);
    }
  }
});
</script>
