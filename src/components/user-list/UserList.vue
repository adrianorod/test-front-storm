<template>
  <div>
    <v-data-table
      :headers="headers"
      :items-per-page="6"
      :items="filteredList"
      :loading="isLoading"
      :page.sync="page"
      :search="search"
      @page-count="pageCount = $event"
      class="user-list"
      hide-default-footer
      item-key="id"
      loading-text="Carregando..."
      show-select
      single-select
      v-model="selectedRow"
    >
      <template v-slot:item.status="{ item }">
        <span class="item-status">{{ item.status ? 'ATIVO' : 'INATIVO' }}</span>
      </template>
      <template v-slot:item.btnAcoes>
        <div class="item-btn-acoes mx-n3">
          <v-icon
            @click.prevent="resetActions"
            class="mr-3"
            color="#666666"
            size="20"
          >mdi-delete</v-icon>
          <v-icon
            @click.prevent="resetActions"
            class="mr-3"
            color="#666666"
            size="20"
          >mdi-package-down</v-icon>
          <v-icon
            @click.prevent="resetActions"
            class="mr-3"
            color="#666666"
            size="20"
          >mdi-security</v-icon>
          <v-icon
            @click.prevent="resetActions"
            color="#666666"
            size="20"
          >mdi-pencil</v-icon>
        </div>
      </template>
      <template v-slot:item.acoes="{ item }">
        <v-icon
          @click.prevent="selectedRow = [item]"
          class="item-acoes"
          color="#666666"
          size="20"
        >
          mdi-dots-horizontal
        </v-icon>
      </template>
    </v-data-table>
    <Pagination :page="page" :page-count="pageCount" @update:page="page = $event" />
  </div>
</template>

<script>
import Pagination from '../pagination/Pagination.vue';

export default {
  name: 'UserList',

  props: {
    headers: Array,
    isLoading: Boolean,
    list: Array,
  },

  components: {
    Pagination,
  },

  data: () => ({
    page: 1,
    pageCount: 0,
    selectedRow: [],
  }),

  computed: {
    search() {
      return this.$store.state.users.search;
    },
    inclusionDateSearch() {
      return this.$store.state.users.inclusionDateSearch;
    },
    changeDateSearch() {
      return this.$store.state.users.changeDateSearch;
    },
    statusSearch() {
      return this.$store.state.users.statusSearch;
    },
    filteredList() {
      return this.list
        .filter((item) => (
          this.inclusionDateSearch.length <= 0
          || this.inclusionDateSearch.some((date) => date === item.inclusionDate)
        ))
        .filter((item) => (
          this.changeDateSearch.length <= 0
          || this.changeDateSearch.some((date) => date === item.changeDate)
        ))
        .filter((item) => (
          this.statusSearch.length <= 0
          || this.statusSearch.some((date) => date === item.status)
        ));
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
