<template>
  <v-app-bar app class="header" height="96">
    <v-container fluid class="px-6">
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="3">
          <v-text-field
            class="search-input"
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquisar..."
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-btn class="mx-2 px-0" color="#ffffff" width="48" height="48" min-width="0">
          <v-icon size="20" color="#666666">mdi-tune</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
  }),

  computed: {
    search: {
      get() {
        return this.$store.state.users.search;
      },
      set(e) {
        this.$store.commit('users/setSearch', e);
      },
    },
  },
};
</script>

<style lang="scss">
.header {
  box-shadow: 0 -8px 23px 0 rgba(0, 0, 0, 0.18) !important;

  .v-input.search-input {
    > .v-input__control {
      > .v-input__slot {
        &:before {
          border-color: rgba(233, 233, 233, 1);
          border-width: 2px 0 0 0;
        }

        > .v-text-field__slot {
          > .v-label {
            font-style: oblique;
            font-weight: 300;
            font-size: .9rem;
            color: #000;
          }
        }
      }
    }
  }
}
</style>
