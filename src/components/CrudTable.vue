<template>
  <v-container>
    <v-row class="pb-3">
      <v-col style="color: #f5f5f5" class="text-h6 pt-12">
        {{ $t(title) }}
      </v-col>
      <v-col style="text-align: right">
        <v-btn
          @click="fetchData"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
        >
          <v-icon dark>mdi-refresh</v-icon>
        </v-btn>
        <v-btn
          v-if="exportTable"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
        >
          <v-icon dark>mdi-content-save</v-icon>
        </v-btn>
        <v-btn
          fab
          v-if="create"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          @click="redirect(`${path}/create`)"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <div>
      <v-data-table
        :headers="headers"
        :items="items"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        :search="searchKey"
        class="elevation-3"
        @page-count="pageCount = $event"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-col style="padding-left:0px; margin-left:-10px">
            <v-btn
              v-if="remove"
              class="mx-2"
              @click="openAlert(item)"
              fab
              dark
              small
              color="red"
            >
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
            <v-btn
              @click="redirect(`${path}/${item.id}`)"
              v-if="update"
              class="mx-2"
              fab
              dark
              small
              color="cyan"
            >
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              @click="redirect(`${path}/${item.id}`)"
              v-else
              class="mx-2"
              fab
              dark
              small
              color="cyan"
            >
              <v-icon dark>mdi-eye</v-icon>
            </v-btn>
          </v-col>
        </template>
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :total-visible="totalVisible"
          :length="pageCount"
          circle
        />
      </div>
    </div>
    <v-dialog v-model="dialogDelete" persistent max-width="500">
      <v-card>
        <v-card-title class="red">
          <v-icon dark size="42" class="mr-4"> mdi-delete-forever </v-icon>
          <h2 class="display-1 white--text font-weight-light">
            {{ $t("DELETE") }}
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              <v-row class="text" tag="v-card-text">
                <template v-for="key in deleteAlertKey">
                  <v-col class="text-left" tag="strong" cols="3" :key="key">
                    {{ $t(key.toUpperCase()).toUpperCase() }}
                  </v-col>
                  <v-col cols="7" :key="key.toUpperCase()">{{
                    alertItem[key]
                  }}</v-col>
                </template>
              </v-row>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialogDelete = false">
              {{ $t("CANCEL") }}
            </v-btn>
            <v-btn color="red darken-1" text @click="deleteItem">
              {{ $t("DELETE") }}
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { ActionTypes } from "@/store/crud/actions";
import { MutationTypes } from "@/store/crud/mutations";
import { mapActions, mapMutations, mapState } from "vuex";
import { state as crudState } from "@/store/crud/state";
import { state as searchState } from "@/store/search/state";

export default Vue.extend({
  name: "CrudTable",

  props: {
    title: String,
    path: String,
    headers: Array,
    deleteAlertKey: Array,
    create: Boolean,
    remove: Boolean,
    update: Boolean,
    exportTable: Boolean
  },

  async mounted() {
    this.initCrud(this.path);
    this.fetchData();
  },

  data: () => ({
    page: 1,
    pageCount: 5,
    itemsPerPage: 20,
    totalVisible: 7,
    dialogDelete: false,
    search: "",
    alertItem: { id: String }
  }),

  computed: {
    ...mapState({
      items: () => crudState.items,
      searchKey: () => searchState.key
    })
  },

  methods: {
    ...mapMutations({
      initCrud: `Crud/${MutationTypes.SET_MODEL_PATH}`
    }),
    ...mapActions({
      fetchData: `Crud/${ActionTypes.READ_ALL}`,
      deleteAction: `Crud/${ActionTypes.DELETE}`
    }),
    redirect(path: string) {
      this.$router.push(path);
    },
    openAlert(item: { id: StringConstructor }) {
      this.alertItem = item;
      this.dialogDelete = true;
    },
    deleteItem() {
      this.dialogDelete = false;
      this.deleteAction(this.alertItem.id);
    }
  }
});
</script>
