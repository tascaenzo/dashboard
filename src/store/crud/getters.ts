import { GetterTree } from "vuex";
import { State, state } from "./state";

type Getters = {
  getItem(): {};
  getItems(): {}[];
};

export const getters: GetterTree<State, unknown> & Getters = {
  getItem() {
    return state.item;
  },
  getItems() {
    return state.items;
  }
};
