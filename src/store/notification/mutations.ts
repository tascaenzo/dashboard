/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDto } from '@/models/notification.dto'
import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationTypes {
  PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
  CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION',
  OPEN_NOTIFICATION = 'OPEN_NOTIFICATION',
}

export type Mutations = {
  [MutationTypes.PUSH_NOTIFICATION](state: State, dto: NotificationDto): void
  [MutationTypes.REMOVE_NOTIFICATION](state: State, id: string): void
  [MutationTypes.CLOSE_NOTIFICATION](state: State, id: string): void
  [MutationTypes.OPEN_NOTIFICATION](state: State, id: string): void
}

export const mutations: MutationTree<State> & Mutations = {

  [MutationTypes.PUSH_NOTIFICATION] (state, dto) {
    state.notifications.push(dto)
  },
  [MutationTypes.REMOVE_NOTIFICATION]  (state, id) {
    state.notifications = state.notifications.filter((e) => {
      return !(e.id === id)
    })
  },
  [MutationTypes.CLOSE_NOTIFICATION] (state, id) {
    for (const e of state.notifications) {
      if (e.id === id) { e.isOpen = false }
    }
  },
  [MutationTypes.OPEN_NOTIFICATION] (state, id) {
    for (const e of state.notifications) {
      if (e.id === id) { e.isOpen = true }
    }
  }
}
