import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import { getters } from "./getters";
import { State } from "./state";
import { LoginDto } from "@/models/auth.dto";
import { NotificationDto } from "@/models/notification.dto";
import { ActionTypes as ActionNotificationTypes } from "@/store/notification/actions";
import store from "@/store";
import { URL_API } from "@/env.json";
import axios from "axios";
import { UserDto } from "@/models/user.dto";
//import { UserDto } from "@/models/user.dto";

export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  ME = "ME",
  INIT_SESSION = "INIT_SESSION",
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
  [ActionTypes.ME](context: ActionAugments): UserDto /*Promise<UserDto>*/;
  [ActionTypes.INIT_SESSION](context: ActionAugments): void;
  [ActionTypes.REFRESH_TOKEN](
    context: ActionAugments
  ): Promise<boolean> | boolean;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN](context: ActionAugments, dto: LoginDto) {
    await axios
      .post(`${URL_API}/auth/login`, dto)
      .then(response => {
        const { data } = response;
        context.commit(MutationTypes.SET_IS_AUTH, true);
        context.commit(MutationTypes.SET_USER, data.user);
        context.commit(MutationTypes.SET_TOKEN, data.token);
        context.commit(MutationTypes.SET_REFRESH_TOKEN, data.refreshToken);

        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
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
    context.commit(MutationTypes.SET_IS_AUTH, false);
    context.commit(MutationTypes.SET_USER, null);
    context.commit(MutationTypes.SET_TOKEN, null);
    context.commit(MutationTypes.SET_REFRESH_TOKEN, null);
  },
  [ActionTypes.ME](context: ActionAugments) {
    return new UserDto();
  },
  async [ActionTypes.INIT_SESSION](context: ActionAugments) {
    const token = localStorage.getItem("token");
    const refrshToken = localStorage.getItem("refreshToken");

    if (token === null || token === undefined) {
      context.commit(MutationTypes.SET_IS_AUTH, false);
      context.commit(MutationTypes.SET_USER, null);
      context.commit(MutationTypes.SET_TOKEN, null);
      context.commit(MutationTypes.SET_REFRESH_TOKEN, null);
      context.commit(MutationTypes.SET_IS_INIT, true);
      return;
    }

    await axios
      .get(`${URL_API}/auth/status`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(async response => {
        const { data } = response;
        if (data.isValid === true) {
          context.commit(MutationTypes.SET_IS_AUTH, !data.isRefreshable);
          context.commit(MutationTypes.SET_TOKEN, token);
          context.commit(MutationTypes.SET_REFRESH_TOKEN, refrshToken);

          if (data.isRefreshable === true) {
            await context.dispatch(`Auth/${ActionTypes.REFRESH_TOKEN}`);
          } else {
            const userDto = await context.dispatch(`Auth/${ActionTypes.ME}`);
            context.commit(MutationTypes.SET_USER, userDto);
          }
          context.commit(MutationTypes.SET_IS_INIT, true);
          return;
        }
        context.commit(MutationTypes.SET_IS_AUTH, false);
        context.commit(MutationTypes.SET_USER, null);
        context.commit(MutationTypes.SET_TOKEN, null);
        context.commit(MutationTypes.SET_REFRESH_TOKEN, null);
        context.commit(MutationTypes.SET_IS_INIT, true);
        return;
      })
      .catch(() => {
        context.commit(MutationTypes.SET_IS_AUTH, false);
        context.commit(MutationTypes.SET_USER, null);
        context.commit(MutationTypes.SET_TOKEN, null);
        context.commit(MutationTypes.SET_REFRESH_TOKEN, null);
        context.commit(MutationTypes.SET_IS_INIT, true);
      });

    console.log("init");
  },
  async [ActionTypes.REFRESH_TOKEN](context: ActionAugments) {
    console.log(context);
    if (getters.getRefreshToken() === null || getters.getToken() === null) {
      return false;
    }
    await axios
      .get(`${URL_API}/auth/status`, {
        headers: {
          Authorization: `Bearer ${getters.getToken()}`
        }
      })
      .then(response => {
        const { data } = response;
        console.log(data);
      });
    return true;
  }
};
