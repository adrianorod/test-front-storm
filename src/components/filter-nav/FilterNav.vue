<template>
  <v-navigation-drawer
    app
    class="filter-nav"
    right
    stateless
    temporary
    v-model="isOpened"
    width="480"
  >
    <v-card height="100%">
      <v-card-title class="pa-6 d-flex justify-space-between">
        <div>
          <v-icon size="24" color="#999">mdi-tune</v-icon>
          <span class="text">filtros</span>
        </div>
        <v-btn
          @click.prevent="updateIsOpened(false)"
          class="mx-2 px-0"
          color="#ffffff"
          height="48"
          min-width="0"
          width="48"
        >
          <v-icon size="20" color="#666">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions>
        <v-card-text class="mt-4">
          Utilize os filtros abaixo para refinar os resultados da tabela,
          clique no botão APLICAR para salvar as alterações.
        </v-card-text>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FilterNav',

  props: {
    isOpened: Boolean,
  },

  data: () => ({
  }),

  methods: {
    updateIsOpened(state) {
      this.$emit('update:is-opened', state);
    },
  },
};
</script>

<style lang="scss">
.filter-nav {
  .v-card {
    &.theme--light {
      background-color: #F5F5F5;
    }

    &__title {
      background-color: #fff;

      > div > .text {
        margin-left: 20px;
        text-transform: uppercase;
      }
    }

    &__text {
      color: #666;
      font-size: .95rem;
      font-style: oblique;
    }
  }
}
</style>
