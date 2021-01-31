import { MutationTree } from "vuex";
import { State } from "./state";

export enum MutationTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_ITEM = "SET_ITEM"
}

export type Mutations = {
  [MutationTypes.SET_ITEMS](state: State, items: {}[]): void;
  [MutationTypes.SET_ITEM](state: State, item: {}): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ITEMS](state, items) {
    state.items = items;
  },
  [MutationTypes.SET_ITEM](state, item) {
    state.item = item;
  }
};
