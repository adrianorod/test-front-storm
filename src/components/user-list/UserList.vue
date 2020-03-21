<template>
  <v-data-table
    :headers="headers"
    :items="users"
    item-key="id"
    :loading="isLoading"
    loading-text="Carregando..."
    :search="search"
    class="user-list"
  >
    <template v-slot:body="{ items }">
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="item-check">
            <input type="checkbox" />
          </td>
          <td class="item-user">{{ item.user }}</td>
          <td class="item-email">{{ item.email }}</td>
          <td class="item-inclusion-date">{{ item.inclusionDate }}</td>
          <td class="item-change-date">{{ item.changeDate }}</td>
          <td class="item-rules">{{ item.rules }}</td>
          <td class="item-status">
            {{ item.status ? 'ATIVO' : 'INATIVO' }}
          </td>
          <td class="px-0 item-btn-acoes">
            <v-icon size="20" color="#666666" class="mr-3">mdi-delete</v-icon>
            <v-icon size="20" color="#666666" class="mr-3">mdi-package-down</v-icon>
            <v-icon size="20" color="#666666" class="mr-3">mdi-security</v-icon>
            <v-icon size="20" color="#666666">mdi-pencil</v-icon>
          </td>
          <td class="item-acoes">
            <v-icon size="20" color="#666666">mdi-dots-horizontal</v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script>
import CONST from '../../utils/constants';

export default {
  name: 'UserList',

  data: () => ({
    headers: [
      { text: '', value: 'check' },
      { text: 'USUÁRIO', value: 'user' },
      { text: 'EMAIL', value: 'email' },
      {
        text: 'DATA DE INCLUSÃO',
        value: 'inclusionDate',
        align: 'center',
        sortable: false,
      },
      {
        text: 'DATA DE ALTERAÇÃO',
        value: 'changeDate',
        align: 'center',
        sortable: false,
      },
      {
        text: 'REGRAS',
        value: 'rules',
        align: 'center',
        sortable: false,
      },
      {
        text: 'STATUS',
        value: 'status',
        align: 'center',
        sortable: false,
      },
      {
        text: '',
        value: 'btnAcoes',
        sortable: false,
        width: 150,
      },
      {
        text: 'AÇÕES',
        value: 'acoes',
        align: 'center',
        sortable: false,
        width: 70,
      },
    ],
  }),

  mounted() {
    this.$store.dispatch('users/loadUsers');
  },

  computed: {
    users() {
      return this.$store.state.users.users;
    },
    search() {
      return this.$store.state.users.search;
    },
    isLoading() {
      return this.$store.state.users.usersLoadStatus === CONST.LOAD_STATUS.LOADING;
    },
    hasError() {
      return this.$store.state.users.usersLoadStatus === CONST.LOAD_STATUS.ERROR;
    },
  },
};
</script>

<style lang="scss">
.user-list {
  &.theme--light.v-data-table {
    color: #000;

    thead tr th {
      border-bottom: 0 !important;
      color: #000;
      font-weight: 500;
    }

    tbody tr {
      td {
        border-bottom: 0 !important;

        &.item-inclusion-date,
        &.item-change-date,
        &.item-rules,
        &.item-status,
        &.item-acoes {
          text-align: center;
        }

        &.item-check {
          > input {
            background-color: #fff;
          }
        }

        &.item-status {
          color: #31BA1F;
          font-weight: 500;
        }

        .v-data-table__checkbox .v-icon {
          background-color: #fff;
          color: #E9E9E9;

          &:before {
            margin: -4px;
          }
        }
      }

      &:first-child {
        box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.18) inset;
      }

      &:nth-child(even) {
        background-color: #E9E9E9;
      }

      &:nth-child(odd) {
        background-color: #F5F5F5;
      }
    }
  }
}
</style>
