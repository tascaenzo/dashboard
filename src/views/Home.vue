<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <v-btn type="submit" @click="addMsg" color="primary">test</v-btn>

    <Notification />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Notification from '@/components/Notification.vue'
import { ActionTypes } from '@/store/notification/actions'
import { NotificationDto } from '@/models/notification.dto'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    Notification
  },
  methods: {
    async addMsg () {
      this.$store.dispatch(ActionTypes.PUSH_NOTIFICATION, new NotificationDto())
    }
  }
})
</script>
