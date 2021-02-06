import { GetterTree } from "vuex";
import { State, state } from "./state";

type Getters = {
  getKey(): string;
};

export const getters: GetterTree<State, unknown> & Getters = {
  getKey() {
    return state.key;
  }
};
