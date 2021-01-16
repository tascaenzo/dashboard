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
      :value="notification.isOpen"
    >
      {{ notification.message }}
    </v-alert>
  </div>
</template>

<script lang="ts">
import { state } from "@/store/notification/state";
import { ActionTypes } from "@/store/notification/actions";
import { MutationTypes } from "@/store/notification/mutations";
import { NotificationDto } from "@/models/notification.dto";
import { mapState, mapActions, mapMutations } from "vuex";
import store from "@/store";
import Vue from "vue";

export default Vue.extend({
  name: "Notification",

  computed: {
    ...mapState({
      notifications: () => state.notifications
    })
  },

  watch: {
    notifications: {
      handler: (notifications: NotificationDto[]) => {
        for (const e of notifications) {
          if (!e.isOpen) {
            setTimeout(() => {
              store.dispatch(ActionTypes.REMOVE_NOTIFICATION, e.id);
            }, 300);
          }
        }
      },
      deep: true
    }
  },

  methods: {
    ...mapActions({
      removeNotification: ActionTypes.REMOVE_NOTIFICATION
    }),
    ...mapMutations({
      closeAlert: MutationTypes.CLOSE_NOTIFICATION
    })
  }
});
</script>
