import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import { getters } from "./getters";
import { State } from "./state";
import { NotificationDto } from "@/models/notification.dto";
import { ActionTypes as ActionNotificationTypes } from "@/store/notification/actions";
import store from "@/store";
import { URL_API } from "@/env.json";
import axios from "axios";

export enum ActionTypes {
  CREATE = "CREATE",
  READ = "READ",
  READ_ALL = "READ_ALL",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.CREATE](context: ActionAugments, dto: {}): Promise<{}>;
  [ActionTypes.READ](context: ActionAugments, id: string): {};
  [ActionTypes.READ_ALL](context: ActionAugments): Promise<{}> | null;
  [ActionTypes.UPDATE](context: ActionAugments, dto: {}): Promise<{}>;
  [ActionTypes.DELETE](context: ActionAugments, id: string): Promise<boolean>;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.CREATE](context: ActionAugments, dto: {}) {
    return {};
  },
  async [ActionTypes.READ](context: ActionAugments, id: string) {
    return {};
  },
  async [ActionTypes.READ_ALL](context: ActionAugments) {
    return {};
  },
  async [ActionTypes.UPDATE](context: ActionAugments, dto: {}) {
    return {};
  },
  async [ActionTypes.DELETE](context: ActionAugments, id: string) {
    return true;
  }
};
