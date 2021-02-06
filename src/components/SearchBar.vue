<template>
  <div style="width: 100%">
    <v-text-field
      style="width: 450px;"
      class="mt-3 pt-3"
      dense
      rounded
      label="Search"
      solo-inverted
      prepend-inner-icon="mdi-magnify"
      filled
      :value="search"
      @input="updateKey"
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import { MutationTypes } from "@/store/search/mutations";
import { mapMutations } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "SearchBar",

  data: () => {
    return {
      search: ""
    };
  },

  methods: {
    ...mapMutations({
      updateKey: MutationTypes.SEARCH
    })
  }
});
</script>
