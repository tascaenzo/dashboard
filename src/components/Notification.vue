<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 15px;
  width: 320px;
}
</style>

<template>
  <div class="notifications-list">
    <v-alert border="left" dismissible elevation="5" type="success" prominent>
      Test 1
    </v-alert>
        <v-alert border="left" dismissible elevation="5" type="success" prominent>
      Test 2
    </v-alert>
        <v-alert border="left" dismissible elevation="5" type="success" prominent>
      Test 3
    </v-alert>
        <v-alert border="left" dismissible elevation="5" type="success" prominent>
      Test 4
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { mapState } from "vuex";

export default Vue.extend({
  name: 'Notification',

  data: () => ({})
})
</script>
