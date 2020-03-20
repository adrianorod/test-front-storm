
import UserService from '../../services/users';
import CONST from '../../utils/constants';

export default {
  namespaced: true,
  state: {
    users: [],
    usersLoadStatus: 0,
    search: '',
  },
  actions: {
    async loadUsers({ commit }) {
      try {
        commit('setUsersLoadStatus', CONST.LOAD_STATUS.LOADING);
        const users = await UserService.getUsers();
        commit('setUsers', users);
        commit('setUsersLoadStatus', CONST.LOAD_STATUS.SUCCESS);
      } catch (err) {
        commit('setUsers', []);
        commit('setUsersLoadStatus', CONST.LOAD_STATUS.ERROR);
      }
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUsersLoadStatus(state, status) {
      state.usersLoadStatus = status;
    },
    setSearch(state, search) {
      state.search = search;
    },
  },
  getters: {
  },
};
