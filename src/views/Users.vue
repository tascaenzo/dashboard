<template>
  <CrudTable
    title="Users - Table"
    path="users"
    :headers="test"
    :deleteAlertKey="test1"
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
    test1: ["id", "email", "name", "surname"],
    test: [
      {
        text: "ID",
        sortable: false,
        value: "id"
      },
      { text: "Nome", value: "name" },
      { text: "Cognome", value: "surname" },
      { text: "E-mail", value: "email" },
      { text: `${i18n.t("ACTIONS")}`, value: "actions", sortable: false }
    ]
  })
});
</script>
