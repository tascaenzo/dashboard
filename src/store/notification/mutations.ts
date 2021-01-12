/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDto } from '@/models/notification.dto'
import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationType {
  PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}

export type Mutations = {
  [MutationType.PUSH_NOTIFICATION](state: State, dto: NotificationDto): void
  [MutationType.REMOVE_NOTIFICATION](state: State, id: string): void

}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.PUSH_NOTIFICATION] (state, dto) {
    state.notifications.push(dto)
  },
  [MutationType.REMOVE_NOTIFICATION] (state, id) {
    state.notifications = state.notifications.filter((e) => {
      return !(e.id === id)
    })
  }
}
