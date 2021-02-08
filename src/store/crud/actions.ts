import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import { getters } from "./getters";
import { State } from "./state";
import { ActionTypes as ActionNotificationTypes } from "@/store/notification/actions";
import axios from "axios";
import { NotificationDto } from "@/models/notification.dto";
import store from "../index";

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
    await axios.post(getters.getModelPath(), dto).then(data => {
      context.commit(MutationTypes.SET_ITEM, data.data);
    });
    return getters.getItem();
  },
  async [ActionTypes.READ](context: ActionAugments, id: string) {
    await axios.get(`${getters.getModelPath()}/${id}`).then(data => {
      context.commit(MutationTypes.SET_ITEMS, data.data);
    });
    return getters.getItem();
  },
  async [ActionTypes.READ_ALL](context: ActionAugments) {
    await axios.get(getters.getModelPath()).then(data => {
      context.commit(MutationTypes.SET_ITEMS, data.data);
    });
    return getters.getItems();
  },
  async [ActionTypes.UPDATE](context: ActionAugments, dto: { id: string }) {
    await axios.put(`${getters.getModelPath()}/${dto.id}`, dto).then(data => {
      context.commit(MutationTypes.SET_ITEMS, data.data);
    });
    return getters.getItem();
  },
  async [ActionTypes.DELETE](context: ActionAugments, id: string) {
    return axios
      .delete(`${getters.getModelPath()}/${id}`)
      .then(async data => {
        const { n, ok, deletedCount } = data.data;
        if (n === 1 && ok === 1 && deletedCount === 1) {
          await context.dispatch(ActionTypes.READ_ALL);
          store.dispatch(
            ActionNotificationTypes.PUSH_NOTIFICATION,
            new NotificationDto({
              message: "DELETE_SUCCESS",
              type: "success",
              autoClose: true
            })
          );
          return true;
        }
        store.dispatch(
          ActionNotificationTypes.PUSH_NOTIFICATION,
          new NotificationDto({
            message: "DELETE_ERROR",
            type: "error",
            autoClose: true
          })
        );
        return false;
      })
      .catch(() => {
        store.dispatch(
          ActionNotificationTypes.PUSH_NOTIFICATION,
          new NotificationDto({
            message: "DELETE_ERROR",
            type: "error",
            autoClose: true
          })
        );
        return false;
      });
  }
};
