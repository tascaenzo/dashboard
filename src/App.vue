<template>
  <div id="app">
    <component :is="this.$route.meta.layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>
