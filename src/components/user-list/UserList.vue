<template>
  <v-data-table
    :headers="headers"
    :items="users"
    item-key="id"
    show-select
  />
</template>

<script>
export default {
  name: 'UserList',

  data: () => ({
    headers: [
      { text: 'USUÁRIO', value: 'user' },
      { text: 'EMAIL', value: 'email' },
      { text: 'DATA DE INCLUSÃO', value: 'inclusionDate' },
      { text: 'DATA DE ALTERAÇÃO', value: 'changeDate' },
      { text: 'REGRAS', value: 'rules' },
      { text: 'STATUS', value: 'status' },
      { text: 'AÇÕES', value: 'acoes' },
    ],
  }),

  mounted() {
    this.$store.dispatch('users/loadUsers');
  },

  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },
};
</script>
