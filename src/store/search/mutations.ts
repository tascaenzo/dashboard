import { MutationTree } from "vuex";
import { State } from "./state";

export enum MutationTypes {
  SEARCH = "SEARCH"
}

export type Mutations = {
  [MutationTypes.SEARCH](state: State, key: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SEARCH](state, key) {
    state.key = key;
  }
};
