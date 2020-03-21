<template>
  <v-data-table
    :headers="headers"
    :items="users"
    item-key="id"
    show-select
    single-select
    :loading="isLoading"
    loading-text="Carregando..."
    :search="search"
    class="user-list"
    v-model="selectedRow"
  >
    <template v-slot:item.status="{ item }">
      <span class="item-status">{{ item.status ? 'ATIVO' : 'INATIVO' }}</span>
    </template>
    <template v-slot:item.btnAcoes>
      <div class="item-btn-acoes mx-n3">
        <v-icon
          size="20"
          color="#666666"
          class="mr-3"
          @click.prevent="resetActions"
        >mdi-delete</v-icon>
        <v-icon
          size="20"
          color="#666666"
          class="mr-3"
          @click.prevent="resetActions"
        >mdi-package-down</v-icon>
        <v-icon
          size="20"
          color="#666666"
          class="mr-3"
          @click.prevent="resetActions"
        >mdi-security</v-icon>
        <v-icon
          size="20"
          color="#666666"
          @click.prevent="resetActions"
        >mdi-pencil</v-icon>
      </div>
    </template>
    <template v-slot:item.acoes="{ item }">
      <v-icon
        size="20"
        color="#666666"
        class="item-acoes"
        @click.prevent="selectedRow = [item]"
      >
        mdi-dots-horizontal
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import CONST from '../../utils/constants';

export default {
  name: 'UserList',

  data: () => ({
    headers: [
      { text: '', value: '', sortable: false },
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
        align: 'end',
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
    selectedRow: [],
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

  methods: {
    resetActions() {
      this.selectedRow = [];
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

        .item-status {
          color: #31BA1F;
          font-weight: 500;
        }

        .item-acoes {
          cursor: pointer;
        }

        .item-btn-acoes {
          display: none;

          .v-icon {
            cursor: pointer;
          }
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

      &.v-data-table__selected,
      &.v-data-table__selected:hover {
        background-color: #fff !important;
        color: #E9E9E9;

        > td {
          border-bottom: 2px solid #D83367 !important;

          > .item-status,
          > .item-acoes {
            color: #E9E9E9 !important;
          }

          > .item-btn-acoes {
            display: block;
          }
        }
      }
    }
  }
}
</style>
