import { NotificationDto } from "@/models/notification.dto";

export type State = {
  notifications: NotificationDto[];
};

export const state: State = {
  notifications: []
};
