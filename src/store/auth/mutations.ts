import { UserDto } from "@/models/user.dto";
import { MutationTree } from "vuex";
import { State } from "./state";

export enum MutationTypes {
  SET_IS_INIT = "SET_IS_INIT",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_USER = "SET_USER",
  SET_TOKEN = "SET_TOKEN",
  SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN"
}

export type Mutations = {
  [MutationTypes.SET_IS_INIT](state: State, isAuth: boolean): void;
  [MutationTypes.SET_IS_AUTH](state: State, isAuth: boolean): void;
  [MutationTypes.SET_USER](state: State, user: UserDto | null): void;
  [MutationTypes.SET_TOKEN](state: State, token: string | null): void;
  [MutationTypes.SET_REFRESH_TOKEN](
    state: State,
    refreshToken: string | null
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_IS_INIT](state, isInit) {
    state.isInit = isInit;
  },
  [MutationTypes.SET_IS_AUTH](state, isAuth) {
    state.isAuth = isAuth;
  },
  [MutationTypes.SET_USER](state, user) {
    state.user = user;
  },
  [MutationTypes.SET_TOKEN](state, token) {
    state.token = token;
  },
  [MutationTypes.SET_REFRESH_TOKEN](state, refreshToken) {
    state.refreshToken = refreshToken;
  }
};
