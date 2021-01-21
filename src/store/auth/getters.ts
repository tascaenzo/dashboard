import { GetterTree } from "vuex";
import { State, state } from "./state";
import { UserDto } from "@/models/user.dto";

type Getters = {
  getIsInit(): boolean;
  getIsAuth(): boolean;
  getUser(): UserDto | null;
  getToken(): string | null;
  getRefreshToken(): string | null;
};

export const getters: GetterTree<State, State> & Getters = {
  getIsInit() {
    return state.isInit;
  },
  getIsAuth() {
    return state.isAuth;
  },
  getUser() {
    return state.user;
  },
  getToken() {
    return state.token;
  },
  getRefreshToken() {
    return state.refreshToken;
  }
};
