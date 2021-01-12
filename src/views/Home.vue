<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <Notification />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Notification from '@/components/Notification.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    Notification
  }
})
</script>
