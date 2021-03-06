import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import { State } from "./state";
import { NotificationDto } from "@/models/notification.dto";

const TIME_OUT = 5000;

export enum ActionTypes {
  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.PUSH_NOTIFICATION](
    context: ActionAugments,
    dto: NotificationDto
  ): void;
  [ActionTypes.REMOVE_NOTIFICATION](context: ActionAugments, id: string): void;
};

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.PUSH_NOTIFICATION](
    context: ActionAugments,
    dto: NotificationDto
  ) {
    context.commit(MutationTypes.PUSH_NOTIFICATION, dto);

    if (dto.autoClose === true) {
      setTimeout(() => {
        context.commit(MutationTypes.CLOSE_NOTIFICATION, dto.id);
      }, TIME_OUT);
    }
  },
  [ActionTypes.REMOVE_NOTIFICATION](context: ActionAugments, id: string) {
    context.commit(MutationTypes.REMOVE_NOTIFICATION, id);
  }
};
