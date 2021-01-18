import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { getters } from "./getters";
import { State } from "./state";
import { LoginDto } from "@/models/auth.dto";
import { NotificationDto } from "@/models/notification.dto";
import { ActionTypes as ActionNotificationTypes } from "@/store/notification/actions";
import store from "@/store";
import { URL_API } from "@/env.json";
import axios from "axios";

export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REFRESH_TOKEN = "REFRESH_TOKEN"
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.LOGIN](context: ActionAugments, dto: LoginDto): Promise<boolean>;
  [ActionTypes.LOGOUT](context: ActionAugments): void;
  [ActionTypes.REFRESH_TOKEN](context: ActionAugments): Promise<boolean>;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN](context: ActionAugments, dto: LoginDto) {
    await axios
      .post(`${URL_API}/auth/login`, dto)
      .then(response => {
        const { data } = response;
        context.commit(MutationType.SET_IS_AUTH, true);
        context.commit(MutationType.SET_USER, data.user);
        context.commit(MutationType.SET_TOKEN, data.token);
        context.commit(MutationType.SET_REFRESH_TOKEN, data.refreshToken);

        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
      })
      .catch(error => {
        const { data } = error.response;
        for (const e of data.message) {
          store.dispatch(
            ActionNotificationTypes.PUSH_NOTIFICATION,
            new NotificationDto({
              message: e,
              type: "error",
              autoClose: true
            })
          );
        }
      });

    return getters.getIsAuth();
  },
  async [ActionTypes.LOGOUT](context: ActionAugments) {
    axios.delete(`${URL_API}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${getters.getToken()}`
      }
    });
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    context.commit(MutationType.SET_IS_AUTH, false);
    context.commit(MutationType.SET_USER, null);
    context.commit(MutationType.SET_TOKEN, null);
    context.commit(MutationType.SET_REFRESH_TOKEN, null);
  },
  async [ActionTypes.REFRESH_TOKEN](context: ActionAugments) {
    if(getters.getRefreshToken() === null){
      return false;
    }
  };

};
