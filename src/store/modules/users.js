
import UserService from '../../services/users';
import CONST from '../../utils/constants';

export default {
  namespaced: true,
  state: {
    users: [],
    usersLoadStatus: 0,
    search: '',
    inclusionDateSearch: [],
    changeDateSearch: [],
    statusSearch: [],
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
    setInclusionDateSearch(state, inclusionDateSearch) {
      state.inclusionDateSearch = inclusionDateSearch;
    },
    setChangeDateSearch(state, changeDateSearch) {
      state.changeDateSearch = changeDateSearch;
    },
    setStatusSearch(state, statusSearch) {
      state.statusSearch = statusSearch;
    },
  },
  getters: {
    uniquePropValues: (state) => (key) => (
      state.users
        .map((user) => user[key])
        .filter((user, index, arr) => arr.indexOf(user) === index)
        .sort()
    ),
    inclusionDates: (state, getters) => getters.uniquePropValues('inclusionDate'),
    changeDates: (state, getters) => getters.uniquePropValues('changeDate'),
    status: (state, getters) => getters.uniquePropValues('status'),
  },
};
