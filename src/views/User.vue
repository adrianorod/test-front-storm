<template>
  <div class="User">
    <Header />
    <v-container fluid class="px-9 py-6">
      <UserList :headers="headersListConfig" :isLoading="isLoading" :list="users" />
    </v-container>
  </div>
</template>

<script>
import CONST from '../utils/constants';
import Header from '../components/header/Header.vue';
import UserList from '../components/user-list/UserList.vue';

export default {
  name: 'User',

  components: {
    Header,
    UserList,
  },

  data: () => ({
    headersListConfig: [
      { text: '', value: '', sortable: false },
      { text: 'USUÁRIO', value: 'user' },
      { text: 'EMAIL', value: 'email' },
      {
        align: 'center',
        sortable: false,
        text: 'DATA DE INCLUSÃO',
        value: 'inclusionDate',
      },
      {
        align: 'center',
        sortable: false,
        text: 'DATA DE ALTERAÇÃO',
        value: 'changeDate',
      },
      {
        align: 'center',
        sortable: false,
        text: 'REGRAS',
        value: 'rules',
      },
      {
        align: 'center',
        sortable: false,
        text: 'STATUS',
        value: 'status',
      },
      {
        align: 'end',
        sortable: false,
        text: '',
        value: 'btnAcoes',
        width: 150,
      },
      {
        align: 'center',
        sortable: false,
        text: 'AÇÕES',
        value: 'acoes',
        width: 70,
      },
    ],
  }),

  mounted() {
    this.$store.dispatch('users/loadUsers');
  },

  computed: {
    isLoading() {
      return this.$store.state.users.usersLoadStatus === CONST.LOAD_STATUS.LOADING;
    },
    users() {
      return this.$store.state.users.users;
    },
  },
};
</script>
