import { LOGIN, LOGOUT } from './actions.type';

const state = () => ({
  isAuth: false,
  remember: false,
  token: '',
  refreshToken: '',
  user: null
})

const getters = {}

const mutations = {}

const actions = {
  [LOGIN]: (context: unknown, pyload: {}) => {
    console.log(pyload);
  },
  [LOGOUT]: (context: unknown, pyload: {}) => {
    console.log(pyload);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}