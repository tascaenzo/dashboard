/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetterTree } from 'vuex'
import { State, state } from './state'
import { NotificationDto } from '@/models/notification.dto'

type Getters = {
  // getNotification(id: string): NotificationDto | null
  getNotifications(): NotificationDto[]
}

export const getters: GetterTree<State, State> & Getters = {
  /* getNotification (id: string) {
    for (const e of state.notifications) {
      if (e.id === id) {
        return e
      }
    }
    return null
  }, */
  getNotifications () { return state.notifications }

}
