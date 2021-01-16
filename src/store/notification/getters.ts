import { GetterTree } from "vuex";
import { State, state } from "./state";
import { NotificationDto } from "@/models/notification.dto";

type Getters = {
  getNotifications(): NotificationDto[];
};

export const getters: GetterTree<State, unknown> & Getters = {
  getNotifications() {
    return state.notifications;
  }
};
