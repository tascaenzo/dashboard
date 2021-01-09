import axios from 'axios';

import { LoginDto } from '@/models/auth.dto';
import { LOGIN, LOGOUT } from './actions.type';
import { GET_IS_AUTH } from './getters.type';
import { URL_API } from '../../env.json';

const state = () => ({
  isAuth: false,
  remember: false,
  token: '',
  refreshToken: '',
  user: null
})

const getters = {
  [GET_IS_AUTH]: (state: { isAuth: boolean }) => { return state.isAuth; }
}

const mutations = {}

const actions = {
  [LOGIN]: async (context: unknown, dto: LoginDto) => {

    console.log(typeof dto);
    return axios.post(`${URL_API}/auth/login`, dto)
      .then(function (response) {
        const { data } = response;
        return data;
      })
      .catch(function (error) {
        return error;
      });

  },
  [LOGOUT]: (context: unknown, pyload: LoginDto) => {
    console.log(typeof pyload);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}