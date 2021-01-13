<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 15px;
  width: 300px;
}
</style>

<template>
  <div class="notifications-list">
    <v-alert
      v-for="notification in notifications"
      :key="notification.id"
      border="left"
      dismissible
      elevation="5"
      type="success"
      transition="scroll-x-transition"
      prominent
      @click="snackbar"
      v-model="notification.isClosed"

    >
      Test
    </v-alert>
  </div>
</template>

<script lang="ts">
import { state } from '@/store/notification/state'
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'Notification',

  computed: {
    ...mapState({
      notifications: () => state.notifications
    })
  },

  methods: {
    async snackbar () {
      console.log(state.notifications)
    }
  }
})
</script>
