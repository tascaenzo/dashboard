import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { getters } from "./getters";
import { State } from "./state";
import { LoginDto } from "@/models/auth.dto";
import { URL_API } from "@/env.json";
import axios from "axios";

export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.LOGIN](context: ActionAugments, dto: LoginDto): Promise<boolean>;
  // [ActionTypes.LOGOUT](context: ActionAugments, dto: LoginDto): Promise<boolean>
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
        console.log(error);
      });

    return getters.getIsAuth();
  }
};
