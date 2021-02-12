<style>
.main {
  position: relative;
  top: -156px;
  margin-bottom: -156px;
}
.background-head {
  height: 130px;
  width: 100%;
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
                @click="redirect(item.path)"
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

      <SearchBar />

      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-row class="pr-6 pl-1">
            <v-list-item v-bind="attrs" v-on="on">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-item-avatar>
              <v-list-item-title>{{
                `${me.name} ${me.surname}`
              }}</v-list-item-title>
            </v-list-item>
          </v-row>

          <v-btn icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item link @click="redirect('/profile')">
            <v-icon class="pr-3">mdi-account</v-icon>
            {{ $t("PROFILE") }}
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item class="p-6" link @click="redirect('/profile')">
            <v-icon class="pr-3">mdi-exit-to-app</v-icon>
            {{ $t("LOGOUT") }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="background">
      <div class="primary background-head" />
      <v-container class="main">
        <slot />
      </v-container>
      <Notification />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Notification from "@/components/Notification.vue";
import SearchBar from "@/components/SearchBar.vue";
import { ActionTypes } from "@/store/auth/actions";
import Store from "@/store";
import { mapState } from "vuex";
import { state as authState } from "@/store/auth/state";

export default Vue.extend({
  name: "Dashboard",
  components: {
    Notification,
    SearchBar
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
  computed: {
    ...mapState({
      me: () => authState.user
    })
  },
  methods: {
    redirect(path: string) {
      this.$router.push(path);
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
