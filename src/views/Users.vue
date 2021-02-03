<template>
  <CrudTable
    title="Users - Table"
    :headers="test"
    :create="true"
    :update="true"
    :remove="true"
    :exportTable="true"
  />
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "@/plugins/i18n";
import CrudTable from "@/components/CrudTable.vue";

export default Vue.extend({
  name: "User",
  components: { CrudTable },

  data: () => ({
    test: [
      {
        text: "Dessert (100g serving)",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: `${i18n.t("Actions")}`, value: "actions", sortable: false }
    ]
  })
});
</script>
