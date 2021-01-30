<template>
  <v-container>
    <v-row class="pb-3">
      <v-col style="color: #f5f5f5" class="text-h6 pt-12">
        Users - Table
      </v-col>
      <v-col style="text-align: right;">
        <v-btn elevation="5" color="blue-grey" class="ma-2 white--text" fab>
          <v-icon dark>mdi-content-save</v-icon>
        </v-btn>
        <v-btn elevation="5" color="blue-grey" class="ma-2 white--text" fab>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        :search="search"
        class="elevation-1"
        @page-count="pageCount = $event"
      >
        <!-- TOP TABLE -->
        <template v-slot:top>
          <v-toolbar flat> </v-toolbar>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-col>
            <v-btn
              class="mx-2"
              @click="deleteItem(item)"
              fab
              dark
              small
              color="red"
            >
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="cyan">
              <v-icon dark>mdi-pencil</v-icon>
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

<script>
export default {
  data: () => ({
    page: 1,
    pageCount: 5,
    itemsPerPage: 20,
    totalVisible: 7,
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7
      }
    ]
  }),

  methods: {
    deleteItem(item) {
      console.log("Delete", item);
    }
  }
};
</script>
