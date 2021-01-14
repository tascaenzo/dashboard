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
      :type="notification.type"
      transition="scroll-x-transition"
      prominent
      @input="closeAlert(notification.id)"
    > {{notification.message}}
    </v-alert>
  </div>
</template>

<script lang="ts">
import { state } from '@/store/notification/state'
import { ActionTypes } from '@/store/notification/actions'
import { mapState, mapActions } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'Notification',

  computed: {
    ...mapState({
      notifications: () => state.notifications
    })
  },

  methods: {
    ...mapActions({
      closeAlert: ActionTypes.REMOVE_NOTIFICATION
    })
  }
})
</script>
