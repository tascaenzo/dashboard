/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { getters } from './getters'
import { State } from './state'
import { LoginDto } from '@/models/auth.dto'
import { URL_API } from '@/env.json'
import axios from 'axios'

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.LOGIN](context: ActionAugments, dto: LoginDto): Promise<boolean>
  [ActionTypes.LOGIN](context: ActionAugments, dto: LoginDto): Promise<boolean>
}

export const actions: ActionTree<State, State> = {
  async [ActionTypes.LOGIN] ({ commit }, dto) {
    await axios.post(`${URL_API}/auth/login`, dto)
      .then(response => {
        const { data } = response
        commit(MutationType.SET_IS_AUTH, true)
        commit(MutationType.SET_USER, data.user)
        commit(MutationType.SET_TOKEN, data.token)
        commit(MutationType.SET_REFRESH_TOKEN, data.refreshToken)

        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken))
      })
      .catch((error) => {
        console.log(error)
      })

    return getters.getIsAuth()
  }
}
