<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <v-btn type="submit" @click="addMsg" color="primary">test</v-btn>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <Notification />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Notification from "@/components/Notification.vue";
import { ActionTypes } from "@/store/notification/actions";
import { NotificationDto } from "@/models/notification.dto";

export default Vue.extend({
  name: "Home",

  data: function() {
    return {
      n: 0
    };
  },

  components: {
    HelloWorld,
    Notification
  },
  methods: {
    async addMsg() {
      this.$store.dispatch(
        ActionTypes.PUSH_NOTIFICATION,
        new NotificationDto({
          message: "Ciao" + this.n++,
          type: "success",
          autoClose: true
        })
      );
    }
  }
});
</script>
