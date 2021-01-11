/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserDto } from '@/models/user.dto'

export type State = {
  isAuth: boolean
  token: string | null
  refreshToken: string | null
  user: UserDto | null
}

export const state: State = {
  isAuth: false,
  user: null,
  token: null,
  refreshToken: null
}
