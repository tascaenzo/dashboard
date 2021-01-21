import { UserDto } from "@/models/user.dto";

export type State = {
  isInit: boolean;
  isAuth: boolean;
  token: string | null;
  refreshToken: string | null;
  user: UserDto | null;
};

export const state: State = {
  isInit: false,
  isAuth: false,
  user: null,
  token: null,
  refreshToken: null
};
