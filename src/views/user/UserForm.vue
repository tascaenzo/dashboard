<template>
  <v-container>
    <v-row class="pb-3">
      <v-col style="color: #f5f5f5" class="text-h6 pt-12">
        {{ $t("Users - Create") }}
      </v-col>
      <v-col style="text-align: right">
        <v-btn
          v-if="$route.params.id"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
        >
          <v-icon dark>mdi-refresh</v-icon>
        </v-btn>
        <v-btn
          @click="submit"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
        >
          <v-icon dark>mdi-content-save</v-icon>
        </v-btn>
        <v-btn
          @click="clear"
          v-if="!$route.params.id"
          elevation="5"
          color="blue-grey"
          class="ma-2 white--text"
          fab
        >
          <v-icon dark>mdi-eraser</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="pa-10" elevation="3">
      <v-form lazy-validation v-model="valid" ref="form">
        <v-text-field
          prepend-icon="mdi-border-color"
          :label="$t('Name')"
          v-model="dto.name"
          :rules="requiredRules"
        ></v-text-field>

        <v-text-field
          prepend-icon="mdi-border-color"
          :label="$t('Surname')"
          v-model="dto.surname"
        />

        <v-text-field
          :rules="emailRules"
          v-model="dto.email"
          prepend-icon="mdi-email"
          :label="$t('E-mail')"
        />

        <v-text-field
          prepend-icon="mdi-key-variant"
          :label="$t('Password')"
          v-model="dto.password"
          :rules="requiredRules"
        />

        <v-text-field
          prepend-icon="mdi-key-variant"
          :label="$t('Password Confirm')"
          :v-model="passwordConfirm"
          :rules="requiredRules"
        />

        <v-checkbox
          v-model="dto.isBanned"
          :label="$t('Is Banned')"
        ></v-checkbox>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { NotificationDto } from "@/models/notification.dto";
import { UserDto } from "@/models/user.dto";
import { ActionTypes as NotificationActionTypes } from "@/store/notification/actions";
import Vue from "vue";

export default Vue.extend({
  name: "UserForm",

  data() {
    const dto = new UserDto();
    return {
      dto,
      passwordConfirm: "",
      valid: true,

      /* Validation Form */
      emailRules: [
        (v: string) => !!v || this.$t("E-mail is required"),
        (v: string) => /.+@.+\..+/.test(v) || this.$t("E-mail must be valid")
      ],
      requiredRules: [(v: string) => !!v || this.$t("Field is required")]
    };
  },

  methods: {
    async submit() {
      console.log(this.dto);
      if (!(this.$refs.form as HTMLFormElement).validate()) {
        this.$store.dispatch(
          NotificationActionTypes.PUSH_NOTIFICATION,
          new NotificationDto({
            message: "FORM_WARNING",
            type: "warning",
            autoClose: true
          })
        );
        return;
      }
    },
    clear() {
      this.dto = new UserDto();
      this.passwordConfirm = "";
      (this.$refs.form as HTMLFormElement).reset();

      //this.$refs.form;
    }
  }
});
</script>
