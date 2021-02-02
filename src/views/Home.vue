<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <v-btn type="submit" @click="acction" color="primary">test</v-btn>
    <!--v-btn type="submit" @click="addMsg" color="primary">test</v-btn-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
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
    HelloWorld
  },
  methods: {
    async acction() {
      this.$store.commit("SET_MODEL_PATH", "users");
      await this.$store.dispatch("READ_ALL");
      console.log(this.$store.getters.getItems);
    },
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
