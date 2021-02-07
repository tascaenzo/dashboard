<template>
  <v-container>
    <v-row class="pb-3">
      <v-col style="color: #f5f5f5" class="text-h6 pt-12">
        {{ $t(title) }}
      </v-col>
      <v-col style="text-align: right">
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
          v-if="create"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
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
          <v-dialog v-model="dialogDelete" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">
                Use Google's location service?
              </v-card-title>
              <v-card-text
                >Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="dialogDelete = false"
                >
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="deleteItem(item)">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-col>
            <v-btn
              v-if="remove"
              class="mx-2"
              @click="dialogDelete = true"
              fab
              dark
              small
              color="red"
            >
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
            <v-btn v-if="update" class="mx-2" fab dark small color="cyan">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
            <v-btn v-else class="mx-2" fab dark small color="cyan">
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
    create: Boolean,
    remove: Boolean,
    update: Boolean,
    exportTable: Boolean,
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
  }),

  computed: {
    ...mapState({
      items: () => crudState.items,
      searchKey: () => searchState.key,
    }),
  },

  methods: {
    ...mapMutations({
      initCrud: `Crud/${MutationTypes.SET_MODEL_PATH}`,
    }),
    ...mapActions({
      fetchData: `Crud/${ActionTypes.READ_ALL}`,
    }),
    deleteItem() {
      this.dialogDelete = false;
    }
  },
});
</script>
